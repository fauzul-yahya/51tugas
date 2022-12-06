
int main()
{   int Masuk, Keluar, Lama;
    long int Biaya;
    
    printf("Menghitung Biaya Parkir\n\n");
    printf(" Jam Masuk : ");
    scanf("%d",&Masuk);

    printf(" \nJam Keluar : ");
    scanf("%d",&Keluar);
    
    if (Keluar >= Masuk)
          iLama = Keluar - Masuk;                                      
    else 
          Lama = (12-Masuk) + Keluar;                   
    
    if (Lama > 2)
       Biaya = 2000 + ((Lama - 2)*500);
    else
        Biaya = 2000; 
    
    printf("\n\n Biaya parkir adalah : Rp %d \n", iBiaya);
    
      system("PAUSE");
      return 0;
}
