const messi = `{"name":"메시","age":34,"team":"파리 생제르망","nation":"아르헨티나","friends":["아구에로","수아레즈","네이마르"]}`

console.log(JSON.parse(messi));
//{name: '메시', age: 34, team: '파리 생제르망', nation: '아르헨티나', friends: Array(3)} object
console.log(typeof JSON.parse(messi))//string
//parse는 json에서 ' 는 환원하지 못한다.(무시함)