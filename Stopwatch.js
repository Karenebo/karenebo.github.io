
let [milliseconds,second,minute,] = [0,0,0];
let timerRef = document.querySelector('.time');
let int = null;
let elapsedTime=0;

function time(){
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        second++;
        if(second == 60){
            second = 0;
            minute++;
            if(minute == 60){
                minute = 0;
            }
        }
    }

 let m = minute < 10 ? "0" + minute : minute;
 let s = second < 10 ? "0" + second : second;
 let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

 timerRef.innerHTML = ` ${m} : ${s} : ${ms}`;

}


document.getElementById('Start').addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(time,10);
}); 


document.getElementById('Stop').addEventListener('click', ()=>{
    clearInterval(int);
});

document.getElementById('Reset').addEventListener('click', ()=>{
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0];
    timerRef.innerHTML = '00 : 00 : 00'; 
});

