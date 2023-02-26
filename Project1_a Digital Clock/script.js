const todayDiv = document.getElementById('today');
const timeDiv = document.getElementById('time');

 //(1) getTime 함수 안의 now객체에 연월일시간분초 담기
function getTime(){
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth()+1;
    let date = now.getDate();
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    //두자리수로 맞추기 00:00
    month = month < 10 ? `0${month}`: month;
    date = date < 10 ? `0${date}`: date;
    hour = hour < 10 ? `0${hour}`: hour;
    min = min < 10 ? `0${min}`: min;
    sec = sec < 10 ? `0${sec}`: sec;

    //body 출력 파트
    todayDiv.textContent = `${year}년 ${month}월 ${date}일`;
    timeDiv.textContent = `${hour}:${min}:${sec}`;
}

//(2) setInterval로 초마다 호출
getTime();
setInterval(getTime, 1000);
