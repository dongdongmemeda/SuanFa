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
    this.edgeTo = []    //  记录最短路径
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
                    this.edgeTo[w] = v
                    this.marked[w] = true
                    queue.push(w)
                }
            }
        }
    },
    //  连接节点路径，广度优先搜索的最短路径，先使用广度优先搜索从起点遍历，然后再查找起点到某个值的最短路径
    path: function(v){
        let source = 0, pathTo = [], sum =''
        if(!this.marked[v]){
            return undefined
        }
        for(let i=v;i!==source;i=this.edgeTo[i]){
            pathTo.push(i)
        }
        pathTo.push(source)
        while(pathTo.length>0){
            if(pathTo.length === 1){
                sum += pathTo.pop()
            }else{
                sum += `${pathTo.pop()}->`
            }
        }
        console.log(sum)
    },
    reset: function(){
        for(let i=0;i<this.vertices;i++){
            this.marked[i] = false
            this.edgeTo = []
        }
    }
}

let vertices = 5
const g = new Graph(vertices)