function diffArray(arr1, arr2) {
    let container = [];
        for(let i=0;i<arr1.length;i++){
            let sement = arr1[i];
                if(arr2.indexOf(sement)==-1){
                container.push(sement);
            }
        }
        for(let i=0;i<arr2.length;i++){
            let sement = arr2[i];
                if(arr1.indexOf(sement)==-1){
                container.push(sement);
            }
        }

    return container;
}
  console.log(diffArray([1, 2, 3, 4, 5], [1, 2, 3, 5]));
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
  console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
  console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));