/**
 *  author: caidong
 *  createdOn: 2017/10/17
 *  desc: 用于合并多个对象
 */

//  合并对象的主函数
function concatObj(){
	let obj = {}
	for(let k in arguments[0]){
		//  赋值给obj
		let arg = arguments[0]
		obj[k] = arg[k]
	}
	for(let i=1;i<arguments.length;i++){
		//  剩余的obj依次添加
		copyObj(obj, arguments[i])
	}
	return obj
}

//  用于递归对象内部的对象
function copyObj(obj, arg){
	for(let j in arg){
		if(obj[j]){
			if(arg[j] instanceof Array){
				let arr = [...obj[j]]
				arg[j].forEach(function(val, index){
					if(arr.indexOf(val) == -1){
						arr.push(val)
					}
				})
				obj[j] = arr
			}else if(arg[j] instanceof Object){
				//  进行递归
				arguments.callee(obj[j], arg[j])
			}
		}else{
			obj[j] = arg[j]
		}
	}
}