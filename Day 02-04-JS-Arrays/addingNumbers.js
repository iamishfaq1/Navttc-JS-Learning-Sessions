// let number=12;

// while ( let i > 0 ) {
//     console.log("first one"+number);
//     let separated = number%10;
//     let baqaya= number/10;

//     console.log(separated, baqaya);
//     number = number-1;
//     console.log("second one"+number);
// }

// let num = 127;

// for(let i=num; i>=0; i--){
//     i= num % 10;
//     r=num/10;
//     console.log(num,i,r);
//     // console.log(num);
//     num=num-1;
// }

let number = 1432;

let sum=0;

while( number > 0) {
    let digit = number%10;
    sum=sum+digit;

    console.log(sum);
}