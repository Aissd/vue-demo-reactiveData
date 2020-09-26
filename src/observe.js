import Observer from './observer';

function observe(data) {
    // 这里包一层，是为了判断是不是对象且不是null的data
    if(typeof data !== 'object' || data === null) return;
    return new Observer(data);
}

export default observe;