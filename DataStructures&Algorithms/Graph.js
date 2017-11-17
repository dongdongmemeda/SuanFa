/**
 *  author: 蔡东
 *  createdOn: 2017/11/17
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
    this.adj = []    //  记录每个节点之间的边
    this.marked = []    //  记录每个节点的被访问记录
    for(let i=0;i<this.vertices;i++){
        //  初始化每个节点之间的边，每个节点的被访问记录
        this.adj[i] = []
        this.marked[i] = false
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
    },
    //  搜索图（深度优先搜索）
    dfs: function(v){
        this.marked[v] = true
        console.log(`Visited vertex: ${v}`)
        for(let w of this.adj[v]){
            if(!this.marked[w]){
                this.dfs(w)
            }
        }
    },
    //  搜索图（广度优先搜索）
    bfs: function(s){
        this.marked[s] = true
        let queue = []
        queue.push(s)
        while(queue.length>0){
            let v = queue.shift()
            console.log(`Visited vertex: ${v}`)
            for(let w of this.adj[v]){
                if(!this.marked[w]){
                    this.marked[w] = true
                    queue.push(w)
                }
            }
        }
    },
    reset: function(){
        for(let i=0;i<this.vertices;i++){
            this.marked[i] = false
        }
    }
}

let vertices = 5
const g = new Graph(vertices)