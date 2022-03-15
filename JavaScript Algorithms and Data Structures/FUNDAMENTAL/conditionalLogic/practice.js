// Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");
/**
 * if the value being compared are not of the same type, the equality operator will perform
 * a type conversion, and then evaluate the values.
 *  However, the strict equality operator will compare both the data type and value as-is, without converting one type to the other.
 */