ALGORITMA Menghitung_Kuadran

KAMUS DATA
    ix, iy: Integer

BEGIN        
   Input(ix,iy)

    If (ix >= 0)
          If (iy >=0)
              Output(“Kuadran I”)
          else 
              Output(“Kuadran IV”)
    else 
          if (iy >=0)
	Output(“Kuadran II”)
          else 
              Output(“Kuadran III”)
END    
