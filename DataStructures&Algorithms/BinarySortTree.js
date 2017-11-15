/**
 *  author: 蔡东
 *  createdOn: 2017/11/15
 *  desc: 二叉查找树<数据结构>
*/
//  构造函数模式和原型模式创造二叉查找树
//  定义节点
function Node(data, left, right){
    this.data = data    //  二叉树的数据
    this.left = left    //  左子树的链接
    this.right = right    //  右子树的链接
}
//  定义二叉查找树
function BST(){
    this.root = null    //  根元素
}
BST.prototype = {
    constructor: BST,
    //  二叉树插入数据
    insert: function(data){
        const node = new Node(data, null, null)
        //  判断该二叉树是不是新树，如果是新数，插入到根节点，否则往下寻找
        if(this.root === null){
            this.root = node
        }else{
            let root = this.root, parent = null
            //  遍历二叉树，找到合适的地方插入
            this.insertLoop(data, root, parent, node)
        }
    },
    //  递归遍历二叉树
    insertLoop: function(data, root, parent, node){
        parent = root
        if(data < root.data){
            root = root.left  //  数据比该根节点的数据小，往左子树寻找
            if(root === null){  //  左子树如果为空，插入节点
                parent.left = node
            }else{
                this.insertLoop(data, root, parent, node)
            }
        }else{
            root = root.right  //  数据比该根节点的数据大，往右子树查找
            if(root === null){  //  右子树如果为空，插入节点
                parent.right = node
            }else{
                this.insertLoop(data, root, parent, node)
            }
        }
    },
    //  先序遍历二叉树
    rootFirst: function(){
        let arr = []
        this.root && this.firstLoop(this.root, arr)
        return arr
    },
    firstLoop: function(node, arr){
        arr.push(node.data)
        node.left && this.firstLoop(node.left, arr)
        node.right && this.firstLoop(node.right, arr)
    },
    //  中序遍历二叉树
    rootMiddle: function(){
        let arr = []
        this.root && this.middleLoop(this.root, arr)
        return arr
    },
    middleLoop: function(node, arr){
        node.left && this.middleLoop(node.left, arr)
        arr.push(node.data)
        node.right && this.middleLoop(node.right, arr)
    },
    //  后序遍历二叉树
    rootLast: function(){
        let arr = []
        this.root && this.lastLoop(this.root, arr)
        return arr
    },
    lastLoop: function(node, arr){
        node.left && this.lastLoop(node.left, arr)
        node.right && this.lastLoop(node.right, arr)
        arr.push(node.data)
    },
    //  获取最小值
    getMin: function(){
        let min = this.root ? this.minLoop(this.root) : null
        return min
    },
    minLoop: function(node){
        if(node.left){
            return this.minLoop(node.left)
        }else{
            return node.data
        }
    },
    //  获取最大值
    getMax: function(){
        let max = this.root ? this.maxLoop(this.root) : null
        return max
    },
    maxLoop: function(node){
        if(node.right){
            return this.maxLoop(node.right)
        }else{
            return node.data
        }
    },
    //  寻找定值节点
    find: function(data){
        let node = this.root ? this.findLoop(this.root, data) : null
        return node
    },
    findLoop: function(node,data){
        if(node.data < data){
            if(node.right){
                return this.findLoop(node.right, data)
            }
        }else if(node.data > data){
            if(node.left){
                return this.findLoop(node.left, data)
            }
        }else{
            return node
        }
    }
}

const bst = new BST()