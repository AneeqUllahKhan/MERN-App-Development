let mobiles = [
    {                    
      companyName: "Iphone",
      Model: "Iphone X",
      Ram: "3 GB",
      Rom: "64 GB",
      Price: "$218",
    },
    {
      companyName: "Iphone",
      Model: "Iphone 12",
      Ram: "4 GB",
      Rom: "128 GB",
      Price: "$799",
    },
    {
      companyName: "Iphone",
      Model: "Iphone 13",
      Ram: "4 GB",
      Rom: "128 GB",
      Price: "$1699",
    },
    {
      companyName: "Samsung",
      Model: "Galaxy Note 5",
      Ram: "4 GB",
      Rom: "32 GB",
      Price: "$101",
    },
    {
      companyName: "Samsung",
      Model: "Galaxy Note 8",
      Ram: "6 GB",
      Rom: "64 GB",
      Price: "$419",
    },
    {
      companyName: "Samsung",
      Model: "Galaxy S22",
      Ram: "8 GB",
      Rom: "128 GB",
      Price: "$799",
    },
    {
      companyName: "Oppo",
      Model: "Reno 8",
      Ram: "8 GB",
      Rom: "128 GB",
      Price: "$399",
    },
    {
      companyName: "Oppo",
      Model: "A36",
      Ram: "8 GB",
      Rom: "256 GB",
      Price: "$353",
    },
    {
      companyName: "Oppo",
      Model: "K10",
      Ram: "6 GB",
      Rom: "128 GB",
      Price: "$220",
    },
    {
      companyName: "Google",
      Model: "Pixel 6",
      Ram: "8 GB",
      Rom: "128 GB",
      Price: "$599",
    },
    {
      companyName: "Google",
      Model: "Pixel 7",
      Ram: "8 GB",
      Rom: "128 GB",
      Price: "$400",
    },
    {
      companyName: "Google",
      Model: "Pixel 8",
      Ram: "8 GB",
      Rom: "256 GB",
      Price: "$600",
    },
    {
      companyName: "Infinix",
      Model: "Smart 6",
      Ram: "2 GB",
      Rom: "32 GB",
      Price: "$102",
    },
    {
      companyName: "Infinix",
      Model: "Hot 11",
      Ram: "4 GB",
      Rom: "64 GB",
      Price: "$128",
    },
    {
      companyName: "Infinix",
      Model: "Note 11",
      Ram: "6 GB",
      Rom: "128 GB",
      Price: "$229",
    },
    {
      companyName: "Xiaomi",
      Model: "Redmi 10",
      Ram: "4 GB",
      Rom: "64 GB",
      Price: "$173",
    },
    {
      companyName: "Xiaomi",
      Model: "Redmi Note 10",
      Ram: "4 GB",
      Rom: "128 GB",
      Price: "$182",
    },
    {
      companyName: "Xiaomi",
      Model: "Redmi K50",
      Ram: "8 GB",
      Rom: "128 GB",
      Price: "$368",
    },
]




let filteredArray = [];
function init(){
    let a = mobiles.map(function(x){
        return x.companyName;

    })
    let b = [...new Set(a)];
    console.log(b);
}

function searchmob(a){
    let res = mobiles.filter(function(x){
        if(x.companyName == a){
            return x["Model"];
        }
    });
    console.log(res)
}

init()
searchmob("Oppo");

