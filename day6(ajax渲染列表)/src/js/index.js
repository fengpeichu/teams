class Ajax {
    constructor(url) {
        this.url = url;
        const xhr = new XMLHttpRequest();
        return new Promise((resolve, reject) => {
            xhr.onload = () => {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject(new Error(xhr.statusText))
                }
            }
            xhr.open('get', this.url, true);
            xhr.send(null);
        })
    }
}
export { Ajax }