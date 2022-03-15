function titleCase(str) {
    let newTitle = str.split(" ");
    let updateTitle = [];
    for(let st in newTitle){
        updateTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
        console.log(updateTitle);        
    }
    return updateTitle.join(" ");
}
console.log(titleCase("I'm a little tea pot"));
