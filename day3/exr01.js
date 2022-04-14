// Өгөгдсөн 3 параметрийн хамгийн ихийг нь буцаадаг функц Javascript дээр бичнэ үү. 
// 3 өөр төрлөөр жишээ болгон хэвлэнэ үү.
// Жишээ нь: 
// console.log(max(4,5,3)) => 5
// console.log(max(4,5,4)) => 5
// console.log(max(4,4,4)) => 4
// console.log(max(-1,-2,-3)) => -1 гэх мэт

function bigNumber(a, b, c) {

    if (a > b && a < c) {
        return c;
    } else if (a < b && b > c) {
        return b;
    } else if (a > b && a > c) {
        return a;
    }
}
console.log(bigNumber(8, 5, 3));