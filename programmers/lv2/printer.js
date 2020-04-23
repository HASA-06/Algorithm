function solution(priorities, location) {
    var answer = 0;

    for(var indexOfPriority = 0; indexOfPriority < priorities.length; indexOfPriority++) {
        if(priorities[indexOfPriority] < getMaxPriority(priorities)) {
            priorities.push(priorities.splice(0, 1)[0]);
            location = setLocation(location, priorities.length - 1);
            indexOfPriority -= 1;
        } else {
            priorities.splice(0, 1);
            indexOfPriority -= 1;
            answer += 1;
            
            if(location == 0) {
                return answer;
            } else {
                location = setLocation(location, priorities.length - 1);
            }
        }
    }
}

function getMaxPriority(priorities) {
    return priorities.reduce((previous, current) => {
        return previous > current ? previous : current;
    });
}

function setLocation(location, lastLocation) {
    return location > 0 ? location -= 1 : lastLocation;
}