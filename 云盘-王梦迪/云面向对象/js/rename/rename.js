class Rename{
    constructor(){
        this.rename = document.getElementById('rename');
    }
    clire(){
        this.rename.addEventListener('click',this.re);
    }
    re(){
        this.folders = document.getElementsByClassName('folders')[0];
        this.divs = [...this.folders.getElementsByClassName('file-item')];
        // console.log(this.divs)
        this.ary = [];
        for(let key in data){
            if(data[key].checked == true){
                this.ary.push(data[key]);
            }
        }
        
        if(this.ary.length == 0){
            alert("请选择要重命名的文件");
        }else if(this.ary.length > 1){
            alert("请重新选择");
        }else if(this.ary.length == 1){
            this.divs.forEach((e)=>{
                // console.log(e.dataset.id, this.ary[0].id);
                if(e.dataset.id == this.ary[0].id){
                    let val = this.ary[0].title;
                    e.children[1].style.display = 'none';
                    e.children[2].style.display = 'block';
                    e.children[2].value = val;
                    e.children[2].select();
                    e.children[2].onblur = function (){
                        if(!e.children[2].value.trim()){
                            alert('不能为空');
                            this.value = val;
                            e.children[2].select();
                            return;
                        }
                        e.children[2].style.display = 'none';
                        e.children[1].style.display = 'block';
                        e.children[1].innerHTML = this.value;
                        data[e.dataset.id].title = this.value;
                        ff.render(e.dataset.pid);
                        tt.num = -1;
                        tt.renderTree(-1,-1);
                    }
                }
            })
        }
    }
}
let rr = new Rename();
rr.clire();