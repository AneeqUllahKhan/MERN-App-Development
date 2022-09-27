// ===== Template Literals =====



// ===== Ternary Operators =====
// if(true){
//     if(true){
//         console.log("True");
//     }else{
//         console.log("False");
//     }
// }else{
//     console.log("parent false");
// }

// true?true? console.log("True")
// :console.log("False")
// :console.log("parent false");


// let bool = true; 
// let a = bool ? "abc" : "xyz";

// let num1 = "10"
// let num2 = 20
// let bool = true;
// let b = bool && "ABC";
// let c = num1 + num2 || 0;

// ===== Passed by value =====

// let a = "abc";
// a = "xyz";
//  console.log(a);


// let a = "abc";
// a = 123;
//  console.log(a);

// const a = [];
// a[0] = "abc";
// console.log(a);


// ===== Passed by References =====
// let a = ["abc"];
// let b = a;
// b = 123;
// console.log(a);

// let a = ["abc"];
// let b = a;
// b[0] = 123;
// console.log(a);

// let a = [1,2,3]
// let b = a;
// b.splice(1, 1);
// console.log(b)

// ===== Spread Operators =====

// const a ={ 
//     id : 1,
//     name: "ABC"
// }

// const b = a;
// b.name = "XYZ";
// console.log(a);

// const a = [1,2,3];
// const b = [...a, 4, 5, 6, 7]

// b.splice(1,1);
// console.log(b);
// console.log(a)


//e.g

// let a =[1,2,3];
// let b = a;
// b.splice(2, 1);

// console.log(a);


// let a =[{id:1},{id:2},{id:3}];
// let b = JSON.parse(JSON.stringify(a));
// b[0].name = "ABC";
// console.log(a);



// ===== Rest Opertors =====

// function abc(a, ...abc){
//     console.log(abc);
// }
// abc(123 ,456 ,789 ,123,456 ,789 , );


// ===== Arrays Function =====
// ===== map =====
// Map itration karke return karta hai
let a = [
    {
        id:1,
        name:"ABC",
        category: "A",
        isApproved : false
    },
    
    {
        id:2,
        name:"DEF",
        category: "B",
        isApproved : true
    },
    
    {
        id:3,
        name:"MNO",
        category: "A",
        isApproved : false
    },
    
    {
        id:4,
        name:"PQR",
        category: "A",
        isApproved : false
    }
];

// a.map(function(e, i, lst){
//     console.log(e);
//     console.log(i);
// });


// ===== Filter =====

// let b = a.filter(function(x,i){
//     if(x.category == "A"){

//         x.in = i;
//         return x;
//     }

// });

// console.log(b);


// ===== For each =====

// a.forEach(function(x,i){
//     x.inst = "SAIMS";
//     console.log(x)
// });


// let numArr= [10 ,20 ,40 ,50 ,60 ,70]
// numArr.forEach(function(x, i){
//     x = x + 2;
// })

// console.log(...numArr);

// ===== Some =====
// Sirf True Ya False Return Karega

// let b = a.some(function(x, i){
//     if(x.category == "A"){
//         return x;
//     }
// });

// console.log(b)

// let b = a.some(function(x, i){
//     if(x.isApproved){
//         return x;
//     }
// });

// console.log(b)




// ===== Find =====

// let b = a.find(function(x, i){
//     if(x.id == 2){
//         return x;
//     }
// })

// console.log(b)


// ===== FindIndex ====

// let i = a.findIndex(function(x){
//     return x.id == 4 ? x : null;
// });
// console.log(i);

// ===== Function =====

// 1 : Arrow Function
// Dont have own Identity
// function abc(a){
//     console.log(a);
// }
// abc("Message")

// let abc = a =>{
//     console.log(a);
// }
// abc(a);


// let abc = a =>{
//     return a
// }
// console.log(abc("Message"))

// let abc = a => a
// console.log(abc("Message"))

// let arr = a.filter(x => x.category == "B")
// console.log(arr)




// 2 : Call Back Function
 
// Perimeter ke andar jo chalraha hai wo call back karaha hai
// abc call back function

// let abc = (a)=>{
//  return a 

// }

// let xyz = (a)=>{
//     return a*2
// }
// console.log(xyz(abc(10)))


// 3 : High Order Function

// let abc = ()=>{
//     console.log("abc")
//     return ()=>{
//         console.log("xyz")
//     }
// }

// let b = abc()
// b()

// let abc = ()=>{
//     console.log("abc")
//     return "xyz"
// }

// let b = abc()
// console.log(b)


// let mno = ()=> {
//     console.log("mno")
// }

let abc = ()=>{
    console.log("abc")
    return ()=>{
        console.log("xyz")
    }
}

abc()()




// 4 : Closures Function



// ===== Arrow Function =====
// ===== Higher Order Function =====
// ===== Call Back Function =====
// ===== De stucturing =====
// ===== Function =====


// Promise

// let checkpassword = (password)=>new Promise ((resolve, reject)=>{
//     if(password.length >6){
// resolve ("Password is correct")
//     }else{
//         reject("Password is incorrect")
//     }
// });

// checkpassword("12345")
// .then((res)=>{
//     console.log(res);
// })

// .catch((err)=>{
//     console.log(err);
// })

// Async

let acd =()=>{
 console.log("1")
 setTimeout(()=>{
     console.log("2")

 })
 console.log("3")
 console.log("4")
}