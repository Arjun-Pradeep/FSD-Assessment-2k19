var a=102;
var rev=0;
var rem=0;

console.log(revrs(a,rev,rem));

function revrs(m,n,o){

    
    while(m>0){
        o=m%10;
        n=n*10+o;
        m=parseInt(m/10);
    }
    return n;
}

