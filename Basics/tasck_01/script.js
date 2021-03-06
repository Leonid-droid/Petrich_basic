'use strict';

let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpensive: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Статья обязательных расходов.', ''),
                b = +prompt('Во сколько обойдётся?', '');
            if ((typeof (a)) === 'string' && (typeof (a)) != null && typeof (b) != null && a != '' && b != '' && a.length < 15) {
                console.log('done chooseExpensive');
                appData.expenses[a] = b;
            } else {
                i = i - 1;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert('Ваш ежедневный бюджет: ' + appData.moneyPerDay);
        if (appData.moneyPerDay < 1000) {
            alert('Ваш доход мал.');
        } else if (appData.moneyPerDay > 5000) {
            alert('У вас хороший доход!');
        } else if (appData.moneyPerDay >= 1000 && appData.moneyPerDay <= 5000) {
            alert('У вас средний доход');
        } else {
            alert('Произошла ошибка!!!')
        }
    },
    checkSaving: function () {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?'),
                percent = +prompt('Какой процент?');
            appData.monthImcom = (save / 100 / 12 * percent).toFixed(2);
            alert('Ваш доход в месяц с депозита: ' + appData.monthImcom);
        }
    },
    chooseIncome: function () {
        let item = prompt('Что принесёт дополлнительный доход? (Перечисли через запятую.', '');
        if (typeof (item) === 'string' || typeof (item) !== null || item != '') {
            appData.income = item.split(', ');
            appData.income.push(prompt('Может что-то ещё?'));
            appData.income.sort();
        } else {
            let item = prompt('Введите корректную строку. Что принесёт дополлнительный доход? (Перечисли через запятую.', '');
        }
    }
};
console.log(appData);