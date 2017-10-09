function removeArr(a){
    var str = '';
    for(var i=0;i<a.length;i++){
        if(str.indexOf(a[i]) === -1){
            str += a[i];
        }
    }
    return str.split('');
}
console.log(removeArr(arr));