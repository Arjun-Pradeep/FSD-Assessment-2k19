var a=102;
var rev=0;
var rem;

while(a!=0){
    rem=a%10;
    rev=rev*10+rem;
    a=a/10;
}

console.log(rev);