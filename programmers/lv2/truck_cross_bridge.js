function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    var currentBridge = Array(bridge_length).fill(0);
    var truckTotalWeight = 0;
    
    truck_weights.map((truck, index) => {
        isNextTruck(truck);
        
        if(index == truck_weights.length - 1) {
            lastTruck();
        }
    });
    
    return answer;

    function lastTruck() {
        while(truckTotalWeight != 0) {
            passTruck(0);
        }
    }

    function isNextTruck(truckWeight) {
        while(truckTotalWeight - currentBridge[currentBridge.length - 1] + truckWeight > weight) {
            passTruck(0);
        }
        
        passTruck(truckWeight);
    }

    function passTruck(nextTruck) {
        truckTotalWeight -= currentBridge.pop();
        truckTotalWeight += nextTruck;
        currentBridge.unshift(nextTruck);
        answer += 1;
    }
}