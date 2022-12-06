Algoritma Biaya_Parkir
(menghitung biaya parkir)

var
    Masuk, Keluar, Lama, Biaya: Integer
    
Start   
    Input(Masuk)
    Input(keluar)
    
    If (Keluar >= Masuk) Then
          Lama = Keluar - Masuk                                      
    Else 
          Lama = (12-Masuk) + Keluar               
    End If    

    If (Lama > 2) Then
       Biaya = 2000 + ((Lama - 2)*500)
    else
        Biaya = 2000
    
    Output(Biaya)
END

