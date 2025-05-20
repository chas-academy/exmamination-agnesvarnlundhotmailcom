
const desc = document.getElementById("desc")
const amount = document.getElementById("amount")
const incomeBtn = document.getElementById("incomeBtn")
const expenseBtn = document.getElementById("expenseBtn")
const incomeList = document.getElementById("incomeList")
const expenseList = document.getElementById("expenseList")
const balance = document.getElementById("balance")
 
let income = []
let expenses = []

function addTransaction(type) {
  
const text = desc.value
const money = amount.value

if (text === "" || money === "") {
return
}

const transaction = {
    description: text,
    amount: Number(money),
    type: type,
  }

  if (type === "income") {
    income.push(transaction)
    showIncome()
  } else if (type === "expense") {
    expenses.push(transaction)
    showExpenses()
  }

  desc.value = ""
  amount.value = ""

  updateBalance()
}

function showIncome() {

incomeList.innerHTML = ""
income.forEach((item) => {
      const li = document.createElement("li")
      li.textContent = `${item.description} + ${item.amount} kr`
      incomeList.appendChild(li)
    })
  }

function showExpenses() {
    expenseList.innerHTML = ""
    expenses.forEach((item) => {
      const li = document.createElement("li")
      li.textContent = `${item.description} - ${item.amount} kr`
      expenseList.appendChild(li)
    })
  }

function updateBalance() {
  let totalIncome = 0
  let totalExpenses = 0

  income.forEach((item) => {
    totalIncome += item.amount
  })

  expenses.forEach((item) => {
    totalExpenses += item.amount
  })

  const saldo = totalIncome - totalExpenses
  balance.textContent = saldo + " kr"
}

incomeBtn.addEventListener("click", () => {
  addTransaction("income")
})

expenseBtn.addEventListener("click", () => {
  addTransaction("expense")
})