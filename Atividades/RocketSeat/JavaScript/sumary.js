console.log("Hello World");
//Comentario em linha
/*Comentario
  multilinha*/
// Tipos de dados:
//Strings
  console.log("string normal");
  console.log('string normal');
  console.log(`String 
              "Multilinha" que permite expressões como ${1+1}`);

//Numbers
  console.log("Int:" , 10 +  10);
  console.log("Float:" , (1.3 + 1.2));
  console.log("NaN:" , 2/"coisa");
  console.log("Infinity:" , (1/0));

//Boolean
  console.log("true:" , "abc" == "abc");
  console.log("false:" , 1+1 == 3);

//Undefined
  console.log(undefined);

//null
  console.log(null); //Objeto que não possui nada dentro

//Object
  //Possui atributos e métodos
  console.log({
    name: "Erick",
    idade: 22,
    respirar: function(){
      console.log(respirou)
    }
  });

//Array
  console.log([1,"erick",true]);

//Variaveis
  
  var tempo = "Frio";
  tempo = "Quente";
  console.log(tempo);

  let clima = "Chuvoso";
  clima = "Ameno";
  console.log(clima);

  const pi = 3.14; // Não pode ser alterado
  console.log(pi);

//Scope
{//Criação de um block statement
  var teste = 1234;

  let teste2 = 1234;

  const teste3 = 1234;
}
  let teste2 = 4321;
  const teste3 = 4321;

  console.log(teste + 1); //O var pode ser usado fora do escopo de criação, ou seja, é global. Evitamos utilizar o var.

  console.log(teste2 + 2); //Não funciona, pois o let é limitado ao próprio escopo. Ao inves disso, irá buscar a variável fora do escopo.

  console.log(teste3 + 3); //Tambem não funciona pelo mesmo motivo e irá acontecer a mesma coisa.

  /*nomeação de variaveis:
    Case sensitive
    Usa a cadeia Unicode
    Posso:
      - Iniciar com esses caracteres especiais: $ _
      - Iniciar com letras
      - Colocar acentos
    Não posso:
      - Iniciar com numeros
      - Colocar espaços vazios no nome
    Ideal:
      - Criar nomes que fazem sentido
      - Que expliquem o que a variável é ou faz
      - Escrever em inglês
      - camelCase: Ex: checkIfNameExist
      - snake_case: Ex: chek_if_name_exist
    */