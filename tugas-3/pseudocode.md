

int main()
{   int Pilihan;
    float fR1, fR2, fR3;
    float fResPengganti;
    
    printf("Menghitung Resistor Pengganti");
    printf("\n\Masukkan Nilai R1: ");
    scanf("%f",&fR1);
    printf("\Masukkan Nilai R2: ");
    scanf("%f",&fR2);    
    printf("\Masukkan Nilai R3: ");
    scanf("%f",&fR3);
    
    printf(" \n\Penyusunan Resistor: ");
    printf("\n 1.Seri");
    printf("\n 2.Paralel");
    printf("\Masukkan pilihan penyusunan (1 atau 2): ");
    scanf("%d",&Pilihan);

    switch (iPilihan)
    { case 1:
             fResPengganti = fR1+ fR2+ fR3;
             break;
      case 2:             
             fResPengganti =  (1.0/fR1)+ (1.0/fR2)+ (1.0/fR3);
             fResPengganti = 1.0/fResPengganti;
             break;
      default:
              printf("inputan salah");
    }
    
      printf("\n\nBesar resistor pengganti adalah : %.2f \n", fResPengganti);
    
      system("PAUSE");
      return 0;
}
