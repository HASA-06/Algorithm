function test() {
    array1 = [1, 2, 3, 4, 5];

    // 배열 합치기 1 : 인자로서 각각을 바로 넣을 수 있다. 개발시에 유용
    console.log(addAllFunction(...array1));

    // 배열을 join함수 내의 파라미터를 사용해 합친다. 알고리즘시에 유용
    console.log(addAllFunction(array1.join('')));
}

function addAllFunction(a, b, c, d, e) {
    return a + b + c + d + e;
}

test();