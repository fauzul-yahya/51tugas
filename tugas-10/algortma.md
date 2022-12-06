ALGORITMA Menentukan_Nama_Hari_1

KAMUS DATA
    iNHari,iBelakang : Integer
    cNamaHari[15]: String    
 
BEGIN   
    Input(iNHari)
    
    iBelakang  ( iNHari + 1)     
    
    Case (iBelakang)    
         1: cNamaHari "Senin"
         2: cNamaHari "Selasa"
         3: cNamaHari "Rabu"
         4: cNamaHari "Kamis"
         5: cNamaHari "Jumat"
         6: cNamaHari "Sabtu"
         7: cNamaHari "Minggu"
         Otherwise: cNamaHari  "Inputan salah"  
    End Case           
    
   Output(cNamaHari)

END

