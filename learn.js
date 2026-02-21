let a=5;
let b=6;
let c=a+b;
//console.log(c);
//for( let i=0; i<=10; i++) {
  //  for( let j=1;j<i;i++) {
        console.error("*");
    //}

//    console.log(i,"hello");
//}
  //  console.log(i,"hello");
   a="hello";
  console.log(a);0
  let arr=[1,2,3,4];
  for( let i=5;i>=0;i--) {
  console.log(arr[i]);  
  }
  //console.log(arr[]);
  //let no=Number(Prompt("enter the no"));
   //console.log("the number is ", no);
  
  const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number: ", function(input) {
  let number = Number(input);
  console.log("You entered:", number);
  rl.close();
});
