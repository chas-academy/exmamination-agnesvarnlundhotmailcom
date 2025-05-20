// Hämta element från HTML
const desc = document.getElementById("desc")
const amount = document.getElementById("amount")
const incomeBtn = document.getElementById("incomeBtn")
const expenseBtn = document.getElementById("expenseBtn")
const incomeList = document.getElementById("incomeList")
const expenseList = document.getElementById("expenseList")
const balance = document.getElementById("balance")
const totalIncomeEl = document.getElementById("totalIncome")
const totalExpensesEl = document.getElementById("totalExpenses")

// Listor för inkomster och utgifter
let income = []
let expenses = []

// Lägga till inkomster
function addIncome() {   
const text = desc.value
const money = amount.value

if (text === "" || money === ""){
    alert("")
    return
}

income.push(text + ": +" + money + " kr")
showIncome()

desc.value = ""
amount.value = ""
updateBalance()

}

// Lägga till utgifter
function addExpense() {    
const text = desc.value
const money = amount.value

if (text === "" || money === "") {
    alert("")
    return
}

expenses.push(text + ": -" + money + " kr")
showExpenses()

desc.value = ""
amount.value = ""
updateBalance()

}

// Visa inkomster
function showIncome() {
    incomeList.innerHTML = ""
    income.forEach((item) => {
        const li = document.createElement("li")
        li.textContent = item
        incomeList.appendChild(li)
    })
}

// Visa utgifter
function showExpenses() {
    expenseList.innerHTML = ""
    expenses.forEach((item) => {
        const li = document.createElement("li")
        li.textContent = item
        expenseList.appendChild(li)
    })
}

// Uppdatera saldot
function updateBalance() {
    let totalIncome = 0
    let totalExpenses = 0
  
    income.forEach((item) => {
      const belopp = item.split("+")[1].replace(" kr", "")
      totalIncome += Number(belopp)
    })
  
    expenses.forEach((item) => {
      const belopp = item.split("-")[1].replace(" kr", "")
      totalExpenses += Number(belopp)
    })
  
    const saldo = totalIncome - totalExpenses
  
    // Uppdatera HTML
    balance.textContent = saldo
    totalIncomeEl.textContent = totalIncome
    totalExpensesEl.textContent = totalExpenses
  }
  
// Knappar
incomeBtn.addEventListener("click", () =>{
    addIncome()
})
expenseBtn.addEventListener("click", () =>{
    addExpense()
})

