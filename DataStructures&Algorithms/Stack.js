/**
 *  author: 蔡东
 *  createdOn: 2017/11/14
 *  desc: 栈<数据结构>
*/
//  构造函数模式和原型模式创造栈
function Stack(){
    this.data = []    //  栈的数据
    this.size = 0    //  栈的大小
}
Stack.prototype = {
    constructor: Stack,
    push: function(val){
        this.data[this.dps++] = val
        this.size = this.data.length
        return this.data.toString()
    },
    pop: function(){
        if(this.size>0){
            const del = this.data[--this.dps]
            this.size = --this.data.length
        }
        return this.data.toString()
    }
}

const stack = new Stack()