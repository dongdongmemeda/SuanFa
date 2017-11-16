/**
 *  author: caidong
 *  createdOn: 2017/10/17
 *  desc: 冒泡排序
 */

function bubbleSort(arr){
	//  每轮i值减少一，排序比较的次数少一次，因为最后一位不用比较
	for(let i=arr.length-1; i>=0; i--){
		//  比较次数随着i的大小变化
		for(let j=0; j<i; j++){
			if(arr[j]>arr[j+1]){
				const temp = arr[j]
				arr[j] = arr[j+1]
				arr[j+1] = temp
			}
		}
	}
	return arr
}
