// 插入排序
/**
 * 如果从小到大，升序排序
 * 
 * 从第二个数开始往前比。
 * 比它大的就往后排。
 * 以此类推，进行到最后一个数。
 */

let arr = [5, 4, 8, 2, 1];

for(let i = 1; i < arr.length; i++){
    let temp = arr[i];
    let j = i;
    for(;j > 0; j--){
        if(arr[j-1] > temp){
            arr[j] = arr[j-1];
        }else{
            break;
        }
    }
    arr[j] = temp;
    console.log(arr);
}

console.log(arr)