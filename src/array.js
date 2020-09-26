import { ARR_METHODS } from './config.js';
import observeArr from './observeArr';

var originArrMethods = Array.prototype,
    arrMethods = Object.create(originArrMethods);

ARR_METHODS.map(function(m) {
    arrMethods[m] = function() {
        var args = Array.prototype.slice.call(arguments), // 将数组接收的arguments对象转为数组
            rt = originArrMethods[m].apply(this, args); // 改变新函数的this指向，并且传入args后马上调用新函数
        var newArr;
        switch(m) {
            case 'push':
            case 'unshift':
                newArr = args;
                break;
            case 'splice':
                newArr = args.slice(2);
                break;
            default:
                break;
        }
        
        // 若有新增的数组，则再次观测数组
        newArr && observeArr(newArr);

        return rt;
    }
});