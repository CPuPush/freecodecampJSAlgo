/**
 * the arity of a function os the number of arguments it requires.
 * currying a function means to convert a function of N arity into N functins of arity 1.
 * artinya curry sutau fungsi berarti mengubah fungsi N artias menjadi N fungsi dari aritas 1
 * arity adalah jumlah argument atau operan yang fungsi atau operasi dalam logika matemaika da
 * ilmu komputer
 * 
 * in other words, it restructures a function so it takes one argument, then returns another function that
 * takes the next argument
 * 
 * itu merestrukturisasi fungsi sehingga mengambil satu argumen, lalu mengembalikan fungsi lain yang mengambil
 * argument berikutnya dan seterusnya
*/
function unCurried(x, y) {
    return x + y;
  }
  
  function curried(x) {
    return function(y) {
      return x + y;
    }
  }
  
  const currieds = (x) => (y) => x + y
  

  console.log(currieds(1)(2));
  /**
   * its useful in your program if you can't suply all the arguments to afunction at one time.
   * you can save each function call into a variable, which will hold the returned function reference that
   * takes the next argument when it's available 
   * here's example using the curried function in the example above
   * 
   */
const funcFor = currieds(1);
console.log(funcFor(3));

/**
 * similarly, partial application can be described as applying a few arguments to a function
 * at a time and returning another function that is applied to more arguments
 * 
 * ex 
 */
function impartial(x,y,z){
    return x+y+z;
}
const partialFn = impartial.bind(this,1,2);
console.log(partialFn(10));
