const h1 = document.querySelector("h1")
const p = document.getElementById("text")

console.log(h1.textContent);
h1.textContent = "나를 h2로 변경할거야";

console.log(p.textContent);
p.textContent = "난 이제 아이디가 아니야";
console.log(p.textContent);

