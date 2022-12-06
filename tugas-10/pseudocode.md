 #include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{   int iNHari,iBelakang;
    char cNamaHari[15];    
    
    printf("Masukkan N Hari yg lalu : ");
    scanf("%d",&iNHari);
    
    iBelakang = (iNHari+1) ;    
    
    switch (iBelakang){    
         case 1:
                strcpy(cNamaHari,"Senin");
                break;
         case 2:
                strcpy(cNamaHari,"minggu");
                break;
         case 3:
                strcpy(cNamaHari,"sabtu");
                break;
         case 4:
                strcpy(cNamaHari,"jumat");
                break;
         case 5:
                strcpy(cNamaHari,"kamis");
                break;
         case 6:
                strcpy(cNamaHari,"rabu");
                break;
         case 7:
                strcpy(cNamaHari,"selasa");
                break;
         default:
                 strcpy(cNamaHari,"Inputan salah");   
    }               
    
    printf("\n Sekarang Hari Senin. %d Hari yang lalu adalah hari %s \n",iNHari,cNamaHari);       
    
      system("PAUSE");
      return 0;
}
