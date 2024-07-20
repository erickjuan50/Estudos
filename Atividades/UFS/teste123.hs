data Temperatura = Frio | Ambiente | Quente deriving (Show)

teste3 :: Float -> Temperatura
teste3 x
    |x>25.0 = Quente
    |x<20.0 = Frio
    |otherwise = Ambiente