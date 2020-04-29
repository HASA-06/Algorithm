// var, 함수는 호이스팅으로 인해 함수의 최 상단내에 존재하게된다
// 호이스팅이란 함수, var변수의 선언을 상위 함수 내의 상단으로 끌어올리는 것으로, var변수의 값 자체까지 상단으로 끌어올려주지는 않는다.
// 실제 메모리에는 영향을 미치지 않지만, 추세가 let을 주로 쓰는 추세로 호이스팅을 배제하는 추세이다.

function main() {
    console.log(variable1);
    // [Error] 호이스팅이 있더라도 variable1이 main함수 내에 없기에 출력 불가하며 에러메세지가 발생한다.

    function innerFunction() {
        // 호이스팅으로 인해 Hello 출력 가능, 단 값 자체는 끌어올려주지 않으므로 미리 값을 할당해 주었다.
        variable1 = 'Hello';
        console.log(variable1);

        //변수 선언부(호이스팅)
        var variable1;
    }

    innerFunction();
}

main();

function main2() {
    // 호이스팅이 먹히지 않는 let변수

    function innerFunction() {
        variable1 = 'Hello';
        console.log(variable1);

        let variable1;
        // [Error] 호이스팅이 되지 않기에 에러 메세지로 Cannot access 'variable1' before initialization이 보인다.
    }

    innerFunction();
}

main2();



function main3() {

    if(true) {
        let innerVariable = 'Hello';
        console.log(innerVariable);
    }

    console.log(innerVariable);
    // [Error] Block-scope를 가지는 let변수의 특성상 이 부분의 innerVariable은 선언도, 할당도 되지 않은 변수 상태이기 때문에 에러메세지가 발생한다.
}

main3();