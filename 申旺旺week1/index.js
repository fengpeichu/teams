const oBox = document.getElementById('box');
const staticBtn = document.getElementsByTagName('button')[0];
const moveBtn = document.getElementsByTagName('button')[1];
const numInput = document.getElementsByTagName('input')[0];
const allBtn = document.getElementsByTagName('button')[2];
class StaticNumBlock { // 静态数柱的类
    constructor(text) {
        this.text = text;
        this.span = document.createElement('span');
        this.span.style.display = 'inline-block';
        this.span.innerHTML = this.text;
        this.span.style.width = '15px';
        this.span.style.height = this.text * 15 + 'px';
        this.span.style.marginLeft = '20px';
        this.span.style.textAlign = 'center';
        this.span.style.background = 'red';
        this.init();
    }
    init() {
        oBox.appendChild(this.span);
    }
}

class MoveNumBlock extends StaticNumBlock { // 动态数柱的类
    constructor(text) {
        super(text);
        console.log(this.span)
        this.span.style.background = 'pink';
        this.span.classList.add('run');
        this.init();
    }
}

// 分别给按钮添加点击事件，实现所要求的的效果
staticBtn.onclick = () => {
    let value = numInput.value;
    if (value != '' && value <= 9 && value >= 1) {
        new StaticNumBlock(value)
    }
}
moveBtn.onclick = () => {
    let value = numInput.value;
    if (value != '' && value <= 9 && value >= 1) {
        new MoveNumBlock(value)
    }
}
oBox.onclick = e => {
    if (e.target.className == 'run') {
        e.target.classList.add('jump');
    }
    setTimeout(() => {
        let run = [...oBox.querySelectorAll('.run')];
        run.map((item) => {
            item.className = 'run';
        })
    }, 200)
}



allBtn.onclick = () => {
    let run = [...oBox.querySelectorAll('.run')];
    let time = null;
    run.map((item, index) => {
        item.style.animation = `jump ${0.2*(index+1)}s ease-in-out 0s 1 alternate both`;
        time = 200 * (index + 1)


    })
    setTimeout(() => {
        let run = [...oBox.querySelectorAll('.run')];
        run.map((item) => {
            item.style.animation = '';
        })
    }, time)


}