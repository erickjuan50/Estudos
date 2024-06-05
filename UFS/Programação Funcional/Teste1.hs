-- Atividade 1
--Questão 1 - Fornecidos três Valores, a, b e c, escreva uma função que retorne quantos dos três são iguais. A resposta pode ser 3, 2 ou 0.
quantIguais :: Int -> Int -> Int -> Int
quantIguais x y z
 |x == y == z = 3
 |x == y = 2
 |x == z = 2
 |y == z = 2
 |otherwise = 0