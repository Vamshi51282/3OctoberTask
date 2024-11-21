//1
var a= [1,2,3,4,5,{id:1,age:25},[1,2,3]]
var reversea=""
for(i=a.length-1;i>=0;i--){
    reversea=reversea+a[i]
}
console.log(reversea);

//2
var aa="sumanth"
var reverseStr=""
for(i=aa.length-1; i>=0; i--){
    reverseStr=reverseStr+aa[i]
}
console.log(reverseStr);

//3
var a= [1,2,3,4,5,{id:1,age:25},[1,2,3]]
for(age of a){
    if(age.toString=="[object Object]"){
        console.log(age.age);
    }
}