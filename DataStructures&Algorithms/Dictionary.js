/**
 *  author: 蔡东
 *  createdOn: 2017/11/15
 *  desc: 字典<数据结构>
*/
//  构造函数模式和原型模式创造字典
function Dictionary(){
    this.data = []    //  字典数据
    this.size = 0    //  字典元素个数
}
Dictionary.prototype = {
    constructor: Dictionary,
    add: function(key, val){
        this.data[key] = val
        ++this.size
    },
    remove: function(key){
        delete this.data[key]
        --this.size
    },
    empty: function(){
        for(let key in this.data){
            delete this.data[key]
        }
    },
    find: function(key){
        return this.data[key]
    },
    keys: function(){
        let arr = []
        for(let key in this.data){
            arr.push(key)
        }
        return arr.toString()
    },
    values: function(){
        let arr = []
        for(let key in this.data){
            arr.push(this.data[key])
        }
        return arr.toString()
    },
    entries: function(){
        let arr = []
        for(let key in this.data){
            arr.push(`${key} -> ${this.data[key]}`)
        }
        return arr.toString()
    },
    length: function(){
        return this.size
    }
}

const dictionary = new Dictionary()