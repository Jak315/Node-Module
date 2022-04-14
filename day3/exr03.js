// Javascript дээр өгөгдсөн массив(array)-г бүх элементийг нь 
// 2-оор нэмэгдүүлэн шинэ массив болгодог функц бичнэ үү.
// console.log(add2ToArray([1,2,3])) => [3,4,5] гэх мэт

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let sum = 2
const sumFunction = (e) => e + sum;
num.forEach(sum);
console.log(sum)