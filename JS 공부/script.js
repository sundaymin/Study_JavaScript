const button = document.getElementById("push");
const div = document.getElementById("area");

button.addEventListener('click',function(){
    console.log("div 생성중");
    const newDiv = document.createElement("div");//생성된 요소를

    newDiv.style.backgroundColor = "red";//속성추가
    newDiv.style.width = "200px";
    newDiv.style.height = "200px";

    div.appendChild(newDiv);// div요소안에 추가하기
    
    div.append("하하")

});