/**
 *  author: 蔡东
 *  createdOn: 2017/11/15
 *  desc: 集合<数据结构>
*/
//  构造函数模式和原型模式创造集合
function Group(){
    this.data = []    //  集合的数据
    this.size = 0    //  集合的长度
}
Group.prototype = {
    constructor: Group,
    add: function(val){
        const dps = this.data.indexOf(val)
        if(dps === -1){
            this.data.push(val)
            ++this.size
        }
        return this.data.toString()
    },
    remove: function(val){
        const dps = this.data.indexOf(val)
        if(dps > -1){
            this.data.splice(dps, 1)
            --this.size
        }
        return this.data.toString()
    }
}

const group = new Group()