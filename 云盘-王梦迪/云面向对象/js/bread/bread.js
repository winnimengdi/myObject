
class Bread{
    constructor(){
        this.folderBox = document.getElementsByClassName('folder-content')[0];
        this.folderContent = document.getElementsByClassName("folder-content")[0];
        this.breadmenu = this.folderContent.getElementsByClassName("breadmenu")[0];
        this.checkall = this.breadmenu.getElementsByClassName("checkall")[0];
        this.breadNav = this.breadmenu.getElementsByClassName('bread-nav')[0];
        this.fEmpty = this.folderBox.getElementsByClassName('f-empty')[0]; 
        this.parents = [];

        this.b = this.folderContent.getElementsByClassName("breadmenu");
        // this.checkedAll = this.checkall.getElementsById("checkedAll");
    }
    render(id){
        this.breadNav.innerHTML = '';
        for(let key in data){    //全部的勾都给清了
            data[key]["checked"] = false;
        }
        this.parents = getParents(id);//[{…}, {…}, {…}
        this.parents.forEach((e,i,arr)=>{ //all是指当前操作的数组
            if(i < arr.length - 1){
                let a = document.createElement('a');
                a.href = "javascript:;";
                a.innerHTML = e.title;
                a.addEventListener('click',()=>{
                    this.alink(e);
                });
                this.breadNav.appendChild(a);
            }else{
                let span = document.createElement('span');
                span.innerHTML = e.title;
                span.dataset.id = e.id;
                this.breadNav.appendChild(span);
            }
        })
    }
    alink (e){
        this.fEmpty.style.display = 'none';        
        this.render(e.id);
        ff.render(e.id);
    }

}
let bb = new Bread();
bb.render(0);//默认出现的是微云，把微云的id传进去
//现在我传了id= 3周杰伦进去，之后就可以得到微云，我的音乐，周杰伦