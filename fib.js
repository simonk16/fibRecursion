var n = process.argv[2]

function fibbi(n) {
    return function(n,a,b) {
       return n>0 ? arguments.callee(n-1,b,a + b) : a; 
    }(n,0,1);
    
    
}

var x = fibbi(n);

console.log(x)

