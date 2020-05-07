function encoder(string) {
    // btoa() 함수는 지원되지 않으므로 Buffer()객체 사용
    return Buffer.from(string, 'binary').toString('base64');
};

function decoder(string) {
    return Buffer.from(string, 'base64').toString('binary');
};

function test(string) {
    console.log('Input string is : ', string);

     let encodedString = encoder(string);

     console.log('Encoded string is : ', encodedString);

     let decodedString = decoder(encodedString);

     console.log('Decoded string is : ', decodedString);

    return;
}

test('Hello, Javascript!');