const btn1 = document.getElementById("one");
const btn2 = document.getElementById("two");
const btn3 = document.getElementById("three");

//이벤트 객체 확인(매개변수로 event(임의))
const handleClick = function(event){
    console.log(event.target);
}
btn1.addEventListener('click', handleClick);
btn2.addEventListener('click', handleClick);
btn3.addEventListener('click', handleClick);
//매개변수로 입력 받은 값을 출력
