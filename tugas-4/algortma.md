Algoritma Menghitung_Barang

var
iKode,iHarga:integer
cJenis: character

start
    Input(cJenis)
    Input(iKode)
    Input(iHarga)

    Case(cJenis)
    	'A': iHDiskon = 0,9 * iHarga
	'B': iHDiskon = 0,85 * iHarga
  	'C': iHDiskon = 0,8 * iHarga
    End Case

    output(iHDiskon)
END    

