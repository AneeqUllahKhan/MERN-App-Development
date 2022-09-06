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

const a = [1,2,3];
const b = [...a, 4, 5, 6, 7]

b.splice(1,1);
console.log(b);
console.log(a)




// ===== Rest Opertors =====
// ===== Arrays Function =====
// ===== map =====
// ===== Filter =====
// ===== For each =====
// ===== some =====
// ===== Find =====