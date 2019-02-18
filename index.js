const oBox = document.getElementById('box');
const staticBtn = document.getElementsByTagName('button')[0]; //静态
const moveBtn = document.getElementsByTagName('button')[1]; //动态
const numInput = document.getElementsByTagName('input')[0]; //数字框
const allBtn = document.getElementsByTagName('button')[2]; //全部
class StaticNumBlock { // 静态数柱的类
    constructor(num, color, classname) {
        this.num = num;
        this.color = color;
        this.className = classname;
        this.render();
    }
    render() {
        // console.log();
        let p = document.createElement('p');
        p.className = this.className;
        p.style.display = 'inline-block';
        p.style.marginRight = 10 + 'px';
        p.style.height = this.num * 30 + 'px';
        p.style.width = 30 + 'px';
        p.style.background = this.color;
        p.style.color = 'white';
        p.style.textAlign = 'center';
        p.style.lineHeight = this.num * 30 + 'px';
        p.innerHTML = this.num;
        oBox.appendChild(p);
    }
}

class MoveNumBlock extends StaticNumBlock { // 动态数柱的类
    constructor(num, color, classname) {
        super(num, color, classname);
        this.movep = [...document.querySelectorAll('.move')];
        this.move();
        allBtn.onclick = () => {
            async function allmove() {
                return await this.move();
            }
        }
    }
    move() {
        this.movep.map(item => {
            item.onclick = () => {
                item.className = this.classname + ' jump';
            }
        })
    }
}

// 分别给按钮添加点击事件，实现所要求的的效果
staticBtn.onclick = () => {
    let val = numInput.value.trim();
    new StaticNumBlock(val, 'red', 'static');
};
moveBtn.onclick = () => {
    let valnum = numInput.value.trim();
    new MoveNumBlock(valnum, 'pink', 'move');
};