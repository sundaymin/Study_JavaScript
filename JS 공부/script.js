const form = document.querySelector("form");

form.addEventListener("submit",function(e){ //이벤트 객체를 받아서
    e.preventDefault() 
    //이벤트 객체가 가지고 있는 preventDefault메서드는 기존의 기능을 차단함
    console.log(form.name.value);
    console.log(form.town.value);
})