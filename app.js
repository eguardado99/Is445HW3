const numberStr = prompt('Please input your number;')

const number = Number(numberStr)

const result1 = triple(number)
const result2 = dec2bin(number)
result = result1 + '<br>' + result2
writeOutput(result)


function writeOutput (result) {
const h3Element = document.getElementById('output')
h3Element.innerHTML = result
}

function triple(num) {
    return num * 3
}
// the >>>rightshift to 0 remove the sign
// thus it can handle negative number

function dec2bin(dec){
    return (dec >>> 0).toString(2)
}