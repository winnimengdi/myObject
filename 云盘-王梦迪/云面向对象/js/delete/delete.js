class Delete{
    constructor(){
        this.del = document.getElementById('del');
    }
    init(){
        this.del.addEventListener('click',this.delete.bind(this));
    }
    delete(){
        this.ary = [];
        for(let key in data){
           if(data[key].checked == true){
               this.ary.push(data[key]);
                var pid = data[key].pid;
                delete data[key];
            }
        }
        if(this.ary.length == 0){
            alert('请选择要删除的文件');
            return ;
        }
        ff.render(pid)
        tt.num = -1;
        tt.renderTree(-1,-1);
    }
}
let dd = new Delete();
dd.init();