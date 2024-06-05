// Classe Expense para representar uma despesa
class Expense {
    constructor(description, category, amount) {
      this.description = description;
      this.category = category;
      this.amount = amount;
    }
  }
  
  // Classe ExpenseTracker para rastrear as despesas
  class ExpenseTracker {
    constructor() {
      this.expenses = [];
      this.categories = new Set();
    }
  
    // Adiciona uma nova despesa
    addExpense(expense) {
      this.expenses.push(expense);
      this.categories.add(expense.category);
    }
  
    // Calcula o total gasto
    getTotalExpenses() {
      let total = 0;
      for (let expense of this.expenses) {
        total += expense.amount;
      }
      return total;
    }
  
    // Filtra as despesas por categoria
    filterExpensesByCategory(category) {
      return this.expenses.filter(expense => expense.category === category);
    }
  
    // Calcula o total gasto por categoria
    getTotalExpensesByCategory() {
      const expensesByCategory = {};
      for (let category of this.categories) {
        const categoryExpenses = this.filterExpensesByCategory(category);
        const total = categoryExpenses.reduce((sum, expense) => sum + expense.amount, 0);
        expensesByCategory[category] = total;
      }
      return expensesByCategory;
    }
  }
  
  // Função para exibir as opções do menu
  function showMenu() {
    console.log('*** Calculadora de Despesas ***');
    console.log('1. Adicionar despesa');
    console.log('2. Calcular o total gasto');
    console.log('3. Filtrar despesas por categoria');
    console.log('4. Calcular total gasto por categoria');
    console.log('5. Sair');
  }
  
  // Função principal
  function main() {
    const tracker = new ExpenseTracker();
    let exit = false;
  
    while (!exit) {
      showMenu();
      const choice = parseInt(prompt('Digite sua escolha:'));
    
      switch (choice) {
        case 1:
          const description = prompt('Digite a descrição da despesa:');
          const category = prompt('Digite a categoria da despesa:');
          const amount = parseFloat(prompt('Digite o valor da despesa:'));
          const expense = new Expense(description, category, amount);
          tracker.addExpense(expense);
          console.log('Despesa adicionada com sucesso!');
          break;
        
        case 2:
          const total = tracker.getTotalExpenses();
          console.log('O total gasto é:', total);
          break;
        
        case 3:
          const filterCategory = prompt('Digite a categoria para filtrar:');
          const filteredExpenses = tracker.filterExpensesByCategory(filterCategory);
          console.log('Despesas filtradas por categoria:', filteredExpenses);
          break;
        
        case 4:
          const expensesByCategory = tracker.getTotalExpensesByCategory();
          console.log('Total gasto por categoria:', expensesByCategory);
          break;
        
        case 5:
          exit = true;
          console.log('Saindo...');
          break;
        
        default:
          console.log('Escolha inválida. Tente novamente.');
          break;
      }
    }
  }
  
  // Executa o programa principal
  main();
  