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
        let i = 0;
    }

}

alert(appData.budget / 30);