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
    this.root = null    //  根节点
    this.sort = []
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
            this.loop(data, root, parent, node)
        }
    },
    //  递归遍历二叉树
    loop: function(data, root, parent, node){
        parent = root
        if(data < root.data){
            root = root.left  //  数据比该根节点的数据小，往左子树寻找
            if(root === null){  //  左子树如果为空，插入节点
                parent.left = node
                return
            }
        }else{
            root = root.right  //  数据比该根节点的数据大，往右子树查找
            if(root === null){  //  右子树如果为空，插入节点
                parent.right = node
                return
            }
        }
        this.loop(data, root, parent, node)
    },
    //  先序遍历二叉树
    rootFirst: function(node){
        if(node !== null){
            this.sort.push(node.data)
            node.left && this.rootFirst(node.left)
            node.right && this.rootFirst(node.right)
        }
        return this.sort.toString()
    },
    //  中序遍历二叉树
    rootMiddle: function(node){
        if(node !== null){
            node.left && this.rootMiddle(node.left)
            this.sort.push(node.data)
            node.right && this.rootMiddle(node.right)
        }
        return this.sort.toString()
    },
    //  后序遍历二叉树
    rootLast: function(node){
        if(node !== null){
            node.left && this.rootLast(node.left)
            node.right && this.rootLast(node.right)
            this.sort.push(node.data)
        }
        return this.sort.toString()
    }
}

const bst = new BST()