'use strict';
let money = +prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате YYYY-MM-DD'),
    appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    };

for (let i = 0; i < 2; i++) {
    let a = prompt('Статья обязательных расходов.', ''),
        b = +prompt('Во сколько обойдётся?', '');
    if ((typeof (a)) === 'string' && (typeof (a)) != null && typeof (b) != null && a != '' && b != '' && a.length < 15) {
        console.log('done');
        appData.expenses[a] = b;
    } else {
        i = i - 1;
    }
}

appData.moneyPerDay = (appData.budget / 30);
if(appData.moneyPerDay < 1000){
    alert('Ваш доход мал.');
} else if (appData.moneyPerDay > 5000){
    alert('У вас хороший доход!');
} else if(appData.moneyPerDay >= 1000 && appData.moneyPerDay <= 5000) {
    alert('У вас средний доход');
} else {
    alert('Произошла ошибка!!!')
}     
console.log(appData);