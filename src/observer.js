import defineReactiveData from './reactiveData.js';
import { arrMethods } from './array.js';
import observeArr from './observeArr';

function Observer(data) {
    if(Array.isArray(data)) {
        // 若是数组，则对数组的方法进行重写，且判断push，unshift，splice新增部分的数据再进行数据劫持
        data.__proto__ = arrMethods;
        observeArr(data);
    } else {
        // 若是对象，则对每个属性做用Object.definedProperty做数据劫持
        this.walk(data);
    }
}

Observer.prototype.walk = function(data) {
    var keys = Object.keys(data);
    for(var i = 0; i < keys.length; i++) {
        var key = keys[i],
            value = data[key];
        defineReactiveData(data, key, value);
    }
}

export default Observer;