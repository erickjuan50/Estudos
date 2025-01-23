# Exemplo de Utilização da API

Este documento descreve como utilizar as rotas da API para **GET**, **POST**, **PUT** e **DELETE**. Abaixo estão exemplos de chamadas que podem ser feitas usando ferramentas como o Postman ou cURL.

---

## **1. Adicionar um Filme (POST)**

### **Endpoint**
```
POST http://localhost:3000/films/
```

### **Body**
Envie os dados no formato **x-www-form-urlencoded**:
```
Key: name
Value: Nome do Filme (exemplo: Matrix)
```

### **Exemplo de Resposta**
```json
[
    "Matrix"
]
```

---

## **2. Atualizar um Filme (PUT)**

### **Endpoint**
```
PUT http://localhost:3000/films/update/:id
```
Substitua `:id` pelo índice do filme que você deseja atualizar. Por exemplo:
```
PUT http://localhost:3000/films/update/0
```

### **Body**
Envie os dados no formato **x-www-form-urlencoded**:
```
Key: name
Value: Novo Nome do Filme (exemplo: Inception)
```

### **Exemplo de Resposta**
```json
"Inception"
```

---

## **3. Deletar um Filme (DELETE)**

### **Endpoint**
```
DELETE http://localhost:3000/films/delete/:id
```
Substitua `:id` pelo índice do filme que você deseja deletar. Por exemplo:
```
DELETE http://localhost:3000/films/delete/0
```

### **Exemplo de Resposta**
```json
null
```

---

## **4. Buscar um Filme por ID (GET)**

### **Endpoint**
```
GET http://localhost:3000/films/:id
```
Substitua `:id` pelo índice do filme que você deseja buscar. Por exemplo:
```
GET http://localhost:3000/films/0
```

### **Exemplo de Resposta**
```json
[
    "piloto de taxi"
]
```

---

## **5. Página Inicial (GET)**

### **Endpoint**
```
GET http://localhost:3000/
```

### **Exemplo de Resposta**
```html
<h3>Rotas no expresso hahay</h3>
<p>Rota '/'</p>
```

---

## **6. Página Sobre (GET)**

### **Endpoint**
```
GET http://localhost:3000/sobre
```

### **Exemplo de Resposta**
```html
<h3>SOBRE SOBRESOBRE SOBRESOBRE SOBRESOBRE SOBRE</h3>
<p>Rota ABOUT HAHAY GRENGO '/'</p>