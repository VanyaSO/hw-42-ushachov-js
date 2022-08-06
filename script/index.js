// Task #1
// Реализовать рекурсивную функцию которая находит факториал переданного в нее числа
// getFactorial(3) // в данном случае должна вернуть факториал числа 3! = 3 * 2 * 1

function getFactorial(num){

    if(num === 0 || num === 1){
        return 1;
    }

    return num * getFactorial(num - 1);
}

console.log('Task #1');
console.log(getFactorial(3));


// Task #2
// Реализовать рекурсивную функцию которая находит возводит число в степень.
// Число которое нужно возвести в степень передается как первый аргумент в функцию
// Степень передается как второй аргумент в функцию pow(num, degree)

function pow(num, degree){

    if(degree === 1){
        return num;
    }

    return num * pow(num, degree - 1);
}

console.log('Task #2');
console.log(pow(3,5));

// Task #3
// Рекурсивное суммирование
// Задача: напишите рекурсивную функцию для вычисления суммы заданных положительных целых чисел a и b
// без прямого использования оператора +.

function sum(a, b){

    if(a === 0){
        return b;
    }

    return sum(a - 1,b + 1);

}

console.log('Task #3');
console.log(sum(3,5));