const userName = window.localStorage.getItem('currentUser');
var expenses = JSON.parse(window.localStorage.getItem(userName)) || {
    taxi: null,
    food: null,
    clothes: null
};

function calculateTotalExpenses(expenses) {
    const totalExpenses = Object.values(expenses).reduce((total, expense) => {
        return total + (expense || 0);
    }, 0);
    return totalExpenses;
}

const expense= { 
sum:money ,
type: typeofexpense,
date: document.getElementById('expenses_date').value

}
function details() {
    let typeofexpense = document.getElementById("typeofexpeneses").value;
    var money = Number(document.getElementById("SumExpenses").value);
    
    if (typeofexpense === "taxi") {
        expenses.taxi = (expenses.taxi || 0) + money;
    } else if (typeofexpense === "food") {
        expenses.food = (expenses.food || 0) + money;
    } else {
        expenses.clothes = (expenses.clothes || 0) + money;  
    }
    
    console.log(expenses);
    
    var jsonobj = JSON.stringify(expenses);
    window.localStorage.setItem(userName, jsonobj);
    
    const totalExpenses = calculateTotalExpenses(expenses);
    console.log("Total Expenses:", totalExpenses);
}
