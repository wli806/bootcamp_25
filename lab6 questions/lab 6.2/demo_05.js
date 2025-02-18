// 筛选数组
/**
 * 所有学生的数学成绩保存到数组中，
 * 需要筛选所有>=80分的学生成绩，
 * 并将筛选出来的成绩保存到一个新的数组中。
 */
var arr = [92, 83, 69, 78, 95, 88, 75, 64, 90, 81];
var result = [];

for(let i = 0; i < arr.length; i++){
    if(arr[i] >= 80){
        result[result.length] = arr[i];
    }
}
console.log(result);


