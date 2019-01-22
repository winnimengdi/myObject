class Move{
    constructor(){
        
        this.remove = document.getElementById('remove');
        this.modelTree = document.getElementsByClassName('modal-tree')[0];
        this.content = document.getElementsByClassName('content')[0];
        this.ok = document.getElementsByClassName('ok')[0];
        this.cancel = document.getElementsByClassName('cancel')[0];
        this.cc = document.getElementsByClassName('icon_close')[0];
    }
    init(){
        
        this.remove.addEventListener('click',this.rem.bind(this));
        this.ok.addEventListener('click',this.submit.bind(this));
        this.cancel.addEventListener('click',this.cance.bind(this));
        this.cc.addEventListener('click',this.close.bind(this));

    }
    close(){
        this.modelTree.style.display = 'none';   
    }
    rem(){
        // console.log(tt.renderTree(-1,-1))
        this.aa = [];
        for(let kk in data){
            if(data[kk].checked == true){
                this.aa.push(data[kk]);
            }
        }
        if(this.aa.length == 0){
            alert('请选择要移动的文件夹');
            return ;
        }
        this.modelTree.style.display = 'block';
        tt.num = -1;
        this.content.appendChild(this.renderTree1(-1,-1));
    }
    renderTree1(id,num){
        this.content.innerHTML = '';
        this.num++;
        let ul = document.createElement('ul');
        ul.style.paddingLeft = this.num * 5 + 'px';

        let arrChild = getChild(id);       //得到传进去的id的孩子，第一次传pid,为-1，所有的孩子数组
        arrChild && arrChild.forEach((e)=>{ //e代表data中的一个对象，{id:'',pid:''....}
            
            let eChild = getChild(e.id);

            let li = document.createElement('li');
            
            let div = document.createElement('div');
            div.className = `tree-title ${eChild ? 'tree-ico' : ''} close`; //有按钮
            li.appendChild(div);

            let span = document.createElement('span');
            span.className = `${eChild ? 'open' : ''}`; 
            span.innerHTML = `<i></i>${e.title}`;
            span.dataset.id = e.id;

            this.content.onclick = function (ev){
                this.array = [];
                for(let key in data){
                    if(data[key].checked == true){
                        this.array.push(data[key]);
                    }
                }
                this.array.forEach((e)=>{
                    e.pid = Number(ev.target.dataset.id);
                });}
            div.appendChild(span);

            if(eChild){
                li.appendChild(this.renderTree1(e.id,num));
            }
            ul.appendChild(li);
        });
        return this.content.appendChild(ul);
    }
    submit(){
        this.modelTree.style.display = 'none';
        ff.render(0);
        bb.render(0);
        tt.renderTree(-1,-1);
    }
    cance(){
        this.modelTree.style.display = 'none';   
    }
}
let rm = new Move();
rm.init();