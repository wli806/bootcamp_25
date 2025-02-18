// 查找数组中的最大值和最小值

/**
 * 所有学生的数学成绩保存到数组中，
 * 查找学生成绩的最高分和最低分。
 */

var arr = [92, 83, 69, 78, 95, 88, 75, 64, 90, 81];
var maxScore = arr[0];
var minScore = arr[0];

for(var i = 0; i < arr.length; i++){
    if(arr[i] > maxScore){
        maxScore = arr[i];
    }
    if(arr[i] < minScore){
        minScore = arr[i];
    }
}
console.log('最高分=', maxScore);
console.log('最低分=', minScore);