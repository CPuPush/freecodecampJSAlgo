const squareList = arr => {
    // Only change code below this line
    const positive = arr.filter(acc=>
        acc > 0 && acc % parseInt(acc)==0
    )
    .map(acc=>Math.pow(acc, 2));

    return positive;
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])
  console.log(squaredIntegers);