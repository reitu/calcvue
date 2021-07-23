function plus(a, b) {
    return a+b
}

function minus(a, b) {
    return a-b
}


function times(a, b) {
    return a*b
}

function divided(a, b) {
    return a/b
}


export function bodmas(stringNum) {

    var arrNum = stringNum.split(' ')

    const signs = [
        {
            sign: '/',
            fn: divided
        },
        {
            sign: '*',
            fn: times
        },
        {
            sign: '-',
            fn: minus
        },
        {
            sign: '+',
            fn: plus //fn is a a placeholder for a function 
        }
    ]

    signs.forEach((element) => { 
        const {fn, sign} = element //decomposition
        while (arrNum.includes(sign)) {
            var signPlace = arrNum.findIndex(function (element) {
                return element == sign;
            });
            
            var result = fn(parseFloat(arrNum[signPlace-1]), parseFloat(arrNum[signPlace+1]))
        
            arrNum.splice(signPlace-1, 3, result.toString())  
        } 
    })

    return arrNum[0]
}

// bodmas('3 / 2 * 4')



    
    
          


