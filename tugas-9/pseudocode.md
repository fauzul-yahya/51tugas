#include <stdio.h>
#include <stdlib.h>


int main()
{   int iPeserta,iMinibus;
       
    printf(" Masukkan jml peserta : ");
    scanf("%d",&iPeserta);
    
    iMinibus=0;
        
    if (iPeserta > 7){
        iMinibus = iPeserta / 7;
        if (iPeserta % 7 != 0)
           iMinibus++;
    }else if (iPeserta > 0)
        iMinibus=1;
    
    printf("Minibus yg diperlukan: %d\n",iMinibus);
    
    
    system("PAUSE");
    return 0;
}
