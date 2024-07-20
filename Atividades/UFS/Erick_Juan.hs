-- 3 Questão)	Seja o cadastro de pessoas dado por uma lista e exemplo de:
type Nome = String
type Idade = Int
type Altura = Float
type Genero = Char
type Cliente = (Nome, Idade, Altura, Genero)
type Cadastro = [Cliente]
cadastro :: [Cliente]
cadastro = [("Rosa", 27, 1.66,'F'),("Joao", 26, 1.85,'M'),("Maria", 67, 1.55,'F'),("Jose", 48, 1.78, 'M'),("Paulo", 24, 1.93, 'M'), ("Clara", 38, 1.70,'F'), ("Bob", 12, 1.45, 'M'), ("Rosana", 31, 1.58,'F'), ("Daniel", 75, 1.74, 'M'), ("Jocileide", 21, 1.69,'F')]

-- Letra a)	Recebe a lista cadastro e retorne uma lista contendo apenas os nomes contidos em cadastro.
cataNome :: Cadastro -> [String]
cataNome xs = [a | (a, b, c, d) <- xs]

-- Letra b)	Recebe a lista cadastro e uma idade e retorna quantas pessoas no cadastro possuem idade maior ou igual a que foi digitada.
idadeIgual :: Cadastro -> Idade -> Int
idadeIgual xs y = length [b | (a, b, c, d) <- xs, b >= y]

-- Letra c)	Recebe a lista cadastro e retorna a idade média de todas das pessoas.
somaLista [] = 0
somaLista (x:xs) = x + somaLista xs

listaIdades :: Cadastro -> [Idade]
listaIdades xs = [b | (a, b, c, d) <- xs]

idadeMed :: Cadastro -> Float
idadeMed xs = (fromIntegral (somaLista (listaIdades xs)) :: Float) / (fromIntegral (length (listaIdades xs)) :: Float)

-- Letra d)	Recebe a lista cadastro e retorna o número de pessoas do sexo masculino com idade superior a 25 anos.
mMaior :: Cadastro -> Int
mMaior xs = length [b | (a, b, c, d) <- xs, b >= 25 && d == 'M']

-- Letra e)	Recebe a lista cadastro e retorna a tupla com os dados da pessoa mais jovem.
idade (_,x,_,_) = x
menorIdade :: Cadastro -> Cliente
menorIdade [x] = x
menorIdade (x:y:xs)
  |(idade x) <= (idade y) = menorIdade (x:xs)
  |otherwise = menorIdade (y:xs)


-- 4 Questão) Faça uma função “primo” que recebe um valor e retorna True se o valor é primo e False caso contrario. Faça outra função que possa receber “primo” e uma lista de inteiros e que faça um filtro retornando apenas os valore em que “primo” é válido.

listaTeste = [(-10)..29]
primo x
 |x < 0 = False
 |verificaPrimo x == 2 = True
 |otherwise = False

verificaPrimo x = aux x x 0

aux _ 0 contador = contador
aux x y contador
   |mod x y == 0 = aux x (y-1) (contador+1)
   |otherwise = aux x (y-1) contador

filtro _ [] = []
filtro primo (x:xs)
 |(primo x) == True = x:filtro primo xs
 |otherwise = filtro primo xs

