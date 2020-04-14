function inser() {
    let world = prompt('Ввести слово из 6 букв');
    if (world.length != 6) {
        console.log('Не равно 6!!!');
    } else {
        return (world);
    }
}
let enotherIns = inser();
console.log(enotherIns);

//console.log(letter);