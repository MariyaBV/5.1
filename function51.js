console.log('---1. Функция принимает в качестве параметра строку и возвращает ее последний символ.---');
var characterString = 'Hello, World!';
function printLastCharacter(characterString){
    return characterString [characterString.length-1];
}
console.log('Последний символ строки:', printLastCharacter(characterString));

console.log('---2. Функция принимает в качестве параметра строку и возвращает ту же самую строку, но без последнего символа.---');
function printWithoutLastCharacter(characterString){
    var lineWithoutLastChar = "";
    for (var i = 0; i < characterString.length - 1; i++) {
        lineWithoutLastChar = lineWithoutLastChar + characterString[i];
    }
    return lineWithoutLastChar;
}
console.log('Строка без последнего символа:', printWithoutLastCharacter(characterString));

console.log('---2. Функция принимает в качестве параметра строку и возвращает ту же самую строку, но без последнего символа.---');
function printWithoutLastCharacter(characterString){
    lineWithoutLastChar = characterString.substring (0, characterString.length-1);
    return lineWithoutLastChar;
}
console.log('Строка без последнего символа:', printWithoutLastCharacter(characterString));

console.log('---3. Функция принимает в качестве параметра строку и возвращает зеркально отраженную. Символы в возвращаемой строке должны быть расположены в обратном порядке.---');
var characterString = "Hello, World!";
function mirrorReflection(characterString){
    var lineReverse = "";
    for (i = characterString.length-1; i >= 0; i--) {
        lineReverse = lineReverse + characterString[i];
    }
    return lineReverse;
}
console.log('Зеркальное отражение строки:', mirrorReflection(characterString));

console.log('---4. Функция принимает в качестве параметра строку и возвращает такую же строку, но без лишних пробелов.---');
var characterString = "     Hello,          World!      ";
function withoutUnnecessaryGaps(characterString){
    characterString = characterString.trim();//удаление пробелов в начале и конце строки
    characterString = characterString.split(' ');//делим строку на массив по словам
    characterString = characterString.filter(function(i){
        if ( i ) return true;
        });//удаляем пустые строки - элементы массива
    characterString = characterString.join(' ');//собираем массив ставя пробел между элементами
    return characterString;
}
console.log(withoutUnnecessaryGaps(characterString));

console.log('---4. Функция принимает в качестве параметра строку и возвращает такую же строку, но без лишних пробелов.---');
var characterString = "     Hello,          World!      ";
function withoutUnnecessaryGaps(characterString){
    characterString = characterString.replace(/\s{2,}/g, " ");//удаление лишних пробелов между словами (заменяем повторяющийся пробел > 2 на 1 пробел)
    characterString = characterString.trim();//удаление пробелов в начале и конце строки
    return characterString;
}
console.log(withoutUnnecessaryGaps(characterString));
