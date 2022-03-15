/**
 * using const declaration only prevents reassignment of the variable idetifier
 * artinya hanya mencegah penugasan kembali pengidenrifikasi variable
 */
//  const s = [5, 6, 7];
// //  s = [1, 2, 3];
//  s[2] = 45;
//  console.log(s);
//error
//but with let is executed
//di ganti value tidak bisa, tapi di ubah bisa that is the const

const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
    return s;
  // Only change code above this line
}
console.log(editInPlace());