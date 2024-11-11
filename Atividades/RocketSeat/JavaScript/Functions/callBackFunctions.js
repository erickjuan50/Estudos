//Callback Function - Função passada como argumento para outra função.

function execute(taskname, callback){
    console.log("executando: ", taskname);

    callback()
}

function callback(){
    console.log("Tarefa finalizada")
}

execute("Teste A|B", callback)

execute("Instalação do Windows", function(){
    console.log("Finalizada com sucesso!")
})


execute("Excluindo arquivo", () => {
    console.log("Arquivo excluído")
})