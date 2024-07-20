--somaP n1 n2 
--  |n1==n2 = n1
--  |otherwise = n1 + somaP (n1+1) n2
--
--somaI n1 n2
--  |n1<n2 = somaP n1 n2
--  |otherwise = somaI n2 n1
--somaE n1 n2
--  |n1<n2 = somaP (n1+1) (n2-1)
--  |otherwise = somaE n2 n1


soma x = aux x 0
aux y 0 = y
aux x y = aux (x-1) (y+x)

--somaI x y = soma y - soma (x-1)

--ou

somaI x y
  |x==y = x
  |otherwise = x + somaI (x+1) y

mult_3 n1 n2 n3
  |n1>n2 = 0
  |(mod n1 n3)==0 = 1 + mult_3 (n1+n3) n2 n3
  |otherwise = mult_3 (n1+1) n2 n3


multi n1 n2
 |n1<0 = -(multi (-n1) n2)
 |n1==0 = 0
 |otherwise = (multi (n1-1) n2) + n2




pessoa rg
    |rg==1 = ("Joao Silva", 82,'m')
    |rg==2 = ("Jonas Souza", 81, 'm')
    |rg==3 = ("Joice Silva", 20, 'f')
    |rg==4 = ("Janete Souza", 55, 'f')
    |rg==5 = ("Jocileide Strauss", 21, 'f')
    |otherwise = ("Nao ha mais ninguem", 0, 'x')

idade (_,x,_) = x
nome (x,_,_) = x

menor_I n = m_i_aux n 1

m_i_aux 0 rg = rg
m_i_aux n rg
   |(idade (pessoa n))<(idade (pessoa rg)) = m_i_aux (n-1) n
   |otherwise = m_i_aux (n-1) rg

nome_menor_I n = nome (pessoa (menor_I n))


funcaoR 0 = 1
funcaoR x = funcaoR (x-1) - 2

mdc (x,y) = y se x mod y=0
 = mdc (y, x mod y) se x mod y != 0