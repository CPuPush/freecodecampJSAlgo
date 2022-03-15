function dropElements(arr, func) {
    let container=[];
    for(let i = 0;i<arr.length;i++){
        if(func(arr[i]) == true){
            container.push(arr.slice(i, arr.length));
            break;
        }
    }
    if(container[0]==undefined){
        return container;
    }
    return container[0];

}
// console.log(dropElements([1, 2, 3],
//      function(n) {return n < 3; }));
console.log(
    dropElements([1, 2, 3, 4], 
        function(n) {return n >= 3;})
);
console.log(
    dropElements([1, 2, 3, 4], 
        function(n) {return n > 5;})
);