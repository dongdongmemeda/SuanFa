/**
 *  author: caidong
 *  createdOn: 2017/10/23
 *  desc: 选择排序
 */

function selectSort(arr){
	for(let i=0;i<arr.length;i++){
		let min = i
		for(let j=i;j<arr.length;j++){
			if(arr[j]<arr[min]){
				min = j
				arr[min] = arr[j]
			}
		}
		let temp = arr[i]
		arr[i] = arr[min]
		arr[min] = temp
	}
	return arr
}
