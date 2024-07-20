-- ERICK JUAN GOIS OLIVEIRA
--Matricula: 202000107691


type CodProd = Int
type NomeProd = String
type PrecoProd = Int
type Produto = (CodProd, NomeProd, PrecoProd)
type Menu = [Produto]
type CodCliente = Int
type NomeCliente = String
type CategCliente = Char
type ConsumoAnual = Int
type Cliente = (CodCliente, NomeCliente, CategCliente, ConsumoAnual)
type Clientes = [Cliente]
-- Ex:fregueses :: Clientes
--fregueses = [(4, “Marcos Sa”, ‘A’, 38000), (3, “Mateus Oliveira”, ‘A’, 30000), (2, “Sofia Reis”, ‘B’, 50000), (1, “Paulo Souza”, ‘C’, 100000)]
type Quant= Int
type SolCliente = (CodProd, NomeProd, Quant)
type PedidoCliente = [SolCliente]
type Pedidos = [(CodCliente, PedidoCliente)]
--pedidosRest :: Pedidos
--pedidosRest =
--[(12,[(150,”Hamburguer”, 1),(2,”Coca-cola”,2)]), (13,[(40,”Batata-frita”,4),(15,”Agua”,3), (2,”Coca-cola”,1)]]


--3.1 Escreva as funções a seguir para manipular o cardápio do restaurante armazenado no sistema.

--(a) Adiciona um produto no cardápio. Se o código do produto já existir no cardápio deve retornar uma mensagem de erro sinalizando que existe um produto já cadastrado para aquele código.

cardapio :: Menu
cardapio = [(1, "Hamburguer", 1000), (2, "Agua", 400), (3, "Coca-cola", 600), (4, "Batata-frita", 850), (5, "Casquinha", 250), (6, "Picole", 300), (7, "Geladinho", 125), (8, "Cremosinho", 100), (9, "X-bacon", 1000)]

adicionaProdMenu :: Menu -> Produto -> Menu
adicionaProdMenu xs (c, n, p)
 |verificaIgual == [] = (c, n, p) : xs
 |otherwise = error "Já existe um produto com este codigo"
 where verificaIgual = [o | (o, p, q) <- xs, o == c]  


 --(b) Remove um produto no cardápio, informando seu código. Se o código do produto não existir no cardápio deve retornar uma mensagem de erro sinalizando que não existe um produto no cardápio para aquele código.                 

removeProdMenu :: Menu -> CodProd -> Menu
removeProdMenu xs c
 |codIguais == [] = error "Não existe nenhum produto com este codigo"
 |otherwise = removeProd
 where codIguais = [o | (o,p,q) <- xs, o == c]
       removeProd = [(x,y,z) | (x,y,z) <- xs, c /= x]

--(c) Coleta um produto no cardápio, informando seu código. Para simplificar, considere que esta operação só tem o caso de sucesso, ou seja, o item consultado sempre vai existir no cardápio.
coletaProdMenu :: Menu -> CodProd -> Produto
coletaProdMenu xs c = head [(x,y,z) | (x,y,z) <- xs, c == x]

--3.2 Escreva funções para gerir clientes.
--(a) Adiciona um cliente na lista de clientes do restaurante. O cliente será adicionado
--sempre no início da lista. O código do novo cliente é gerado adicionando-se 1 ao
--código do cliente mais antigo, que está no início da lista vigente. Caso a lista
--vigente esteja vazia, o primeiro cliente a ser adicionado terá código 1. O novo
--cliente possuirá categoria A e consumo anual 0 ao se cadastrar. Observe que a
--lista assim construída será ordenada, de forma decrescente, pelo código do cliente.
clientes :: Clientes
clientes = []

clientes2 :: Clientes
clientes2 = [(5,"silvio",'E',3600),(4,"savio",'D',3600),(3,"fernando",'C',1600),(2,"bruno",'B',600),(1,"erick",'A',320)]

adicionaCliente :: Clientes-> NomeCliente -> Clientes
adicionaCliente xs nome
 |xs==[] = [(1,nome,'A',0)]
 |otherwise = [(clienteInicial+1,nome,'A',0)] ++ xs
 where clienteInicial = head [w | (w,x,y,z) <- xs]

--(b) Consulta os dados do cliente, informando seu código. Para simplificar, considere que esta operação só tem o caso de sucesso, ou seja, o código consultado sempre vai existir na lista de clientes.
 
coletaCliente :: Clientes -> CodCliente -> Cliente
coletaCliente xs c = head [(w,x,y,z) | (w,x,y,z) <- xs, (c == w)]

--(c) Atualiza o consumo anual do cliente a cada compra, informando o código do cliente e o valor da compra corrente, que será acrescido ao valor vigente do
--consumo anual. Considere que o código do cliente está correto e existe na lista de clientes.

type Compra = Int

atualizaConsumo :: Clientes -> CodCliente -> Compra -> Clientes
atualizaConsumo xs i p = maiores ++ atualizado ++ menores     
 where atualizado = [(w,x,y,z+p)|(w,x,y,z)<-xs,(i==w)]
       maiores = [(a,b,c,d)|(a,b,c,d)<-xs, (a>i)] 
       menores = [(e,f,g,h)|(e,f,g,h)<-xs, (e<i)]

--(d) Atualiza a lista dos clientes a cada ano. Esta função atualiza as categorias de todos os clientes da lista de acordo com o consumo anual acumulado no ano e zera o consumo anual para o próximo ano.

atualizaClientes :: Clientes -> Clientes
atualizaClientes xs = [(w,x,resetValor y z,0)|(w,x,y,z) <- xs]
 where 
    resetValor :: CategCliente -> ConsumoAnual -> CategCliente
    resetValor y z|(z<500) = 'A'
                    |(z >= 500) && (z<1500) = 'B'
                    |(z >= 1500) && (z<2500) = 'C'
                    |(z >= 2500) && (z<3500) = 'D'
                    |otherwise = 'E'

--3.3 Escreva funções que permitam realizar ações que normalmente ocorrem no restaurante.
--(a) Adiciona produtos ao pedido que está sendo registrado pelo atendente, informando o código do produto e a quantidade. A função assume por
--simplicidade que o código do produto existe no cardápio do restaurante e que o atendente não comete erros. Caso o código já exista na lista de pedidos do
--cliente a quantidade deverá ser incrementada para atender à nova solicitação. O nome do produto deve ser buscado no cardápio do restaurante pelo código do produto digitado pelo atendente.

pedidoCliente :: PedidoCliente
pedidoCliente = [(2, "Coca-cola", 3)]

pedidoCliente2 :: PedidoCliente
pedidoCliente2 = [(15, "Agua", 2), (2, "Coca-cola", 3), (40, "Batata-frita", 1)]


adicionaProdPedido :: PedidoCliente -> Menu -> CodProd -> Quant -> PedidoCliente
adicionaProdPedido xs xy c q 
    |verificaIgual == [] = xs ++ [(c,y,q) | (x,y,z) <- xy, c==x]
    |otherwise = [(x,y,z) | (x,y,z) <- xs, x/=c] ++ [(c, y, z+q) | (x,y,z) <- xs, c==x]
    where verificaIgual = [f | (f, g, h) <- xs, f == c]


--(b) Cancela um produto já solicitado pelo cliente, informando o código e a quantidade do produto a ser cancelado. Por simplicidade, suponha que o código a
--ser cancelado existe na lista de pedidos do cliente. No ato do cancelamento, se a quantidade a ser cancelada for igual ou superior à quantidade já solicitada, o item
--deve ser removido da lista de pedidos do cliente. Se o cancelamento for parcial, o item permanecerá na lista, mas com a quantidade decrementada da quantidade cancelada. 

cancelaProduto :: PedidoCliente -> CodProd -> Quant -> PedidoCliente
cancelaProduto xs codigo q
 |analise == [1] = [(x,y,z)|(x,y,z) <- xs, codigo/=x] ++ [(x,y,z-q)|(x,y,z) <- xs, codigo==x]
 |otherwise = [(x,y,z)|(x,y,z) <- xs, codigo/=x]
     where analise = [1 | (c,y,z) <- xs, q >= z]

--(c) Adiciona um pedido de um cliente na lista global de pedidos do restaurante quando a conta é paga. O pedido será adicionado no final da lista vigente e o código do pedido será o código do cliente.

pedidos1 :: Pedidos
pedidos1 = []
pedidos2 :: Pedidos
pedidos2 = [(1,[(15,"Agua",2)]), (2,[(40,"Batata-frita",3),(2,"Coca-cola",2)])]

adicionaPedido :: Pedidos -> PedidoCliente -> CodCliente -> Pedidos
adicionaPedido [(x,y)] xs c
                   | xs == [] = [(x,y)]
                   |otherwise = [(x,y)] ++ [(c,xs)]

--(d) Gera lista completa do pedido, que será usada para a impressão da conta quando esta for finalizada. Os preços de cada produto são coletados do cardápio,
--usando o código do produto para fazer a coleta. O preço gerado na lista de saída já é o preço do item totalizado, ou seja, o preço unitário multiplicado pela quantidade.
type Preco = Int
type ProdTotalizado = (CodProd, NomeProd, Quant, Preco)
type PedidoTotalizado = [ProdTotalizado]


geraPedidoImpressao :: PedidoCliente -> Menu -> PedidoTotalizado
geraPedidoImpressao xs xy = [(a,b,c,valor a c) | (a,b,c)<-xs]
 where 
       valor a c = (last [z | (x,y,z)<-xy, x==a])*c

--(e) Gera o total da conta a partir do pedido do cliente totalizado, após aplicar a função do item 3.3 (d). Esta função soma os preços totais de cada produto
--solicitado e aplica o desconto por categoria de cliente, gerando o preço final. O valor do desconto será também representado por um inteiro, assim como o preço
--final. Para tal o atendente pergunta ao cliente seu código e informa ao sistema. O resultado desta função também será usado para atualizar o consumo anual do cliente pela função do item 3.2 (d).

pedidoTotal :: PedidoTotalizado
pedidoTotal = [(15,"Agua",2,800), (40,"Batata-frita",3,2550)]

desconto :: CategCliente -> Preco -> Desconto
desconto x y
 |(x=='A') = 0
 |(x=='B') = floor ((fromIntegral y)/100)*3
 |(x=='C') = floor ((fromIntegral y)/100)*5
 |(x=='D') = floor ((fromIntegral y)/100)*10
 |(x=='E') = floor ((fromIntegral y)/100)*15

type Desconto = Int
type PrecoFinal = Int
type Totalizacao = (Preco,Desconto,PrecoFinal)
totalPedido :: Clientes -> CodCliente -> PedidoTotalizado -> Totalizacao
totalPedido clientes codCliente pedidoTotalizado = (preco,desconto categ preco,(preco - (desconto categ preco)))
 where
    preco = sum [z | (w,x,y,z) <- pedidoTotalizado]
    categ = head [c | (a,b,c,d) <- clientes, a==codCliente]

--(f) Entrega de pedido. O cliente informa seu código ao atendente da coleta. O pedido é entregue e confirmado. Ao confirmar a entrega, o sistema remove o
--pedido entregue da lista de pedidos do restaurante através da função abaixo.


entregaPedido :: Pedidos-> CodCliente -> Pedidos
entregaPedido xs c = [(w,y) | (w,y) <- xs, c /= w]

--3.4 Escreva funções para formatar a conta de um cliente, imprimir dados do cardápio e dos clientes.

--(a) Formata o valor unitário do produto, o valor do desconto e o valor total da conta. Dado o valor gere uma string com o valor formatado. Você deve colocar
--duas casas decimais e justificar o valor à direita. O total previsto para o valor são 8 caracteres. Caso o valor não ocupe os 8 caracteres você deve preencher com ‘.’.
--Para simplificar suponha que jamais o valor inteiro excederá 7 dígitos, o que é razoável para os valores de um restaurante fast-food.


formataValor :: Int -> String
formataValor valor 
 | length convertStr == 1 = (replicate (8 - (length("0.0"++convertStr))) '.')++("0.0"++convertStr)
 | length convertStr == 2 = (replicate (8 - (length("0."++convertStr))) '.')++("0."++convertStr)
 | (mod valor 100) == 0 = (replicate (7 - (length((show(div valor 100))++"."++(show(mod valor 100))))) '.')++(show(div valor 100))++".0"++(show(mod valor 100))
 | otherwise =  (replicate (8 - (length((show(div valor 100))++"."++(show(mod valor 100))))) '.')++(show(div valor 100))++"."++(show(mod valor 100))
 where convertStr = (show valor)


--(b) Formata uma linha da conta, que possui quatro informações: código do produto, quantidade do produto, nome do produto e preço totalizado. Entre as três
--primeiras informações deve ser reservado 2 espaços em branco. O código do produto deve usar no máximo 4 caracteres e ser justificado à direita, usando
--brancos para o preenchimento de caracteres à esquerda não utilizados, se for o caso. A quantidade deve usar no máximo 3 caracteres e vir justificada à direita,
--deixando brancos precedendo o dígito se for o caso. O nome do produto deve usar no máximo 25 caracteres e justificado à esquerda, usando ‘.’ à direita caso o
--nome seja menor que 25 caracteres. O preço deve ser formatado usando a função do item 3.4.(a). No final da linha deve ser adicionado ‘\n’ para permitir pular de
--linha quando a conta for emitida.

formataLinha :: ProdTotalizado -> String
formataLinha (codigo,nome,quant,preco) = "  " ++ replicarCod ++ (show codigo) ++ "  " ++ replicarQuant ++ (show quant) ++ "  " ++ nome ++ replicarNome ++ (formataValor preco) ++ "\n"
 where
    replicarCod = (replicate (4 - length (show codigo)) ' ')
    replicarQuant = (replicate (3 - length (show quant)) ' ')
    replicarNome = (replicate (25 - length nome) '.')

--(c) Formata todas as linhas de uma conta usando a função do item 3.4 (b). O efeito desta função é juntar as linhas correspondentes a todos os produtos solicitados por um cliente.

formataLinhas :: PedidoTotalizado -> String
formataLinhas xs = concat [formataLinha (codigo,nome,quant,preco) | (codigo,nome,quant,preco) <- xs]

--(d) Formata o total da conta, usando o resultado da função 3.3 (e). Os nomes Total, Desconto e A pagar devem vir alinhados com os nomes dos
--produtos, deixando uma linha em branco entre eles e os produtos.

totalizacao :: Totalizacao
totalizacao = (500,150,350)

formataTotal:: Totalizacao-> String
formataTotal (x,y,z) = "\n           Total...................."++formataValor x++"\n           Desconto................."++formataValor y++"\n           A Pagar.................."++formataValor z ++ "\n"


--(e) Gera conta. Usa várias funções anteriores e putStr para gerar a conta formatada. O símbolo – simboliza espaço em branco.

geraConta :: CodCliente -> Clientes-> Menu -> PedidoCliente -> IO ()
geraConta codigo xs xy xz = putStr ("PEDIDO " ++ (show codigo)++ "\n" ++ "\n" ++ "COD   QTD  PRODUTO                     PRECO"++"\n"++"\n" ++ formataLinhas pedidoTotal ++"\n"++ formataTotal totalizacao)
 where pedidoTotal = geraPedidoImpressao xz xy
       totalizacao = totalPedido xs codigo pedidoTotal


--(f) Lista os produtos do cardápio, obedecendo ao formato do exemplo abaixo onde o símbolo – simboliza um espaço em branco. Cada linha da lista inclui o
--código do produto, o nome do produto e o preço formatado. O código deve usar no máximo 4 caracteres e ser justificado à direita. O nome do produto deve vir
--depois de 2 espaços em branco e ter no máximo 25 caracteres, justificado à esquerda. Os caracteres faltantes devem ser preenchidos com ‘.’. O preço deve
--obedecer à formatação pedida no item 3.4 (a). É aconselhável fazer funções auxiliares de formatação de linha como no caso da formatação de conta dos itens anteriores.

auxListaCardapio :: Produto -> String
auxListaCardapio (codigo,nome,preco) = replicarCod ++ (show codigo) ++ "  " ++ nome ++ replicarNome ++ formataValor (preco) ++ "\n"
 where replicarCod = replicate(4 - (length (show codigo))) ' '
       replicarNome = replicate (25 - (length nome)) '.'

listaCardapio :: Menu -> IO ()
listaCardapio cardapio = putStr ( concat [auxListaCardapio (x,y,z) | (x,y,z) <- cardapio])


--(g) Lista os códigos e nomes de clientes de uma dada categoria. A formatação da listagem deve obedecer a: seis caracteres para o código
--justificado à direita, 5 caracteres em branco e 50 caracteres para o nome do cliente, justificado à esquerda. Cada cliente deve vir em uma linha. A categoria
--deve constar do cabeçalho da listagem como no exemplo abaixo. O símbolo – não deve aparecer; foi introduzido no exemplo para sinalizar o espaço em branco requerido.

auxCliente :: (CodCliente,NomeCliente) -> String
auxCliente (w,x) = replicate(6 - (length (show w))) ' ' ++ show w ++ "     " ++ x ++ replicate(50 - (length x)) ' ' ++ "\n"


type Categoria = Char
listaClientesCat :: Clientes -> Categoria -> IO()
listaClientesCat clientes categoria
 | [(w,x) | (w,x,y,z) <- clientes, categoria==y] /= [] = putStr("CLIENTES"++ "\n" ++ "\n" ++ "CATEGORIA" ++ (show categoria) ++ "\n" ++ "\n" ++ concat[auxCliente (w,x) | (w,x,y,z) <- clientes, categoria==y] ++ "\n")
 | otherwise = putStr("CLIENTES"++ "\n" ++ "\n" ++ "CATEGORIA" ++ (show categoria) ++ "\n" ++ "\n" ++ "Nao ha clientes para a categoria" ++ (show categoria) ++ "\n" ++ "\n")


--(h) Lista os códigos e nomes de todos os clientes, separados por categoria. A formatação segue o item (f).

{-listaClientes :: Clientes -> IO()
listaClientes clientes = putStr ("CLIENTES"++"\n"++"\n"++(listaClientesCatB clientes 'A') ++ (listaClientesCatB clientes 'B') ++ (listaClientesCatB clientes 'C') ++ (listaClientesCatB clientes 'D') ++ (listaClientesCatB clientes 'E'))
 where listaClientesCatB :: Clientes -> Categoria -> IO()
listaClientesCatB clientes categoria
 | [(w,x) | (w,x,y,z) <- clientes, categoria==y] /= [] = putStr("CLIENTES"++ "\n" ++ "\n" ++ "CATEGORIA" ++ (show categoria) ++ "\n" ++ "\n" ++ concat[auxCliente (w,x) | (w,x,y,z) <- clientes, categoria==y] ++ "\n")
 | otherwise = putStr("CLIENTES"++ "\n" ++ "\n" ++ "CATEGORIA" ++ (show categoria) ++ "\n" ++ "\n" ++ "Nao ha clientes para a categoria" ++ (show categoria) ++ "\n" ++ "\n")
-}