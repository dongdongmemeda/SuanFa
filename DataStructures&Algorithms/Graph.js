/**
 *  author: 蔡东
 *  createdOn: 2017/11/16
 *  desc: 图<数据结构>
*/
//  构造函数模式和原型模式创造图
function Vertex(node, visited){
    this.node = node
    this.visited = visited
}
function Graph(v){
    this.vertices = v    //  节点个数
    this.edges = 0    //  边的个数
    this.adj = []
    //  初始化每个节点之间的边
    for(let i=0;i<this.vertices;i++){
        this.adj[i] = []
    }
}
Graph.prototype = {
    constructor: Graph,
    add: function(v, w){
        this.adj[v].push(w)
        this.adj[w].push(v)
        this.edges++
    },
    show: function(){
        for(let i=0;i<this.vertices;i++){
            let sum = ''
            for(let j=0;j<this.vertices;j++){
                if(this.adj[i][j] !== undefined){
                    sum += `${this.adj[i][j]} `
                }
            }
            console.log(`${i} -> ${sum}`)
        }
    }
}

let vertices = 5
const g = new Graph(vertices)