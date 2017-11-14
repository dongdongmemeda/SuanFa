/**
 *  author: 蔡东
 *  createdOn: 2017/11/14
 *  desc: 列表<数据结构>
*/
//  构造函数模式和原型模式生创造列表
function List(){
    this.data = []    //  列表的值
    this.dps = 0    //  指针位置
    this.size = 0    //  列表长度
}
List.prototype = {
    constructor: List,
    append: function(...vals){
        for(let val of vals){
            if(val instanceof Array){
                this.data = this.data.concat(val)
            }else{
                this.data = [...this.data, val]
            }
        }
        this.size = this.data.length
        return this.data.toString()
    },
    remove: function(...vals){
        for(let val of vals){
            const index = this.data.indexOf(val)
            if(index > -1){
                this.data.splice(index, 1)
            }
        }
        this.size = this.data.length
        return this.data.toString()
    },
    insert: function(after, ...vals){
        const index = this.data.indexOf(after)
        if(index > -1){
            this.data.splice(index+1, 0, ...vals)
        }else{
            this.data = [...this.data, ...vals]
        }
        this.size = this.data.length
        return this.data.toString()
    },
    empty: function(){
        this.data = []
        this.size = 0
        this.dps = 0
        return this.data.toString()
    },
    has: function(val){
        const index = this.data.indexOf(val)
        return index>-1 ? true: false
    },
    length: function(){
        return this.size
    },
    toString: function(){
        return this.data.toString()
    },
    top: function(){
        this.dps = 0
        return this.data[this.dps]
    },
    bottom: function(){
        this.dps = this.size - 1
        return this.data[this.dps]
    },
    prev: function(){
        if(this.dps > 0){
            this.dps--
            return this.data[this.dps]
        }
    },
    next: function(){
        if(this.dps < this.size-1){
            this.dps++
            return this.data[this.dps]
        }
    },
    to: function(index){
        if(0<=index && index<this.size){
            this.dps = index | 0
            return this.data[this.dps]
        }
    }
}

const list = new List()