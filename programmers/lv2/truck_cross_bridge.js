function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    var currentBridge = Array(bridge_length).fill(0);
    
    for(var indexOfTruck = 0; indexOfTruck < truck_weights.length; indexOfTruck++) {
        console.log("\n" + indexOfTruck + '번째 트럭 대기');
        isNextTruck(truck_weights[indexOfTruck]);

        if(indexOfTruck == truck_weights.length - 1) {
            if(totalTruckWeight == 0) {
                console.log(answer);
                return answer - (truck_weights.length - 2);
            } else {
                lastTruck();
                console.log(answer);
                return answer - (truck_weights.length - 2);
            }
        }
    }

    function lastTruck() {
        while(totalTruckWeight() != 0) {
            passTruck(0);
        }
    }

    function isNextTruck(truckWeight) {
        while(1) {
            if(totalTruckWeight() + truckWeight <= weight) {
                passTruck(truckWeight);
                break;
            } 

            passTruck(0);
        }
    }

    function passTruck(nextTruck) {
        console.log("\n1초가 지났다");
        currentBridge.pop();
        currentBridge.unshift(nextTruck);
        answer += 1;
        console.log("현재 다리 위의 상태 : ", currentBridge);
        console.log("현재 소요시간 : ", answer);
    }

    function totalTruckWeight() {
        return currentBridge.reduce((a, b) => a + b, 0);
    }
}

solution(2, 10, [7, 4, 5, 6]);