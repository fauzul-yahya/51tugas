Tulis procgram untuk menentukan lama bekerja seorang pegawai
jika jam masuk dan jam pulang diinput.
Catatan: jam berupa angka 1-12, dan seorang pegawai bekerja kurang dari 12 jam.
asumsi jam yang dimasukkan adalah tepat {tidak memasukkan menit}


int main()
    {int Masuk, Keluar, Lama;

    printf("Menentukan lama bekerja\waktu\waktu");
    printf(" Jam Masuk : ");
    scanf("%d",&Masuk);

    printf(" \Jam Keluar : ");
    scanf("%d",&Keluar);

    if (Keluar >= Masuk)
    Lama = Keluar - Masuk;
 else 
    Lama = (12-Masuk) + Keluar;
    printf("\n\n Lama bekerja adalah : %d Jam\n", Lama);

    system("PAUSE");
    return 0;
}