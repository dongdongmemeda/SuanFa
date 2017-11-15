/**
 *  author: 蔡东
 *  createdOn: 2017/11/14
 *  desc: 双向链表<数据结构>
*/
//  构造函数模式和原型模式创造双向链表
function Node(element){
    this.element = element    //  节点元素
    this.prev = null    //  节点前驱
    this.next = null    //  节点后继 
}
function Link(){
    this.head = new Node('head')
}
Link.prototype = {
    constructor: Link,
    //  寻找节点
    find: function(item){
        let findNode = this.head
        while(findNode.element !== item){
            findNode = findNode.next
        }
        return findNode
    },
    //  插入节点  双向
    insert: function(newElement, item){
        let newNode = new Node(newElement), findNode = this.find(item)
        newNode.next = findNode.next
        findNode.next = newNode
        newNode.prev = findNode
    },
    //  删除节点
    remove: function(item){
        let findNode = this.find(item)
        if(findNode.next !== null){
            findNode.prev.next = findNode.next
            findNode.next.prev = findNode.prev
            //  断开与其他节点的联系
            findNode.prev = null
            findNode.next = null
        }
    },
    //  寻找末尾节点
    findLast: function(){
        let findNode = this.head
        while(findNode.next !== null){
            findNode = findNode.next
        }
        return findNode
    },
    //  从链表末尾开始遍历
    disReverse: function(){
        let findNode = this.head
        findNode = this.findLast()
        while(findNode.prev !== null){
            console.log(findNode.element)
            findNode = findNode.prev
        }
    },
    //  测试代码，从头结点开始显示节点
    display: function(){
        let findNode = this.head
        while(findNode.next !== null){
            console.log(findNode.element)
            findNode = findNode.next
        }
    }
}

const link = new Link()