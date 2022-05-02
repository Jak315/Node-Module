function Circle(x, y, r) {
    function r_squqred() {
        return Math.pow(r, 2);
    }
    function area() {
        return Math.PI * r_squqred;
    }
    return {
        area: area,
        squqred: r_squqred
    }
}

console.log(Circle(1, 2, 3));
module.exports + Circle

