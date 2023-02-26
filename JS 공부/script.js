const select = document.querySelector('select');
const button = document.querySelector('button');

button.addEventListener('click',function(){
    console.log(select.value);//셀렉트태그의 값을 읽어옴
    let result;
    result = select.value == "foot"?
    "축구를 선택함" :
    "축구를 안선택함"
    alert(result);
})