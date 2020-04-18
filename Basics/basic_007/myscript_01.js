let world = prompt('Ввести слово из 6 букв');

function inser(data){
    if (data.length != 6) {
        console.log('Не равно 6!!!');
    } else {
        return (data);
    }
}
let enotherIns = inser(world);
if(enotherIns){
   console.log(enotherIns); 
} else {
    console.log('Неdерное количество знаков!');    
}
