const Express = require ('express')


const app = Express();


var filmes = ["piloto de taxi", "o irlandes" ]
app.use(Express.urlencoded({ extended: true}));
app.post('/films/', (req, res) => {
    let name = req.body.name;
    filmes[(filmes.length)] = name;
    return res.json([filmes[(filmes.length -1 )]]);
})

app.put('/films/update/:id', (req, res) => {
    let name = req.body.name;
    filmes[req.params.id] = name;
    return res.json(filmes[req.params.id]);
})

app.delete('/films/delete/:id', (req, res) => {
    let id = req.params.id;
    filmes[id] = null;
    return res.json(filmes[id]);

})

app.get('/', (req, res) =>
    res.send("<h3>Rotas no expresso hahay</h3><p>Rota '/'")
)

app.get('/sobre', (req, res) =>
    res.send("<h3>SOBRE SOBRESOBRE SOBRESOBRE SOBRESOBRE SOBRE</h3><p>Rota ABOUT HAHAY GRENGO '/'")
)

app.get('/films/:id', (req, res) => {
    let id = req.params.id;
    return res.json([filmes[id]])
})

app.listen(3000, () =>
    console.log("servidor do MINE ON ")
)