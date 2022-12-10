var masuk = 10;
var keluar = 11;

function lama(){
   if(keluar > masuk ){
   return (keluar - masuk+ ' jam' )
   }else{
   return ((12 - masuk)+keluar + ' jam' )   
   }
}

console.log(lama())