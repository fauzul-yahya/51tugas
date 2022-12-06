let gajipokok = 1000000;
let jmlAnak = 2 ;

function tunjangan(){
  if(jmlAnak <= 3 && jmlAnak > 0){
     let tunjangan = jmlAnak * gajipokok
     return tunjangan
  }else if(jmlAnak > 3){
    let tunjangan = 3 * gajipokok
     return tunjangan
  }else{
    let tunjangan = 0
     return tunjangan
  }
}

console.log(tunjangan())