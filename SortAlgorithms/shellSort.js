/**
 *  author: caidong
 *  createdOn: 2017/11/16
 *  desc: 希尔排序（插入排序升级版）
 */

 const gps = [5, 3, 1]    //  希尔排序的间隔系列
 function shellSort(arr){
     //  遍历间隔序列
     for(let g=0;g<gps.length;g++){
         for(let i=gps[g];i<arr.length;i++){
             let tmp = arr[i], j = i
             while(arr[j-gps[g]]>tmp && j>=gps[g]){
                 arr[j] = arr[j-gps[g]]
                 j -= gps[g]
             }
             arr[j] = tmp
         }
     }
     return arr
 }
