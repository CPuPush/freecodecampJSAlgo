function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    arr.map((el)=>{
        el.orbitalPeriod = Math.round(2*Math.PI*Math.sqrt(Math.pow((el.avgAlt + earthRadius), 3) / GM));
        delete el.avgAlt;
    });
    return arr;
  }
console.log(orbitalPeriod(
    [{name : "sputnik", avgAlt : 35873.5553}])
);

console.log(
    orbitalPeriod([{name: "iss", avgAlt: 413.6}, 
{name: "hubble", avgAlt: 556.7}, 
{name: "moon", avgAlt: 378632.553}]));