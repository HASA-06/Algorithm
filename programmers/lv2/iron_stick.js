function solution(arrangement) {
    var answer = 0;
    var ironStick = 0;
    
    for(var indexOfArrangement = 0; indexOfArrangement < arrangement.length; indexOfArrangement++) {
        if(arrangement[indexOfArrangement] == '(') {
            if(arrangement[indexOfArrangement] == arrangement[indexOfArrangement + 1]) {
                ironStick += 1;
            } else {
                indexOfArrangement += 1;
                answer += ironStick;
            }
        } else {
            ironStick -= 1;
            answer += 1;
        }

        if(indexOfArrangement == arrangement.length - 1) return answer;
        
    }
}


var ironStick="()(((()())(())()))(())";

solution(ironStick);