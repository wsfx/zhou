var arr = [1,2,3,4,5,1,2];
function fn(a){
    var brr = [];
    for(var i=0;i<a.length;i++){
        if(brr.indexOf(a[i]) === -1){
            brr.push(a[i]);
        }
    }
    return brr;
}
console.log(fn(arr));

