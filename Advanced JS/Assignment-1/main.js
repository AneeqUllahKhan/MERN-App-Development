let mobile = {
    iphone : {
        v12 :{
            Ram: 12,
            Rom: 64,
            Price : 12000
        },

        v12pro :{
            Ram: 12,
            Rom: 64,
            Price : 12000
        },

        v12promax :{
            Ram: 12,
            Rom: 64,
            Price : 12000
        },

        v13 :{
            Ram: 12,
            Rom: 64,
            Price : 12000
        },
        v13pro :{
            Ram: 12,
            Rom: 64,
            Price : 12000
        }
    },


    samsung : {
        a31 :{
            Ram: 12,
            Rom: 64,
            Price : 12000
        },

        s3 :{
            Ram: 12,
            Rom: 64,
            Price : 12000
        },

        s4 :{
            Ram: 12,
            Rom: 64,
            Price : 12000
        },

        s5 :{
            Ram: 12,
            Rom: 64,
            Price : 12000
        },
        s6 :{
            Ram: 12,
            Rom: 64,
            Price : 12000
        }
    },


    Xiaomi : {
        redmi9 :{
            Ram: 12,
            Rom: 64,
            Price : 12000
        },

        realme7i :{
            Ram: 12,
            Rom: 64,
            Price : 12000
        },

        redmipro :{
            Ram: 12,
            Rom: 64,
            Price : 12000
        }
    },

    infinix : {
        hot5 :{
            Ram: 12,
            Rom: 64,
            Price : 12000
        },

        hot4 :{
            Ram: 12,
            Rom: 64,
            Price : 12000
        },

        hot6 :{
            Ram: 12,
            Rom: 64,
            Price : 12000
        },

        hot7 :{
            Ram: 12,
            Rom: 64,
            Price : 12000
        },
        smartplus:{
            Ram: 12,
            Rom: 64,
            Price : 12000
        }
    }
}



let companyName = document.getElementById('mobileName');
let mobileModel = document.getElementById('mobileModel');

/// Main Function Fill CompanyName to Dropdown:

function fillCompanyName() {
    let mainKeys = Object.keys(mobile)
    // console.log(mainKeys)
    for (var i = 0; i < mainKeys.length; i++) {
        companyName.innerHTML += `<option value="${mainKeys[i]}" >${mainKeys[i]}</option>`
    }

}
fillCompanyName();

function Fillmodels() {
    mobileModel.disabled = false;
    let nastedkeys = Object.keys(mobile[companyName.value])
    // console.log(nastedkeys)
    for (var i = 0; i < nastedkeys.length; i++) {
        mobileModel.innerHTML += `<option value="${nastedkeys[i]}" >${nastedkeys[i]}</option>`
    }
}


let datalist = document.getElementById('datalist')

function search() {

    let res = ((mobile[companyName.value][mobileModel.value]))
    datalist.innerHTML += ` <p>${Object.keys(res)}</p><h1>${Object.values(res)} </h1>`
}



