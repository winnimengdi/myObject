
class Newfile{
    constructor(){
        this.create = document.getElementById('create');
        this.folders = document.getElementsByClassName('folders')[0];

        this.span = bb.b[0].getElementsByTagName('span');  
        // this.id = this.span[0].dataset.id*1;
    }
    init(){
        this.create.addEventListener('click',this.newfile.bind(this));
    }
    newfile(ev){
        ev.returnValue = false;
        ff.fEmpty.style.display = 'none';

        this.div = document.createElement('div');
        this.div.className = 'file-item';
        this.v = '';

        this.img = new Image();
        this.img.src = 'img/folder-b.png';

        // this.span = document.createElement('span');
        // this.span.className = 'folder-name';
        console.log(this.span)
        this.id = this.span[0].dataset.id*1;

        this.input = document.createElement('input');
        this.input.type = 'text';
        this.input.className = 'editor';
        this.input.style.display = 'block';
        if(!data[this.id].num.length){
            data[this.id].num.push(0);
        }else{
            for (let i = 0; i < data[this.id].num.length+1; i++){
                if(data[this.id].num[i] === undefined){
                    data[this.id].num[i] = i;
                    this.v = i;
                    break;
                }
            }
        }//优秀，起初let v=0，但是每执行一次都会为0，错误
        if(this.v == 0) this.v = '';
        this.input.value = '新建文件夹' + this.v;
        this.input.onfocus = function(ev){
            ev.returnValue = true;
        }
        this.input.addEventListener('blur',this.blurr.bind(this));
        this.input.onmousedown = function(ev){
            ev.stopPropagation();
        }
        this.i = document.createElement('i');
        this.i.addEventListener('click',this.gou.bind(this));

        this.div.appendChild(this.img);
        // this.div.appendChild(this.span);
        this.div.appendChild(this.input);
        this.div.appendChild(this.i);
        this.folders.appendChild(this.div);
        this.input.focus();
        this.input.select();
    }
    blurr(){
        this.array = getChild(this.id);
        console.log(this.id)
        this.cf = this.array && this.array.some(e=>e.title == this.value);
        if(this.cf){
            this.value = '新建文件夹' + this.v;
            this.input.select();
            return;
        }
        if(this.value != '新建文件夹' + this.v){
            delete data[this.id].num[this.v];
            this.v = 'rn';
        }
        this.date = Date.now();
        data[this.date] = {
            'id' : this.date,
            'pid' : this.id,
            'title' : this.input.value,
            'type' : 'file',
            'checked' : false,
            'num' : []
        }
        if(this.v != 'rn'){
            data[this.date].create = this.v;
        }
        console.log(data)
        ff.render(this.id);
        tt.num = -1;
        tt.renderTree(-1,-1);
    }
    gou(){
        this.i.classList.contains('checked') ? this.i.className = '':this.i.className = 'checked';
    }
}
let nn = new Newfile();
nn.init();