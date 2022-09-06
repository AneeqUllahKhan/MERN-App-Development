const Info = {
    Profile : {
        name:"Aneeq",
        Fathername:"Furqan",
        Age : 18,
    },
    Address : {
          Postal_Code:"74600",
          City:"Karachi",
          Country:"Pakistan",
    }
}
let InfoOne = {...Info.Profile};
let InfoTwo = {...Info.Address};

console.log(InfoOne);
console.log(InfoTwo);

arr = [
        ["name","Class","RollNo"],
        ["xyz","10","1105"],
    ];    
    
    let b = [...arr.slice (0,1) ];
    b.slice [1, 1];
    console.log(b);
    console.log(arr);