let tool = (function (){
    let children = [];//用来存储所有的孩子

    //传进一个id，得到它的孩子
    function getChild(pId){
        let onOff = false;
        let arrChild = [];
        for (let key in data){
            if(data[key]['pid'] == pId){
                arrChild.push(data[key]);
                onOff = true;
            }
        }
        if(onOff){
            return arrChild;
        }else{
            return null;
        }
    }

    //传进来一个父亲id,得到它下面的所有的孩子
    function getChildren(pId){
        let arr = getChild(pId);//首先得到一级的孩子
        arr && arr.forEach((ele)=>{ //ele是指每个孩子所对应的对象
            children.push(ele);
            getChildren(ele.id);
        })
    }

    //传进来一个id,得到它的父亲
    function getParent(id){
        if(!data[id] || data[id] == 0) return null;
        return data[data[id].pid];
    }

    
    //传进来一个id，得到它的祖孙级
    function getParents(id){
        let now = data[id]; //此时需要得到onePa的父亲是谁，直到没有父级即可
        let parents = [];
        while(now){
            parents.unshift(now);
            now = getParent(now.id);
        }
        return parents;
    }

    //当两个物体碰撞时
    function meet(obj1,obj2){ //obj1代表的是目标点，就是固定的，obj2是自己拖拉出来的框
        let l1 = obj1.offsetLeft;
        let t1 = obj1.offsetTop;
        let r1 = l1 + obj1.offsetWidth;
        let b1 = t1 + obj1.offsetHeight;

        let l2 = obj2.offsetLeft;
        let t2 = obj2.offsetTop;
        let r2 = l2 + obj2.offsetWidth;
        let b2 = t2 + obj2.offsetHeight;

        if(r1<l2 || b1 < t2 || l1 > r2 || t1 > b2){
            return false;
        }else{
            return true;
        }
    }
    function addAttr(attr,value){
        for(let k in data){
            if(Array.isArray(value)){
                data[k][attr] = [];
            }else{
                data[k][attr] = value;
            }
           
        }
    }

    return {
        getChild,
        getChildren,
        getParent,
        getParents,
        meet,
        addAttr
    }
})();
// console.log(tool.getParents(2))