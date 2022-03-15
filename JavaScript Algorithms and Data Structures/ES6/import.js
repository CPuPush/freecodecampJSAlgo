//in export file there is add function that exported
//now import it
import { add } from './export.js';
console.log(add(4,5));
//challenge
import{uppercaseString} from './string_function.js';
//import everything from a file
import * as myMathModule from './math_function.js';
//import statement will create an object called myMathModule

//challenge
import * as stringFunction from './string_function.js';


//import a default exported
import add from "./export.js"
/**
 * add here is simply a variable name for what ever the default export of the math_functions.js
 */
