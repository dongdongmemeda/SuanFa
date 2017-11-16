/**
 *  author: caidong
 *  createdOn: 2017/10/23
 *  desc: 插入排序
 */

function insertSort(arr){
	for(let i=1;i<arr.length;i++){
		let temp = arr[i], j = i
		while(arr[j-1]>=temp && j>0){
			arr[j] = arr[j-1]
			--j
		}
		arr[j] = temp
	}
	return arr
}
