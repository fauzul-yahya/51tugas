let hariini = 6;
let hari= 8;

function belakang(){
  if (hariini > hari){
  let belakang = hariini - hari
  return belakang
}else{
  let belakang = hari - hariini
  return belakang
}
}
console.log(belakang())

switch(belakang()){
  case 1:
   harilalu = ("senin");
  break;
  case 2:
  harilalu = ( "selasa");
  break;
  case 3:
  harilalu =  ("rabu");
  break;
  case 4:
  harilalu = ("kamis");
  break;
  case 5:
  harilalu = ("jumat");
  break;
  case 6:
  harilalu = ("sabtu")
  break;
  case 7:
  harilalu = ("minggu")
  break;
  default:
  harilalu = "inputan salah"
}
console.log(harilalu)
