#include <stdio.h>
#include <stdlib.h>
#include <conio.h>

int main()
{   int iJamStart,iMenitStart,iJamStop,iMenitStop,iSelangMenit, iJamDurasi, iMenitDurasi ;
    
    long int iTotMenit1, iTotMenit2;
    
    printf(" Masukkan Waktu Mulai (contoh 10:05) : ");
    scanf("%d:%d",&iJamStart,&iMenitStart);
    
    printf(" Masukkan Waktu Berhenti (contoh 11:04) : ");
    scanf("%d:%d",&iJamStop,&iMenitStop);
    
    iTotMenit1 = iJamStart * 60 + iMenitStart;
    iTotMenit2 = iJamStop * 60 + iMenitStop;
    
    if (iTotMenit2 >= iTotMenit1)
          iSelangMenit = iTotMenit2 - iTotMenit1;                                      
    else 
          iSelangMenit = ((12*60)-iTotMenit1)+iTotMenit2;
    
    iJamDurasi = iSelangMenit / 60;
    iMenitDurasi = iSelangMenit % 60;
  
    printf("\n\n Durasi adalah %d Jam %d Menit\n", iJamDurasi, iMenitDurasi);

      system("PAUSE");
      return 0;
}
