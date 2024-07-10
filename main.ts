// home work
// switch statemant  (155)
// arrows function(193)


        //  BASIC FUNCTION

function greet() {
    return "Hello World!";
}
let message: string = greet();  // hello world
console.log(message);




function sum() {
    return 2 + 2;
}

console.log(sum());
       // OR
let result = sum();
console.log(result);




function plus(num1:number ,num2:number) {
    return num1 * num2;
}

console.log(plus(5 , 5));
       // OR
let Result = plus(5 , 5);
console.log(Result);



function variable(message = 'hello'){      //default perameter
    return message;
}
console.log(variable());                   //default perameter answer
console.log(variable('Hello World'));




          // ARROW FUNCTION

let greet1 = () => 'hello world';

let greet2 = () => {
    return 'hello world'
}

let greet3 = () => {
    let message= "hello world";
    return message;
}

// ager aik line se zyada ka code hai to aap ko {} lagane parenge or return bhi likhna parega