let view = window.innerHeight; //可视区的高度
let head = document.getElementById('head');
let headH = parseFloat(getComputedStyle(head).height);
let section = document.getElementById('section');
section.style.height = (view - headH) + 'px';
window.onresize = function (){
    view = window.innerHeight;
    section.style.height = (view - headH) + 'px';
}

