// Only change code below this line
class Thermostat{
    constructor(temp){
        this._temp = temp;
    }
    //getter
    get temperature(){
        return (5/9) * (this._temp - 32);//F->C
    }
    //setter
    set temperature(CelTemp){
       this._temp = CelTemp * 9.0 / 5 + 32 //C->F
    }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp);

thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp)

