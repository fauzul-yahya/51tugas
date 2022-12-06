var masuk = 10;
var keluar = 11;

function lama(){
   if(keluar > masuk ){
   console.log( keluar - masuk + ' jam')
   }else{
   console.log( (12 - masuk)+keluar +' jam')   
   }
}

console.log( varlama())


function biaya(){   
 if(lama > 2){
    let biaya= 'Rp.'+( 2000 + ((lama -2)*500))
   return biaya
 }else{
  let biaya = 'Rp.'+(2000)
   return biaya
 }
}
console.log(biaya())