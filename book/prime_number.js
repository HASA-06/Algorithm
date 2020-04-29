function isPrime(n) {
    // 시간복잡도로 n을 가지는 isPrime 함수
    if(n <= 1) return false;

    for(var i = 2; i < n; i++) {
        if(n % i == 0) return false;
    }

    return true;
}

function isPrimeExpert(n) {
    // 시간복잡도로 sqrt(n)을 가지는 개선된 isPrime 함수
    if(n <= 1) return false;
    if(n <= 3) return true;

    if(n % 2 == 0 || n % 3 == 0) return false;

    for(var i = 5; i * i <= n; i += 6) {
        if((n % i == 0) || (n % (i + 2) == 0)) return false;
    }

    return true;
}

function getPrimeNumbers(n) {
    for(var i = 2; i <= n; i++) {
        if(isPrimeExpert(i)) console.log(i);
    }
}

getPrimeNumbers(100);