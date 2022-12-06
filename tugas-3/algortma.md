Algoritma Menghitung_Resistor

var
  Pilihan: Integer
  fR1, fR2, fR3, fResPengganti: Float 


start    
    Input(fR1,fR2,fR3)
    Input(iPilihan)

    Case iPilihan
     	1:  fResPengganti = fR1+ fR2+ fR3             
      	2:  fResPengganti  =  (1.0/fR1)+ (1.0/fR2)+ (1.0/fR3)
           	     fResPengganti  =  1.0/fResPengganti
              Otherwise: output(“pilihan salah”)
    End Case    
    
    Output(fResPengganti)
    
and
