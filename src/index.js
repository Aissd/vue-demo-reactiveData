import Vue from '../src/vue.js';

let vm = new Vue({
    el: '#app',
    data() {
        return {
            name: 'zys',
            age: 28,
            school: {
                name: 'aSchool',
                number: 1221
            },
            ary: [1,2]
        }
    }
});

console.log(vm);

vm.age = 124;

console.log(vm.name);

vm.ary = vm.ary.map((item, index) => {
    if(index === 0) {
        return {name: 'aaa'}
    } else {
        return {name: 'bbb'}
    }
});

console.log(vm);
