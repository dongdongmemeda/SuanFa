/**
 *  author: 蔡东
 *  createdOn: 2017/11/15
 *  desc: 二叉排序树<数据结构>
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
        return 'insert success'
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
        let min = this.root ? this.minLoop(this.root).data : null
        return min
    },
    //  获取最小值节点
    minLoop: function(node){
        if(node.left){
            return this.minLoop(node.left)
        }else{
            return node
        }
    },
    //  获取最大值
    getMax: function(){
        let max = this.root ? this.maxLoop(this.root).data : null
        return max
    },
    //  获取最大值节点
    maxLoop: function(node){
        if(node.right){
            return this.maxLoop(node.right)
        }else{
            return node
        }
    },
    //  寻找定值节点
    find: function(data){
        let node = this.root ? this.findLoop(this.root, data) : 'no found'
        node = node === undefined? 'no found' : node
        return node
    },
    findLoop: function(node, data){
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
    },
    //  删除节点
    remove: function(data){
        const node = this.find(data)
        if(node !== 'no found'){
            this.root = this.root ? this.removeLoop(this.root, data) : null
            return 'remove success'
        }else{
            return '404 error because no found'
        }
    },
    removeLoop: function(node, data){
        if(node.data < data){
            //  赋值新的左子树，返回新节点
            node.right = this.removeLoop(node.right, data)
            return node
        }else if(node.data > data){
            //  赋值新的右子树，返回节点
            node.left = this.removeLoop(node.left, data)
            return node
        }else{
            //  没有左子树和右子树
            if(node.left === null && node.right === null){
                return null
            }
            //  只有右子树
            if(node.left === null && node.right !== null){
                return node.right
            }
            //  只有左子树
            if(node.left !== null && node.right === null){
                return node.left
            }
            //  左子树和右子树都有
            if(node.left !== null && node.right !== null){
                //  获取右子树最小值节点，节点数据代替被删掉的节点,节点的子树接在被删掉的右子树上
                let minNode = this.minLoop(node.right)
                node.data = minNode.data
                node.right = this.removeLoop(node.right, minNode.data)
                //  同理，获取左子树最大值节点，节点数据代替被删掉的节点,节点的子树接在被删掉的左子树上
                // let maxNode = this.maxLoop(node.left)
                // node.data = maxNode.data
                // node.left = this.removeLoop(node.left, maxNode.data)
                return node
            }
        }
    },
    //  统计节点个数
    count: function(){
        let num = this.root ? this.rootLoop(this.root, 1) : 0
        return num
    },
    rootLoop: function(node, num){
        node.left && (num=this.rootLoop(node.left, ++num))
        node.right && (num=this.rootLoop(node.right, ++num))
        return num
    },
    //  统计二叉树终节点
    dest: function(){
        let num = this.root ? this.destLoop(this.root, 0) : 0
        return num
    },
    destLoop: function(node, num){
        node.left && (num+=this.destLoop(node.left, 0))
        node.right && (num+=this.destLoop(node.right, 0))
        if(node.left === null && node.right === null){
            ++num
        }
        return num
    },
    //  计算二叉树深度
    deep: function(){
        let len = this.root ? this.deepLoop(this.root, 1) : 0
        return len
    },
    deepLoop: function(node, n){
        let l = n, r = n
        if(node.left){
            l = this.deepLoop(node.left, ++l)
        }
        if(node.right){
            r = this.deepLoop(node.right, ++r)
        }
        return Math.max(l, r)
    }
}

const bst = new BST()