import proxyData from './proxy.js';
import observe from './observe.js';

function initState(vm) {
    var options = vm.$options;
    if(options.data) {
        // 判断是否有data属性，如果有再做初始化
        initData(vm);
    }
}

function initData(vm) {
    var data = vm.$options.data;
    // 判断data是函数还是对象，如果是函数，需要执行这个函数以及把this指向当前实例，以便可以直接用this调用
    vm._data = data = typeof data === 'function' ? data.call(vm) : data || {};

    for(var key in data) {
        // 对data的每个属性都做数据代理，便于this.xxx调用
        proxyData(vm, '_data', key);
    }
    // 做数据观察
    observe(vm._data);
}

export {
    initState
}