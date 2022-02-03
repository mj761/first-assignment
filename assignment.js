console.log('Running assignment...');

const transactions = require('./simple-transaction-data').data;

// Assignment 1:
const result = transactions.filter(transaction => {
    const year = transaction.transaction_date.substring(0,4);
    return transaction.credit_card_company == 'VISA'
    && transaction.price >= 50
    && year >= 2015
});

console.log(result);

// Assignment 2:
const aboveAverageFunction = (data) => {

    let sum = 0;
    data.forEach(transaction => {
        sum += parseFloat(transaction.price);
    });

    let average = sum / data.length;
    console.log(average);

    return data.map(transaction => {
        if(transaction.price > average){
            transaction.isPriceAboveAverage = true;
            
            return transaction;
        }else{
            transaction.isPriceAboveAverage = false;
            return transaction;
        }
    
    
    })
}

console.log(aboveAverageFunction(transactions));

