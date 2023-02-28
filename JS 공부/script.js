//(1) 배열에 대한 스프레드 연산

const animal = ['호랑이', '코끼리', '코뿔소', '다람쥐']
console.log(...animal)
//호랑이 코끼리 코뿔소 다람쥐
//스프레드는 배열을 그대로 출력한 것과 같은 결과를 출력

const animalPlus = [...animal, "살쾡이"]

function printName(param1, param2, param3){
    console.log(param1, param2, param3);
}
printName(...animal);//호랑이 코끼리 코뿔소

//(2)객체에 대한 스프레드 연산

const person = {
    name : "썬",
    job : "나는 뭘까",
    eat : function(){
        console.log('단거를 좋아함');
    }
}
const teacher = {
    ...person,
    job: "선생님",
    teach : function(){
        console.log('가르침');
    }
} //person 객체를 전개한 것을 담은 teacher

console.log(teacher);
console.log(teacher.job);//나는 뭘까->선생님
teacher.teach(); //가르침
//console.log(...person);//에러
//WHY? 객체 안에 밸류는 3개지만 키:밸류 그대로 복사되어
//문법적으로 맞지 않아 출력이 어려움
//Then!키밸류들을 묶어서 출력해주어야 함
