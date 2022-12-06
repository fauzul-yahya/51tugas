#include <stdio.h>
#include <stdlib.h>
#include <conio.h>

int main()
{   int iGol,iJam, iUpah;
    int iGaji;
    
    iUpah=0;
    
    printf(" Jumlah Jam Kerja : ");
    scanf("%d",&iJam);
    
    printf(" Golongan(1,2,3,4) : ");
    scanf("%d",&iGol);
    
    switch (iGol)
    { case 1:
             iUpah=3000;
             break;
      case 2:             
             iUpah=3500;             
             break;
      case 3:
             iUpah=4000;             
             break;
      case 4:
             iUpah=5000;                          
             break;
      default:
              printf("inputan golongan salah");              
    }    
    
    if (iJam > 40)
        iGaji = 40 * iUpah + ((iJam - 40) * 1.5 * iUpah);
    else
        iGaji = iJam * iUpah;
  
    
    printf("\n\n Gaji : Rp %d \n", iGaji);

      system("PAUSE");
      return 0;
}
