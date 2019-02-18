const oBox = document.getElementById('box');
const staticBtn = document.getElementsByTagName('button')[0];
const moveBtn = document.getElementsByTagName('button')[1];
const numInput = document.getElementsByTagName('input')[0];
const allBtn = document.getElementsByTagName('button')[2];
class StaticNumBlock { // 静态数柱的类
    constructor(addBox, obj) {
        this.clickEle(addBox, obj);
    };
    //点击事件
    clickEle(addBox, obj) {
            staticBtn.onclick = function() {
                    let num = numInput.value.trim();
                    let defaults = {
                        height: `${num}` * 25 + 'px',
                        background: 'red'
                    }
                    let news = Object.assign({}, obj, defaults);
                    let ele = document.createElement('div');
                    ele.className = 'drw';

                    let html = `${Object.entries(news).map(item =>`${item[0]}:${item[1]}`).join(';')}`
               
                ele.style = html;
                console.log(addBox)
                console.log(ele)
                addBox.appendChild(ele);
        }
    }
}
new StaticNumBlock(oBox, {
    width: '25px',
    border: '1px solid #ccc'
})
//动态数柱继承静态数柱

moveBtn.onclick=function(){
    class MoveNumBlock extends StaticNumBlock{// 动态数柱的类
            constructor(addBox,obj){
                super(addBox,obj),
                this.ele(addBox,obj)
        }
        ele(addBox,obj){
            let num = numInput.value.trim();
                    let defaults = {
                        height: `${num}` * 25 + 'px',
                        background: 'pink'
                    }
                    let news = Object.assign({}, obj, defaults);
                    let ele = document.createElement('div');
                    ele.className = 'drw som';   
                    let html = `${Object.entries(news).map(item =>`${item[0]}:${item[1]}`).join(';')}`
                ele.style = html;
                addBox.appendChild(ele);
        }
    }
    new MoveNumBlock(oBox, {
        width: '25px',
        border: '1px solid #ccc'
    })
}
oBox.onclick=function(e){
    if(e.target.className !='drw' && e.target.className !='box'){
       e.target.className='jump drw'
 
    }
}
// 分别给按钮添加点击事件，实现所要求的的效果