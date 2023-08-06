// // *
// // **
// // ***
// // ****
// let str="";
// var n=5;
// for (let i = 0; i <=n ; i++) {
//    for (let j = 0; j <=i; j++) {
//         str+="*"
//    }
//     str+="\n"
// }
// console.log(str)

// //****
// //*** 
// //**
// //*
// let string=""
// var a=5
// for (let i = a; i >=0 ; i--) {
//     for(j=0;j<=i;j++){
//         string+="*"
//     }
//     string+="\n"    
// }
// console.log(string)

// //     *
// //    * *
// //   * * *
// //   Pyramid
let s=""
var m=5;
for (let i = 1 ; i < m; i++) {
    for (let j = i; j <m; j++) {
        s+=" "
    }
    for (let k = 0; k <i*2-1; k++) {
        s+="*"
    }
    s+="\n"
}
console.log(s)

// // //Reversed pyramid
// let b=5;
// let st=""
// for(let i=1;i<b;i++){
//     for(let j=1; j<i;j++){
//         st+=" "
//     }
//     for(let k=0; k< (b-i)*2-1; k++){
//         st+="*"
//     }
//     st+="\n"
// }
// console.log(st)



// //     *
// //    **
// //   ***
// //  ****
// let stri="";
// let c=5;
// for (let i = 1; i <= c; i++) {
//     for(let j = i ;j<=c-1 ;j++){
//         stri+=" "
//     }   
//     for(let k=0 ; k<i ; k++){
//         stri+="*"
//     }
//     stri+="\n"
// }
// console.log(stri)
