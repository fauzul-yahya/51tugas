Algoritma Lama_Bekerja
{jam berupa angka 1-12, dan seorang pegawai 
bekerja kurang dari 12 jam}

var
Masuk, Keluar, Lama: Integer

Algoritma
    Input(Masuk)
    Input(Keluar)

If (Keluar >= Masuk) Then
    Lama=Keluar - Masuk
Else
    Lama=(12-Masuk) + Keluar
end if

Output(Lama)

END