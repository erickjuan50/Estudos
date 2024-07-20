import Data.Char
--Primeira Questão

lucro :: Float -> Float
lucro x
    |x <= 300 = x + ((10/100)* x)
    |x > 300 && x < 899 = x + ((20/100)* x)
    |otherwise = x + ((30/100)* x)

--Segunda Questão

type Resultado = (Int,String)

media n1 n2 n3 = (n1+n2+n3)/3.0 

notaAluno :: Float -> Float -> Float -> Resultado
notaAluno n1 n2 n3
    |media n1 n2 n3 < 3 = (truncate(media n1 n2 n3),"Reprovado")
    |media n1 n2 n3 >= 3 && media n1 n2 n3 < 7 = (truncate(media n1 n2 n3),"Exame")
    |media n1 n2 n3 > 7 = (truncate(media n1 n2 n3),"Aprovado")

--Terceira Questão
type Pessoa = (String, Int, Float, Char)

pess :: Int->Pessoa
pess x
    |x==1 = ("Pitico", 27, 1.66,'M')
    |x==2 = ("Viral", 26, 1.85,'M')
    |x==3 = ("Kronos", 67, 1.55,'M')
    |x==4 = ("Tortelino", 48, 1.78, 'M')
    |x==5 = ("Kadu", 24, 1.93, 'M')
    |x==6 = ("Cjay", 38, 1.70,'M')
    |x==7 = ("Checute", 12, 1.45, 'M')
    |x==8 = ("Mokas", 31, 1.58,'M')
    |x==9 = ("Lilia", 75, 1.74, 'F')
    |x==10 = ("Papel", 21, 1.69,'M')
    |otherwise = ("Acabou!",0, 0.0, 'x')

-- Letra A)
idade (_,x,_,_) = x
genero (_,_,_,x) = x

maiorI n = maiorI_aux n 1
maiorI_aux 1 x = x

maiorI_aux n x
    |(idade(pess n)) > (idade(pess x)) = maiorI_aux n (x+1)
    |otherwise = maiorI_aux (n-1) x

--Letra B)

mediaI n = (somaI_aux n 0)/fromIntegral n :: Float
somaI_aux n r
    |n==0 = fromIntegral r :: Float
    |otherwise = somaI_aux (n-1) (r + idade (pess n))

--Letra C)

quantP n = quantP_aux n 0
quantP_aux 0 y = y
quantP_aux n y
    |idade (pess n) > 25 && genero (pess n) == 'M' = quantP_aux (n-1) (y+1)
    |otherwise = quantP_aux (n-1) (y)












































