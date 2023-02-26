function Dog(paramName, paramBreed){
    this.name = paramName
    this.breed =paramBreed
}
//생성자함수 매개변수가 2개니까, 객체 생성시에도 인자를 2개 작성
const dog1 = new Dog("방울", "시츄");
const dog2 = new Dog("치즈","웰시코기");
const dog3 = new Dog("버터","푸들");
const dog4 = new Dog("만두","말티푸");

console.log(dog1);
console.log(dog2);
console.log(dog3);
console.log(dog4);

