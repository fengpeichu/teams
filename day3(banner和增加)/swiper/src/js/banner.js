class Banner {
    constructor(parent, options) {
        this.parent = document.querySelector(parent);
        this.options = options;
        this.render();
    }
    render() {
        let { list } = this.options;
        let imgs = list.map(item => this.loadimage('./img/' + item.img));
        Promise.all(imgs).then(imgs => {
            imgs.forEach(item => {
                let div = document.createElement('div');
                div.className = 'swiper-slide';
                div.appendChild(item);
                this.parent.appendChild(div);
            })
        })
    }
    loadimage(src) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
                resolve(img)
            }
            img.onerror = () => {
                reject(src)
            }
            img.src = src;
        })
    }
}