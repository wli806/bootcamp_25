// 冒泡排序

var arr = [98, 31, 5, 27, 2, 78];

for(var i = 0; i < arr.length; i++){
    for(var j = i+1; j < arr.length; j++){
        if(arr[i] > arr[j]){
            let t = arr[i];
            arr[i] = arr[j];
            arr[j] = t;
        }
    }
}
/**
 * 第一次： i=0; j=1 -> arr[0] > arr[1] -> [31, 98, 5, 27, 2, 78]
 *         i=0; j=2 -> arr[0] > arr[2] -> [5, 98, 31, 27, 2, 78]
 *         i=0; j=3 -> arr[0] > arr[3] ->  维持原样
 *         i=0; j=4 -> arr[0] > arr[4] -> [2, 98, 31, 27, 5, 78]
 * ... 
 */
console.log(arr);

