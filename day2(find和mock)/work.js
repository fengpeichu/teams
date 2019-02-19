//find
function find(arr, callback) {
    let res;
    arr.map(function(item) {
        if (callback(item)) {
            res = item;
        };
    });
    console.log(res);
};
find([{
    name: 'zs'
}, {
    name: 'ww'
}, {
    name: 'ls'
}], function(item) {
    return item.name === 'ww'
});
// //findIndex
function findIndex(arr, callback) {
    let res;
    arr.map(function(item, i) {
        if (callback(item)) {
            res = i;
        };
    });
    console.log(res);
};
findIndex([{
    name: 'zs'
}, {
    name: 'ww'
}, {
    name: 'ls'
}], function(item) {
    return item.name === 'ww'
});
//mock
const Mock = {
    mock(opt) {
        let key = Object.keys(opt);
        let res = {};
        key.map(function(title) {
            let nameArr = title.split('|');
            let name = nameArr[0];
            let count = this.getCount(nameArr[1]);
            let val = opt[title];
            if (typeof val === 'string') {
                res[name] = val.repeat(count)
            } else {
                res[name] = count;
            }
        }, this);
        return res;
    },
    getCount(n) {
        let flag = n.includes('-');
        if (flag) {
            let min = n.split('-')[0] * 1;
            let max = n.split('-')[1] * 1;
            return this.getRandom(min, max);
        } else {
            return n * 1;
        }
    },
    getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
console.log(Mock.mock({
    'name|1-10': 1,
    'text|1-10': '1'
}));