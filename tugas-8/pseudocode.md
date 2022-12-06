#include <stdio.h>
#include <stdlib.h>

int main()
{   int iGajiPokok, iTunjangan, iJmlAnak;
       
    printf(" Masukkan Gaji Pokok : ");
    scanf("%d",&iGajiPokok);
    
    printf(" Masukkan JmlAnak : ");
    scanf("%d",&iJmlAnak);
    
    if (iJmlAnak<=3 && iJmlAnak>0)
          iTunjangan = iJmlAnak * 0.1 * iGajiPokok;                                      
    else if (iJmlAnak>3)
         iTunjangan = 3 * 0.1 * iGajiPokok;
    else 
         iTunjangan =0;                                      
    
    printf("\nTunjangan Anak adalah sebesar Rp.%d \n", iTunjangan);
    
    system("PAUSE");
    return 0;
}
