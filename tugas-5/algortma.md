Algoritma Menghitung_Gaji

KAMUS DATA
  iGol, iJam, iUpah, iGaji : Integer 

BEGIN    
      	
    Input(iGol)    
    Input(iJam)

    iUpah  0
    
    Case(iGol)
          1: iUpah  3000	         
          2: iUpah  3500	         
          3: iUpah  4000	         
          4: iUpah  5000	              
    End case
    
    If (iJam > 40) Then
         iGaji   40 * iUpah + ((iJam - 40) * 1.5 * iUpah)           
    Else
         iGaji  iJam * iUpah
    End if                                       
     
    Output(iGaji)

END
