// 소수 p, q를 가지고 p * q = n이라 한다. (p - 1)과 (q - 1)의 곱을 phi라고 표기한다.
// 지수 e와 d를 선택한다. e는 일반적으로 3이며 2보다 큰 다른값이다. d는(e * d) % phi = 1인 값이다.

/*
    암호화 과정
    m : 암호화할 메세지
    c : 암호화된 메세지
    m ^ e % n = c
*/

/*
    복호화 과정
    c ^ d % n = m
*/

// d를 계산하기 위한 함수
function modInverse(e, phi) {
    let m0 = phi, t, q;
    let x0 = 0, x1 = 1;

    if (phi == 1)
        return 0;

    while (e > 1) {
        q = Math.floor(e / phi);

        t = phi;

        phi = e % phi, e = t;

        t = x0;
        
        x0 = x1 - q * x0;

        x1 = t;
    }

    if (x1 < 0)
        x1 += m0;

    return x1;
}

// 소수를 감지하기 위한 함수, 시간복잡도 sqrt(n)
function isPrime(number) {
    if (number <= 1) 
        return false;
    if (number <= 3)
        return true;
    if(number % 2 == 0 || number % 3 == 0)
        return false;

    for(let i = 0; i * i <= number; i += 6) {
        if ((number % i) == 0 || (number % (i + 2) == 0)) return false;
    }

    return true;
}

// 공개 키와 비밀 키 쌍 생성
function RSAKeyPair(p, q) {
    if (!(isPrime(p) && isPrime(q)))
        return;

    if (p == q)
        return;
    
    let n = p * q,
        phi = (p - 1) * (q - 1),
        e = 3,
        d = modInverse(e, phi);
    
    return [[e, n], [d, n]];
}

// 계산과정에서 JS의 Number의 가능범위를 넘는 값을 방지하기위해 사용하는 함수
function modularExponentiation(base, exponent, modulus) {
    // 시간복잡도 n을 가진다
    // (base ^ exponnet) % modulus 에서 exponent가 결국 base를 곱하는 횟수(지수)임을 이용해 for문으로 교체하고, 중간중간에 계산되는 값(value)의 최대 크기를 최소화 시킨다.
    if(modulus == 1) return 0;

    let value = 1;

    for(let i = 0; i < exponent; i++) {
        value = (value * base) % modulus;
    }

    return value;
}

// 암호화
function encryption(message) {
    let rsaKey = RSAKeyPair(5, 11);

    // 지수제곱근 과정에서 JS의 Number객체에 MAX_SAFE_INTEGER를 이용해 허용가능 최대값을 넘는 경우, modularExponentation함수로 안전한 계산
    if(Math.pow(message, rsaKey[0][0]) > Number.MAX_SAFE_INTEGER)
        return modularExponentiation(message, rsaKey[0][0], rsaKey[0][1]);
    else
        return Math.pow(message, rsaKey[0][0]) % rsaKey[0][1];
}

// 복호화
function decryption(encryptedMessage) {
    let rsaKey = RSAKeyPair(5, 11);
    
    // 지수제곱근 과정에서 JS의 Number객체에 MAX_SAFE_INTEGER를 이용해 허용가능 최대값을 넘는 경우, modularExponentation함수로 안전한 계산
    if(Math.pow(encryptedMessage, rsaKey[1][0]) > Number.MAX_SAFE_INTEGER)
        return modularExponentiation(encryptedMessage, rsaKey[1][0], rsaKey[1][1]);
    else
        return Math.pow(encryptedMessage, rsaKey[1][0]) % rsaKey[1][1];
    
}

console.log('[공개 키, 비밀 키]', RSAKeyPair(5, 11));

console.log('50에 대한 암호화 : ', encryption(50));

console.log('복호화된 값 : ', decryption(encryption(50)));