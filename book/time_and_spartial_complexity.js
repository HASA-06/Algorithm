/*
    배열 내에서 임의의 두 수의 합이 원하는 값이 되야 할 경우를
    1 ) 공간복잡도를 최소화 하는 방법
    2 ) 시간복잡도를 최소화 하는 방법
    으로 풀어본다.

    * 아래에서 연산횟수(count)를 시간복잡도로, hashtable의 크기를 공간복잡도로 보면 된다.
    최악의 경우는 전부를 다 탐색했을때로 잡는다.
*/

function timeComplexcityMinimum(array, targetNumber) {
    // 복잡도 세기
    let count = 0;

    for (i of array) {
        for (j of array) {
            count++;

            if (i + j == targetNumber) {
                console.log('연산횟수 : ', count);
                console.log('답 : ', [i, j]);

                return [i, j];
            }
        }
    }
    console.log('연산횟수 : ', count);
    console.log('답 : ', -1);
    
    return -1;
}

// 일반적인 경우
timeComplexcityMinimum([1, 2, 3, 4, 5], 8);

// 시간복잡도 계산(최악의 경우)
timeComplexcityMinimum([1, 2, 3, 4, 5], 100);

function spartialComplexcityMinimum(array, targetNumber) {
    // 복잡도 세기
    let count = 0;
    // hashTable 객체에 탐색한 지점을 저장하는 hash-map방식
    let hashTable = {};

    for(let i = 0; i < array.length; i++) {
        let currentValue = array[i],
            difference = targetNumber - currentValue;
        count++;
        
        if (hashTable[currentValue] != undefined) {
            console.log('연산 횟수 : ', count);
            console.log('답 : ', [array[i], hashTable[array[i]]]);
            console.log('hashTable : ', hashTable);

            return [array[i], hashTable[array[i]]];
        } else {
            hashTable[difference] = array[i];
        }
    }

    console.log('연산 횟수 : ', count);
    console.log('답 : ', -1);
    console.log('hashTable : ', hashTable);
    return -1;
}
// 일반적인 경우
spartialComplexcityMinimum([1, 2, 3, 4, 5], 8);

// 시간복잡도 계산(최악의 경우)
spartialComplexcityMinimum([1, 2, 3, 4, 5], 100);