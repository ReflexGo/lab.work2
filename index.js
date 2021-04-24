/*
// Задание 1
let value = prompt("Введите время: ")
let time = (value > 17) ? "добрый вечер" : "Добрый день";
alert(time);
*/

/*
// Задание 2
let value = prompt("Введите имя: ");
let checkValue = (value == "Jonh") ? "Hello Jonh" : "Idk you";
alert(checkValue);
*/

/*
//Задание 3
let log = prompt("Введите логин");
let password = prompt("Введите пароль: ");
if(log == "Ivan333" && password == "ssss666"){
    alert("Добро пожаловать!")
}else {
    alert("Пользователь не найден");
}
*/

//Задание 4
let copy = 0;
let maxValue  = 0;
let arr = [];

for(i = 0; i < 3; i++){
    arr[i] = prompt("Введите число")
}
for(i = 0; i < arr.length; i++){
    if(maxValue < arr[i]){
        maxValue = arr[i];
    }else if(arr[i] == maxValue){
        copy = arr[i];
    }
}
alert("максимальное значение : " + maxValue);
if(copy == 0){
    alert("Равных чисел нет");
}else{
    alert("Равные числа: " + copy);
}