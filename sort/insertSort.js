/**
 *  author: caidong
 *  createdOn: 2017/10/23
 *  desc: 插入排序
 */

function chaSort(arr){
	for(let i=1;i<arr.length;i++){
		let temp = arr[i], j = i
		while(arr[j-1]>temp){
			arr[j] = arr[j-1]
			--j
		}
		arr[j] = temp
	}
	return arr
}