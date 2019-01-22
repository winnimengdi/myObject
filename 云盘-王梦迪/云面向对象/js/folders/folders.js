let {getChild,getChildren,getParent,getParents,meet,addAttr} = tool;
addAttr('num',[]); //给数据添加属性num，默认为[]
class Folders{
    constructor(){
        this.folderBox = document.getElementsByClassName('folder-content')[0];
        this.folders = this.folderBox.getElementsByClassName('folders')[0];
        this.breadmenu = this.folderBox.getElementsByClassName('breadmenu')[0];
        this.checkall = this.folderBox.getElementsByClassName('checkall')[0].children[0];
        this.breadNav = this.folderBox.getElementsByClassName('bread-nav')[0];
        this.fEmpty = this.folderBox.getElementsByClassName('f-empty')[0]; 
        this.modelTree = document.getElementsByClassName('modal-tree')[0];
        this.content = this.modelTree.getElementsByClassName('content')[0];
        // this.curPid;//id为2，得到其pid,
            
    }
    
    //渲染时用父亲的id，得到他的孩子，来进行渲染，有规律
    render(id){  
        // console.log(data[id])
        this.folders.innerHTML = "";
        for(let key in data){
            if(data[key]["pid"] == data[id]["pid"]){
                    data[key]["checked"] = false;
            }
        }
        let arrChild = getChild(id);
        if(!arrChild){
            this.fEmpty.style.display = 'block';
        }
        else{
            arrChild.forEach((ele)=>{this.create(ele)});
        }

    }

    //创建元素
    create (ele){    
        let div= document.createElement("div");
        div.dataset.id = ele.id;
        div.dataset.pid = ele.pid;
        div.className = "file-item";
        this.folders.appendChild(div);

        let img = document.createElement("img");
        img.src = "img/folder-b.png";
        img.alt = "";
        img.addEventListener("dblclick",() => {
            this.imgClick(ele)
        });
        div.appendChild(img);

        let span = document.createElement("folder-name");
        span.className = "folder-name";
        span.innerHTML = ele.title;
        div.appendChild(span);

        let input = document.createElement("input");
        input.type = "text";
        input.className = "editor";
        div.appendChild(input);

        let i = document.createElement("i");
        i.className = ele.checked ? 'checked' : '';
        i.addEventListener('click',(ev)=>{
            ev.cancelBubble = true;
            ele.checked = !ele.checked;
            this.render(ele.pid);
        });
        div.appendChild(i);

        // //当点击外面时，会取消选中
        // this.folderBox.addEventListener('click',()=>{
        //     ele.checked = false;
        //     this.render(ele.pid);
        // })
    }

    //当点击div触发的方法
    imgClick (ele){  
        this.render(ele.id);  //ele.id指的是点击的那个id,获取到以它为父亲的所有孩子
        bb.render(ele.id);  //不可以找它的孩子，孩子可能会为空的
        
    }
}

let ff = new Folders();
ff.render(0);