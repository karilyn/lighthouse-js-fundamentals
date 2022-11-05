/*We will be writing a program that prints the numbers from 100 to 200 to the console, with three exceptions:

If the number is a multiple of 3, print the string "Loopy" instead of the number.
If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.
*/

var x = 1;

while (x < 21) { //stop condition
    if (x % 3 === 0) {
        console.log("Julia")   
    }
    else if (x % 5 === 0) {
        console.log("James")
    }
    else if (x % 3 === 0 && x % 5 === 0) {
        console.log("JuliaJames")
    }
    else {
        console.log(x);
    }
    x = x + 1;
}

