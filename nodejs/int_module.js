const myos=require('os');

var a=myos.platform();
var b=myos.release();
var c=myos.tmpdir();
var d=myos.totalmem();


console.log("OS :",a);
console.log("OS Release :",b);
console.log("OS Default Dir :",c);
console.log("OS Total Memory :",d);
