function solution(w,h){
    var answer = 0;

    if(w == 1 || h == 1) return 0;
    else if (w == h) return w * h - w;
    
    for(var i = 1; i < w; i++) {
        answer += Math.floor(h / w * i);

        if(i == w - 1) {
            console.log(answer * 2);
            return answer * 2;
        }
    }
}

solution(99999998 , 100000000);