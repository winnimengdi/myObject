let treeMenu = document.getElementsByClassName('tree-menu')[0];
class Tree {
    constructor(){
        this.treeMenu = document.getElementsByClassName('tree-menu')[0];
        this.num = -1;
    }
    //刚开始这里真的挺懵的，后来真正的懂了，以后一定要记住，传参，结构
    renderTree(id,num){
        this.treeMenu.innerHTML = '';
        this.num++;
        let ul = document.createElement('ul');
        ul.style.paddingLeft = this.num * 5 + 'px';

        let arrChild = getChild(id);       //得到传进去的id的孩子，第一次传pid,为-1，所有的孩子数组
        arrChild && arrChild.forEach((e)=>{ //e代表data中的一个对象，{id:'',pid:''....}
            
            let eChild = getChild(e.id);

            let li = document.createElement('li');
            li.addEventListener('click', (ev)=>{
                // console.log(e.id);
                ev.cancelBubble = true;
                let arrChild = getChild(e.id);
                if(!arrChild){
                    ff.fEmpty.style.display = 'block';
                }else{
                    ff.fEmpty.style.display = 'none';
                    // console.log('不是空')
                }
                ff.render(e.id);
                bb.render(e.id);
            });
            
            let div = document.createElement('div');
            div.className = `tree-title ${eChild ? 'tree-ico' : ''} close`; //有按钮
            li.appendChild(div);

            let span = document.createElement('span');
            span.className = `${eChild ? 'open' : ''}`; 
            span.innerHTML = `<i></i>${e.title}`;
            span.addEventListener('click',()=>{
                let ul = span.parentNode.nextElementSibling;
                if(ul){
                    if(eChild && !span.classList.toggle('open')){
                        ul.style.display = 'none';
                    }else{
                        ul.style.display = 'block';
    
                    }

                }
                

            });
            div.appendChild(span);

            if(eChild){
                li.appendChild(this.renderTree(e.id,num));
            }
            ul.appendChild(li);
        });
        // console.log(ul)
        return this.treeMenu.appendChild(ul);
    }
    
}
let tt = new Tree();
tt.renderTree(-1,-1);