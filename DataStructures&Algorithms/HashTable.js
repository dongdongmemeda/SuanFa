/**
 *  author: 蔡东
 *  createdOn: 2017/11/15
 *  desc: 散列<数据结构>
*/
//  构造函数模式和原型模式创造散列
function HashTable(){
    this.table = Array(137)
}
HashTable.prototype = {
    constructor: HashTable,
    hash: function(str){
        const H = 37
        let total = 0
        for(let i=0;i<str.length;i++){
            total += H * total + str.charCodeAt(i)
        }
        total = total % this.table.length
        if(total < 0){
            total += this.table.length -1
        }
        return parseInt(total)
    },
    put: function(str){
        const dps = this.hash(str)
        this.table[dps] = str
    },
    show: function(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i] !== undefined){
                console.log(`${i}: ${this.table[i]}`)
            }
        }
    }
}

const hash = new HashTable()
const people = ['David','Jennifer','Donnie','Raymond','Cynthia','Mike','Clayton','Danny','Jonathan']
for(let i=0;i<people.length;i++){
    hash.put(people[i])
}
hash.show()