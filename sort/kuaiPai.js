/**
 *  author: caidong
 *  createdOn: 2017/10/23
 *  desc: 快速排序
 */

function quickSort(arr){
	if(arr.length>0){ 
		const centerNum = arr.splice((arr.length/2 | 0), 1)
		let left = [], right = []
		for(let i=0;i<arr.length;i++){
			if(arr[i]<centerNum){
				left.push(arr[i])
			}else{
				right.push(arr[i])
			}
		}
		return arguments.callee(left).concat(centerNum, arguments.callee(right))
	}else{
		return []
	}
}
