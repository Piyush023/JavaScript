const a = 10
if(a){
    console.log('Since a is truthy Value, This will be triggered')
    console.log('a value is:',a)
}else{
    console.log('Since a is not a truthy Value, This will not be triggered')
    console.log('Else Statement')
}

const falsyA = ''
if(falsyA){
    console.log('Since a is not a truthy Value, This will not be triggered')
    console.log('This will not be triggered')
}else{
    console.log('Since a is a truthy Value, This will be triggered')
    console.log('This will be triggered')
}

const month = 1
switch(month){
    case 1: 
    console.log('Jan')
    break;

    case 2: 
    console.log('Feb')
    break;

    case 3: 
    console.log('March')
    break;

    default: 
    console.log('March')
    break;
}

// AND and OR and Nullish Coalescing Operator - 

let aNull;
aNull = null ?? 10
console.log(aNull)

const arr = []

if(!arr.length){ // How to check if there is anything in the array or not.
    console.log("Empty Array Check If")
}

const obj = {}

if(Object.keys(obj)){ // How to check if there is anything in the object or not.
    console.log("Empty Object Check If")
}

// Truthy and Falsy Values - 

// Truthy - '0', ' ', 'false', [], {}, Function.

// Falsy - 0, '', BingInt 0n, false, null, undefined, nan.