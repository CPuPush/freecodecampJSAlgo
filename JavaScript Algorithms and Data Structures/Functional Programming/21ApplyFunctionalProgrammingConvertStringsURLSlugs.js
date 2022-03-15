// Only change code below this line
function urlSlug(title) {
    const str = title.split(" ");
    // const strs = str.join("-");
    const container = [];
    for(let i = 0;i<str.length;i++){
        if(str[i]!==""){
            container.push(str[i]);
        }
    }
    return container.join("-").toLowerCase();

}
// Only change code above this line

// console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));
console.log(urlSlug(" Winter Is  Coming"));

//join is make array to be a string