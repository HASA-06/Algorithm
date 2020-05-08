function commonNumber(array1, array2, array3) {
    let hashMap = {};
    
    searchArray(array1);
    searchArray(array2);
    searchArray(array3);

    return searchHash();

    function searchHash() {
       
    }

    function searchArray(array) {
        for(let i = 0; i < array.length; i++) {
            setHashMap(array[i]);
            removeAll(array, array[i]);
        }
    }

    function removeAll(array, element) {
        while(array.indexOf(element) != -1) {
            array.splice(array.indexOf(element), 1);
        }
    }

    function setHashMap(value) {
        if(hashMap[value] != undefined)
            hashMap[value] += 1;
        else
            hashMap[value] = 1;
    }
}

let array1 = [1, 5, 5, 10];
let array2 = [3, 4, 5, 5, 10];
let array3 = [5, 5, 10, 20];

commonNumber(array1, array2, array3);