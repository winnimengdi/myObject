let folders = document.getElementsByClassName('folders')[0];
let {left,top:ttop} = folders.getBoundingClientRect();
let hhh = head.clientHeight;
class Select{
    constructor(){
        this.folders = document.getElementsByClassName('folders')[0];
    }
    kuang(){
        this.folders.addEventListener('mousedown',this.down.bind(this))
    }
    down(ev){
        // this.pointX = ev.pageX - left;
        // this.pointY = ev.pageY - ttop;
        
        this.pointX = ev.pageX;
        this.pointY = ev.pageY;

        this.div = document.createElement('div');

        document.addEventListener('mousemove',this.m = this.move.bind(this));
        document.addEventListener('mouseup',this.u = this.up.bind(this));
    }
    move(ev){
        this.div.style.position = 'absolute';
        // this.div.style.width =  Math.abs(ev.pageX - left - this.pointX) + 'px';
        // this.div.style.height = Math.abs(ev.pageY - ttop-  this.pointY) + 'px';
        this.div.style.width =  Math.abs(ev.pageX - this.pointX) + 'px';
        this.div.style.height = Math.abs(ev.pageY -  this.pointY) + 'px';

        console.log(ev.pageX,)
        // this.div.style.left = Math.min(ev.pageX - left,this.pointX) + 'px';
        // this.div.style.top = Math.min(ev.pageY - ttop,this.pointY) + 'px';
        this.div.style.left = Math.min(ev.pageX,this.pointX) + 'px';
        this.div.style.top = Math.min(ev.pageY,this.pointY) - hhh + 'px';
        this.div.style.backgroundColor = 'LightGray';
        this.div.style.opacity = '.5';
        this.folders.appendChild(this.div);
        
    }
    up(ev){
        this.div.remove();
        document.removeEventListener('mousemove',this.m);
        document.removeEventListener('mouseup',this.u);

    }
}
let ss = new Select();
ss.kuang();