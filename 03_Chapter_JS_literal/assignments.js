/*let a = 100;

console.log(a++ + ++a +a++ + ++a);
console.log(a);*/

/*let a = 37;

console.log(—a + a—);

console.log(a);*/


/*then it will not work as expected, because the characters — and — are not normal minus signs - and --.

In JavaScript, the operators must be written as:

unary minus: -a
decrement: a--
So this code is invalid as written due to Unicode dash characters, and JS will throw a syntax error.*/

/*let a = 8; 
let b = a-- - --a; 
console.log(b, a);*/



/*let i = 1; 

let r = i++ > 1 ? i++ : ++i; 
console.log(r, i);*/



let a = 8; 
let b = a-- - --a + a++; 
console.log(b, a)







