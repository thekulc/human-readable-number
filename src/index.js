module.exports = function toReadable(number) {
    return tr(number)
}

const singlesNames = {
    '0': "zero",
    '1': "one",
    '2': "two",
    '3': "three",
    '4': "four",
    '5': "five",
    '6': "six",
    '7': "seven",
    '8': "eight",
    '9': "nine",
    '10': "ten",
    '11': "eleven",
    '12': "twelve",
    '13': "thirteen",
    '14': "fourteen",
    '15': "fifteen",
    '16': "sixteen",
    '17': "seventeen",
    '18': "eighteen",
    '19': "nineteen",
}
const dozenNames = {
    '1': "one",
    '2': "twenty",
    '3': "thirty",
    '4': "forty",
    '5': "fifty",
    '6': "sixty",
    '7': "seventy",
    '8': "eighty",
    '9': "ninety"
}

function tr(number) {
    let str = "";
    if (number === 0)
        return singlesNames[number]

    if (Math.floor(number / 100) > 0) {
        const sot = Math.floor(number / 100);
        str = `${singlesNames[sot]} hundred `
        number = number - sot * 100
    }
    if (number > 19) {
        const des = Math.floor(number / 10)
        str += `${dozenNames[des]} `
        number = number - des * 10
    }
    if (number > 0)
        str += singlesNames[number]
    return str.trim()
}