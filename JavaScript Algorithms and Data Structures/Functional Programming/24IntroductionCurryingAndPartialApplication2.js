function add(x) {
  // Only change code below this line
  return function(y){
    return function(z){
      return x+y+z;
    }
  }

  // Only change code above this line
}
console.log(add(10)(20)(30));

/**
 * currying seperti fungsi yang belum jadi
 * currying berjalan ketika fungsi selesai dijalankan
 * seperti tokopedia fungsi pemesanan berjalan sesuai flownya
 * ketika ada membeli pilih barang nah ada saatnya setengah jadi
 * jadi seperti itulah gambarannya
 */