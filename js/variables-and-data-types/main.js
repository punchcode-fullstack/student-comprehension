/*
    Different types of data:

    primitives:
        - string
        - boolean
        - numbers
    non-primitives:
        - arrays
        - objects
*/

// set the variables to their values

var str

console.assert(str === 'Jane')

var bln

console.assert(bln === true)

var num

console.assert(num === 5)

var obj

console.assert(objectsAreSame(
    obj,
    {
        first: 'Jane',
        last: 'Doe'
    }
))




function objectsAreSame(x, y) {
    if (!x) {
        return false
    }
    var objectsAreSame = true
    for(var propertyName in x) {
        if(x[propertyName] !== y[propertyName]) {
            objectsAreSame = false;
            break
        }
    }
    return objectsAreSame
}




