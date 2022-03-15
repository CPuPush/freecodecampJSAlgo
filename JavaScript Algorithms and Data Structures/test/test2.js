let bdays = ['10-7', '05-19', '20-19'];
function splits(arr){
    let allCon = [];
    for(let i=0;i<arr.length;i++){
        const arrs = arr[i].split("-");
        const container = arrs.join("/");
        allCon.push(container);
    }
    return allCon;
}

console.log(splits(bdays));