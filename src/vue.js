import { initState } from './init.js';

function Vue(options) {
    this._init(options);
}

Vue.prototype._init = function(options) {
    var vm = this;
    vm.$options = options;
    // 在这里除了做data初始化以外，还会对mixin，watch，computed等做初始化；
    initState(vm);
}

export default Vue;