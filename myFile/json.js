//JSON name/value
//"firstname":"Ranjeet"

//JSON Object
//{"firstname": "Ranjeet"}

// //JSON Array
// "employee":[
//     {"firstname":"Ranjeet", "lastname":"Maskar"},
//     {"firstname":"Sourabh", "lastname":"Gorule"},
//     {"firstname":"Manoj", "lastname":"Ilake"}
// ]

//Coverting JSON text to JavaScript Object
var text='{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
var obj=JSON.parse(text) 
console.log(obj.employees[0]);