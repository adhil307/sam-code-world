
/*
rules for your var,let:
1.no js keyword name2
2.shoul not start with a number
3.dont use space for variable names
4.use meaning full names
5.case sensitive
*/

//in const you can not change name
/*eg:const = "sami"
sami = aadhil
console.log(sami)
try this */
//you can do this in let//

//boolean = true or false//
//integer = number//
//string = word//
//undefined = undefined//
//null = object//


/*

{} = object
[] = array

       //object explaination//
// {}=blank object//

let person = {
    name: "sami",
    age: 14,
    gender: "female",
    address: "hiroshima,japan",
    imOver10: true,
    siblings: {
        brother: "aadhil",
        sister: "sheema"
    }
}
person.age = 13
console.log(person.name)
console.log(person["gender"])
console.log(person["siblings"])
console.log(person.siblings.brother)*/

let favColor = ["red","white","black","green"]
// []=empty array//
console.log(favColor[0]);

let msg = "i will kill you"
function message(){
    alert(msg)
}



var count = 0

function changeCount(num){
    count += num
    document.getElementById("count").innerHTML = count;
}


