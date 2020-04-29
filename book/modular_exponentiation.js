function modular(base, exponent, modulus) {
    // 숫자의 범위가 큰 지수를 다룰 수 없기에 옳은 풀이법이 아님
    return Math.pow(base, exponent) % modulus;
}

function modularExponentiation(base, exponent, modulus) {
    // 시간복잡도 n을 가진다
    // (base ^ exponnet) % modulus 에서 exponent가 결국 base를 곱하는 횟수(지수)임을 이용해 for문으로 교체하고, 중간중간에 계산되는 값(value)의 최대 크기를 최소화 시킨다.
    if(modulus == 1) return 0;

    var value = 1;

    for(var i = 0; i < exponent; i++) {
        value = (value * base) % modulus;
    }

    return value;
}