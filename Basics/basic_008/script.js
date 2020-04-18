function learnJS(leng, callback){
    console.log('Я учу ' + leng);
    callback();    
}
learnJS('JavaScript', function(){
    console.log('Я прошёл 3-й урок');    
});

//

function learnJS(leng, callback){
    console.log('Я учу ' + leng);
    callback();    
}

function done(){
    console.log('Я прошёл 3-й урок');
}
learnJS('JavaScript',done);

