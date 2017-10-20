//  定义二叉树
const nodes = {
    node: 0,  //  根节点
    left: {
        //  左子树
    },
    right: {
        //  右子树
    },
}
//  二叉树先序遍历
let arr = []
const xxDfs = function (nodes){
    arr.push(nodes.node)
    nodes.left && dfs(nodes.left)
    nodes.right && dfs(nodes.right)
}
xxDfs(nodes)
console.log(arr)
//  二叉树中序遍历
arr = []
const zxDfs = function (nodes){
    nodes.left && dfs(nodes.left)
    arr.push(nodes.node)
    nodes.right && dfs(nodes.right)
}
zxDfs(nodes)
console.log(arr)
//  二叉树后序遍历
arr = []
const hxDfs = function (nodes){
    nodes.left && dfs(nodes.left)
    nodes.right && dfs(nodes.right)
    arr.push(nodes.node)
}
hxDfs(nodes)
console.log(arr)
//  二叉树广度优先遍历
arr = [], queue = [nodes]
const bfs = function (count){
    count = count || 0
    if(queue[count]){
        arr.push(queue[count].node)
        queue[count].left && queue.push(queue[count].left)
        queue[count].right && queue.push(queue[count].right)
        bfs(++count)
    }
}
bfs()
console.log(arr)