/**
 *  author: caidong
 *  createdOn: 2017/10/17
 *  desc: 水仙花数
 */

function narcissistic(start, end){
	let arr = []
	//  水仙花数是3位数或以上，start为初始值，end为终止值
	if(start<=end&&start>=100){
		for(let i=start;i<=end;i++){
			//  数字查分成数组
			const str = i.toString().split('')
			let result = 0;
			for(let j=0;j<str.length;j++){
				//  字符串转数字
				result += parseInt(str[j])**str.length
			}
			if(result===i){
				arr.push(i)
			}
		}
	}
	return arr	
}