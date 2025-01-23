function calc(a, b) {
    if (a === 0 || b === 0) {
        return "Операция невозможна";
    } else if (a % 2 === 0 && b % 2 === 0) {
        return a + b;
    } else {
        return a - b;
    }
}

console.log(calc(4, 6));  
console.log(calc(3, 5));  
console.log(calc(0, 5));   
