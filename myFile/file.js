//Function Example
// function myFile(){
//     console.log("hello World")
// }
// myFile()

// function Add(x){
//     return (function multi(y=x*3){
//         return(function sub(z=y*5){
//             return (x+y*z);
//         })()
//     })()
// }
// console.log(Add(6))

//Example of Object
// var frds={name:"Tushar",age:"24",MOB:'9011530449'}
// //console.log(frds)
// console.log(frds.name)
// console.log(frds["name"])

//InBuilt method
// var str="Ranjeet Maskar"
// var str1= "i am a programmer. and also msc student so tommarorow we will go to home."
// // console.log(str.length)
// // console.log(str.indexOf("a"))
// // console.log(str.lastIndexOf("e"))
// // console.log(str.search("a"))
// // console.log(str.slice(2,6))
// // console.log(str.substring(2,6))
// // // console.log(str.substr(2,6))
// // console.log(str.replace("Ranjeet Maskar","Sourabh Gorule"));
// // console.log(str.toUpperCase())
// // console.log(str.toLowerCase())
// // console.log(str.trim()
// console.log(str + str1)

// Number Methods
// var x=112.23
// // console.log(typeof(x))
// console.log(x.toString());
// console.log(x.toExponential(2))
// console.log(x.toFixed(6))
// console.log(x.toPrecision())
// console.log(typeof(x))

// creating Array
// var car=["suzuki",'wagoner','Oddy','BMW']
// var bike=["spelmdor","hfdelux"]    
//car[1]="CRITA"
//car.push('waghnor')
//console.log(car)
// console.log(typeof(car))
// console.log(car.toString())
// console.log(car.join("*"))
// console.log(car.splice(1,0,"yamaha"));
// console.log(car)
// var total=car.concat(bike);
// console.log(    total);

//Sort() Array
//var fruit=["Banana", "Orange", "Apple", "Mango"];

// //Highest Lowest no
// var No=[21,2,3,50,8,9,46]
// var a=No[0]
// var count=0
//     for(let i=0;i<No.length;i++){
//         if (a > No[i]) {
//             a=No[i]
//             count++
//         }
//     }
//     console.log(a)
//     console.log(count)
    // console.log(No.sort(function(x,y){return (y-x)}))
    //console.log("Lowest value is: "+No[0])
    //console.log("Highest value is: "+No[0])

//console.log(No.reverse())

//create a class
// class frd{
//     constructor(name,address){
//         this.name=name;
//         this.address=address;
//     }
// }
// myFrd= new frd("Sourabh","Bahirewadi")
// console.log(myFrd) 

// class car{
//     constructor(name,model){
//         this.name=name;
//         this.model=model;
//     }
//     age(){
//         let date=new Date();
//         return date.getFullYear()-this.year;
//     }
// }
// myCar= new car("Alto",2000)
// console.log(myCar.name + " is " +myCar.model+ " model. Its is" + myCar.age() + " year old")

//Swaping with 3 variable
var a=5;
var b=6;
var temp=""
console.log(a,b)
temp=a;
a=b;
b=temp;
console.log(a,b)

//swaping with two bvariable
var a=5;
var b=4;
console.log(a,b)
a=a*b;
b=a/b;
a=a/b;
console.log(a,b)