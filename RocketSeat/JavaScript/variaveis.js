// Declaração agrupada
  let name = "Erick", age = 22;
  //or
  let lastName, gender
  lastName = "Oliveira"
  gender = "masculino"

//Concatenação
  console.log("Erick Oliveira tem 22 anos e é do sexo masculino.");
  console.log(name , lastName + " tem " + age + " anos e é do sexo " + gender + ".");

//Interpolação usando template string
  console.log(`${name} ${lastName} tem ${age} anos e é do sexo ${gender}.`);