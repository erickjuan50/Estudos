Preciso fazer um projeto de programação, o qual ainda não tenho noção de como fazer e nem do que fazer para chegar ao resultado final. Primeiramente, preciso que me diga o passo a passo do que preciso fazer, supondo que isso é para uma empresa grande e que necessita de todos os documentos em relação a levantamento de requisitos e coisas do tipo (que eu não tenho muita noção). Ainda não decidi a Stack. Preciso de toda ajuda possível.




Projeto: Banco de oportunidades.
O projeto consiste em desenvolver uma aplicação que irá permitir o cadastro de empresas e ex-alunos do SENAC, onde as empresas irão cadastrar vagas de emprego e os ex-alunos poderão se inscrever nelas.
Abaixo, citarei os requisitos gerais da aplicação:
- A aplicação deve permitir apenas o cadastro de ex-alunos e empresas com cnpj válidos
- A aplicação deverá ter um portal do aluno
- A aplicação deverá ter um portal da empresa
- A aplicação deverá ter um portal do administrador do sistema
- A aplicação deverá contar com a opção de feedback tanto do aluno contratado como da empresa que contratou em relação ao aluno
- A aplicação deverá disponibilizar relatórios periódicos para fins de auditoria

Esses dados passados acima não estão completos e podem ser adicionados mais requisitos a qualquer momento (quando eu lembrar ou perceber que precisa).


Uma empresa que possua cnpj valido irá cadastrar uma vaga de emprego. Essa vaga irá conter informações de filtro que vão direcionar a vaga aos alunos certos, que seriam: o curso o qual o aluno foi aprovado (ex: Garçom, Corte e costura...), o grau de escolaridade do aluno (ensino médio, superior...), idade e se é PCD ou não.
Os alunos que se cadastrarem na plataforma terão acesso a uma página de vagas, pagina essa que irá mostrar apenas os vagas destinados ao(s) curso(s) em que ela foi aprovada. O aluno poderá se inscrever nessa vaga e a empresa poderá entrar em contato com todos os alunos que se inscreveram nela. A empresa após um determinado tempo, deverá entregar um relatório de feedback em relação ao aluno (o aluno tambem fará um relatório de feedback da empresa), relatório esse que, caso não seja entregue no tempo máximo definido, a empresa não poderá mais cadastrar vagas até que responda o questionário de feedback.
Para o aluno se cadastrar, ele deverá entrar com seu CPF, um email e uma senha. A aplicação irá consultar em nosso banco de dados utilizando o CPF do aluno e irá completar o cadastro automaticamente do aluno, utilizando os dados do nosso banco (tais quais como nome completo, data de nascimento...). Assim como o cadastro, após a consulta, será gerado um curriculo base com os dados básicos do aluno, o qual poderá ser editado no perfil do aluno e poderão ser adicionadas informações e descrições manualmente pelo aluno. Nosso banco de dados funciona no formado d-1.
O portal do aluno mostra em quais as vagas que o aluno está inscrito e deve conter a opção de cancelar a inscrição na vaga.
O portal da empresa deverá ter a opção ver as vagas que estão abertas por elas e deverá ter a opção de encerrar uma vaga quando necessário. Deverá tambem ter uma página da vaga especifica que mostrarará um catálogo com todos os alunos que se inscreveram nessa vaga.
O administrador funcionará como uma especie de auditor e portará poderes de superadmin.
Deverá existir um log de usuário para cada tipo de usuario (aluno, empresa e admin) para cunho de auditoria.
A aplicação deverá estar em conformidade com a LGPD e deverá contar com segurança a nivel exigido para cada sensibilidade da LGPD.