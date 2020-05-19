let start = document.querySelector('#start'),
    budget = document.querySelector('.budget-value'),
    rightPart = ['.budget-value', '.daybudget-value', '.level-value', '.expenses-value', '.income-value', '.monthsavings-value', '.yearsavings-value'],
    rightPartValue = ['budget', 'daybudget','level', 'expenses', 'incom', 'monthsavings', 'yearsavings'],
    input = document.querySelectorAll('.expenses-item'),
    approve = document.querySelectorAll('button'),
    optionalex = document.querySelectorAll('.optionalexpenses-btn'),
    choosIncome = document.querySelector('.choose-income'),
    checksavings = document.querySelector('.checksavings');

    

// for (let i = 0; i < rightPart.length; i++) {
//     rightPartValue[i] = document.querySelector(rightPart[i]);
//     //console.log(rightPartValue[i]);
// }
 
function abc(nameValue, name) {
    for (let i = 0; i < name.length; i++) {
        name[i] = document.querySelector(nameValue[i]);
        //console.log(name[i]);
    }
}
abc(rightPart, rightPartValue);
//rightPartValue[0].innerHTML = 'Good!';

console.log(approve[0], approve[1], approve[2]);








