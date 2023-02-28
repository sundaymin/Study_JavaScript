const cat = {
    name : "tom",
    color : "gray",
    eat : function(){
        console.log('냠냠');
    },
    sound : function(meow){
        console.log(meow);
    }
}
console.log(cat.name);//tom (값 읽기 가능)
cat.name = "Navi"
console.log(cat.name);//Navi (값 변경도 가능)
