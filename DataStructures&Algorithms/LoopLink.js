/**
 *  author: 蔡东
 *  createdOn: 2017/11/14
 *  desc: 循环链表<数据结构>
*/
//  构造函数模式和原型模式创造循环链表
function Node(element){
    this.element = element    //  节点的元素
    this.next = null    //  节点的后续
}
function Link(){
    this.head = new Node('head'),
    this.head.next = this.head
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
    //  插入节点
    insert: function(newElement, item){
        let newNode = new Node(newElement), findNode = this.find(item)
        newNode.next = findNode.next
        findNode.next = newNode
    },
    //  寻找节点前驱
    findPrev: function(item){
        let findNode = this.head
        while(findNode.next !== null && findNode.next.element === item){
            findNode = findNode.next
        }
        return findNode
    },
    //  删除节点
    remove: function(item){
        let prevNode = this.findPrev(item)
        if(prevNode.next !== null){
            prevNode.next = prevNode.next.next
        }
    },
    //  测试代码，从头结点开始显示节点
    display: function(){
        let findNode = this.head
        while(findNode.next !== null && findNode.next.element !== 'head'){
            console.log(findNode.next.element)
            findNode = findNode.next
        }
    }
}

const link = new Link()