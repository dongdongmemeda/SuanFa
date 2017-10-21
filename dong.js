/**
 *  author: caidong
 *  createdOn: 2017/10/21
 *  desc: 有趣的js
 */

//  一、一行代码篇
//  1.函数实现统计字符串的字符数量，返回对象，参数为string
(str=>str.split('').reduce((o, k)=>(o[k]++ || (o[k]=1), o ), {}))(/* 参数 */);

//  2.函数实现星级评标,0星到5星，小数四舍五入，参数为number
(num=>5>=num && num>=0 && '★★★★★☆☆☆☆☆'.slice(5-Math.round(num), 10-Math.round(num)))(/* 参数 */);

//  3.函数实现JS对象的深拷贝，参数为object
(obj=>JSON.parse(JSON.stringify(obj)))(/* 参数 */);

//  4.函数实现数组去重，参数为array
(arr=>[...new Set(arr)])(/* 参数 */);

//  5.函数实现长度为len且值都是val的数组，参数为(number， any)
((len, val)=> len>=0 && Array(len | 0).fill(val))(/* 参数 */)