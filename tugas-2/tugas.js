let masuk = 10 ;
let keluar = 6;


if(keluar >= masuk){
   lama = keluar - masuk
}else{
   lama = (12 - masuk)+keluar
}


if(lama > 2){
   biaya = 2000 + ((lama - 2)*500)
}else{
   biaya = 2000
}

console.log('Biaya ='+biaya)