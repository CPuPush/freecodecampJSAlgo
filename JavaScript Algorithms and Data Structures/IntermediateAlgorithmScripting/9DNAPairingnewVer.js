const pairElement=(str)=>{
    const pair = {
        A:"T",
        T:"A",
        C:"G",
        G:"C"
    };
    return str.split("").map((el)=>[el, pair[el]]);
}


console.log(pairElement("GCG"));
  