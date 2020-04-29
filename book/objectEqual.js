function isEqual1(a, b) {
    // == 연산자와 === 연산자로 java에 존재하는 isEqual메서드의 역할을 할 수 있나 보기위한 함수
    if(a == b) {
        console.log('== can catching object equal');
    }

    if(a === b) {
        console.log('=== can catching object equal');
    }

    //당연히 아무것도 잡히지 않는다
}

var a = '1';
var b = '2';

isEqual1(a, b);


function isEqual2(a, b) {
    // js내에서 객체를 비교하려면 아래와 같이 길이, 그리고 속성값 하나하나를 직접 비교해야만 한다.
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    if(aProps.length != bProps.length) return false;
    
    for(let i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        if(a[propName] !== b[propName]) return false;
    }

    return true;
}

console.log(isEqual2({'hi' : 12}, {'hi' : 12}));
// 이 경우 객체의 속성값들과 길이만을 비교했을 때 true를 반환한다.

var obj1 = {'prop1' : 'test', 'prop2' : function() {}};
var obj2 = {'prop1' : 'test', 'prop2' : function() {}};

console.log(isEqual2(obj1, obj2));
// 이 경우에는 prop2를 비교할 때 function을 연산자(!==)로 비교했으므로 당연하게도 false가 나온다.