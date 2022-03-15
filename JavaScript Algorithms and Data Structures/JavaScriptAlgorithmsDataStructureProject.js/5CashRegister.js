function checkCashRegister(price, cash, cid) {
  //cari tot kembalian * 100
  let totalKembalian = cash * 100 - price * 100;
  console.log(totalKembalian);

  //hitung total duit di kasir * 100
  let totalUang = cid.map(el=>el[1]).reduce((acc, el)=> acc+el * 100,0);
  console.log(totalUang);

  //guide * 100
  let rumusSlot = {
    "PENNY" : 1,
    "NICKEL" : 5,
    "DIME" : 10,
    "QUARTER" : 25,
    "ONE" : 100,
    "FIVE" : 500,
    "TEN" : 1000,
    "TWENTY" : 2000,
    "ONE HUNDRED" : 10000
  };

  
  //kondisi 1, kembalian <  
  if(totalKembalian > totalUang){
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }

  //kondisi 2, ketika kembalian = cid
  else if(totalKembalian == totalUang){
    return {status: "CLOSED", change: cid};
  }

  //kondisi 3 ada kembalian / cid > total kembalian
  else if(totalKembalian < totalUang){
    cid =cid.reverse();
    console.log(cid);

    //siapkan kembalian 
    let jumlahUangYangDikembalikan = [];
    cid.forEach((slot)=>{
      //set kondisi awal dari slot baru
      let kondisiSlotBaru = [slot[0], 0];
      console.log(kondisiSlotBaru);

      // satuan nama pecahan
      let satuan = slot[0];
      console.log(satuan);

      //jumlah yang dalam slot
      let pecahan = slot[1]*100;
      console.log(pecahan);

      //cek yang berdasarkan satuan, kurangi jika kembalian masih memenuhi
      while( totalKembalian >= rumusSlot[satuan] && pecahan > 0){
        totalKembalian-=rumusSlot[satuan];
        pecahan -= rumusSlot[satuan];
        kondisiSlotBaru[1] += rumusSlot[satuan] / 100;
      }
      if(kondisiSlotBaru[1] > 0){
        jumlahUangYangDikembalikan.push(kondisiSlotBaru);
      }

    });
    if(totalKembalian > 0){
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }
    
    //check jika uang ada, tetapi pecahan tidak ada
    return {
      status: "OPEN", 
      change: jumlahUangYangDikembalikan};
  }
}
// total harga 19.5
// kembalian 20-19.5 = 0.5
//0.5 => ['QUARTER', 0.5]

console.log(checkCashRegister(19.5, 20, 
  [
  ["PENNY", 1.01], //0.01 // ada 101 penny 
  ["NICKEL", 2.05], //0.05 //berati ada 41 nicker
  ["DIME", 3.1], //0.1 //berarti ada31 dime
  ["QUARTER", 4.25],//0.25 //berarti ada 17 Quarter
  ["ONE", 90], //1 // berarti ada 90 One
  ["FIVE", 55], //5 //berarti ada 11 FIve dolar
  ["TEN", 20], //10 //ada 2 Ten dolar
  ["TWENTY", 60], //20 // ada 3 Twenty dolar
  ["ONE HUNDRED", 100]//100 //ada 1 uang One Hundred Dolar
  ]
)); 
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
/**
 *  Penny	$0.01 (PENNY)
    Nickel	$0.05 (NICKEL)
    Dime	$0.1 (DIME)
    Quarter	$0.25 (QUARTER)
    Dollar	$1 (ONE)
    Five Dollars	$5 (FIVE)
    Ten Dollars	$10 (TEN)
    Twenty Dollars	$20 (TWENTY)
    One-hundred Dollars	$100 (ONE HUNDRED)  
 */