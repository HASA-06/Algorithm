function primeFactors(n) {
    // 시간복잡도로 sqrt(n)을 가지는 소인수분해 함수
    while(n % 2 == 0) {
        console.log(2);
        n /= 2;
    }

    for(var i = 3; i * i <= n; i += 2) {
        while(n % i == 0) {
            console.log(i);
            n /= i;
        }
    }

    if(n > 2) {
        console.log(n);
    }
}

primeFactors(10);