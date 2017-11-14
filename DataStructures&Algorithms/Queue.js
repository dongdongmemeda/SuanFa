/**
 *  author: 蔡东
 *  createdOn: 2017/11/14
 *  desc: 队列<数据结构>
*/
//  构造函数模式和原型模式创造队列
function Queue(){
    this.data = []    //  队列的数据
    this.size = 0    //  队列的大小
}
Queue.prototype = {
    constructor: Queue,
    shift: function(){
        if(this.data.length>0){
            for(let i=0;i<this.data.length-1;i++){
                let tmp = this.data[i+1]
                this.data[i] = tmp
            }
            this.size = --this.data.length
        }
        return this.data.toString()
    },
    unshift: function(val){
        this.data[this.size++] = undefined
        for(let i=this.data.length-2;i>=0;i--){
            let tmp = this.data[i]
            this.data[i+1] = tmp
        }
        this.data[0] = val
        return this.data.toString()
    }
}
const queue = new Queue()