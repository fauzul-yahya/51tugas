ALGORITMA Menghitung_Tunjangan

KAMUS DATA
    iPeserta,iMinibus : Integer

BEGIN        
    Output(iPeserta)
    
    iMinibus0
        
    If (iPeserta > 7) Then
        iMinibus  iPeserta / 7
        If (iPeserta % 7 != 0) Then
              iMinibus  iMinibus + 1
        End If
    Else if (iPeserta > 0) Then
        iMinibus  1
    End if
    
    Output(iMinibus)

 END   
