#include <stdio.h>
#include <stdlib.h>

int main()
{   int ix, iy;
    
    printf(" Masukkan koordinat x,y : ");
    scanf("%d,%d",&ix,&iy);

    if (ix >= 0)
          if (iy >=0)
              printf("\nKuadran I\n");
          else 
              printf("\nKuadran IV\n");                                                 
    else 
          if (iy >=0)
              printf("\nKuadran II\n");
          else 
              printf("\nKuadran III\n");
    
      system("PAUSE");
      return 0;
}
