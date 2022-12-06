ALGORITMA MENGHITUNG_JAM_MENIT

KAMUS DATA
iJamStart,iMenitStart,iMenitStop,iJamStop: integer
iTotMenit1,iTotMenit2,iSelangMenit,iJamDurasi,iMenitDurasi: integer

BEGIN  
    Input(iJamStart)
    Input(iMenitStart)
    
    Input(iJamStop)
    Input(iMenitStop)
    
    iTotMenit1  iJamStart * 60 + iMenitStart
    iTotMenit2  iJamStop * 60 + iMenitStop
    
    If (iTotMenit2 >= iTotMenit1) Then
          iSelangMenit  iTotMenit2 - iTotMenit1
    Else 
          iSelangMenit  ((12*60)-iTotMenit1) + iTotMenit2
    End if 
    
    iJamDurasi  iSelangMenit div 60
    iMenitDurasi  iSelangMenit mod 60;
  
    Output(iJamDurasi)
    Output(iMenitDurasi)

END
