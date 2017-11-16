/**
 *  author: caidong
 *  createdOn: 2017/10/23
 *  desc: 直接插入排序
 */

function insertSort(arr){
	for(let i=1;i<arr.length;i++){
		let tmp = arr[i], j = i
		while(arr[j-1]>=tmp && j>=1){
			arr[j] = arr[j-1]
			--j
		}
		arr[j] = tmp
	}
	return arr
}
