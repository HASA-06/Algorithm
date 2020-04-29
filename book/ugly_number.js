/*
    2, 3, 5를 인수로 갖는 숫자들만 구하는 함수이다. 2, 3, 5만 인수로 갖는 숫자들을 ugly number라 칭했다.
*/

function maxDivide(number, divisor) {
    // 시간복잡도 log(divisor)number이다.
    while(number % divisor == 0) {
        number /= divisor;
    }

    return number;
}

function isUgly(number) {
    // 시간복잡도 log(2)number로 maxDivide와 같다.
    number = maxDivide(number, 2);
    number = maxDivide(number, 3);
    number = maxDivide(number, 5);
    return number === 1;
}

function arrayUglyNumbers(n) {
    // 시간복잡도 n * log(2)n, isUgly에 n을 곱해준 값과 같다.
    var counter = 0, currentNumber = 1, uglyNumbers = [];

    while(counter != n) {
        if(isUgly(currentNumber)) {
            counter++;
            uglyNumbers.push(currentNumber);
        }

        currentNumber++;
    }

    return uglyNumbers;
}

console.log(arrayUglyNumbers(100));