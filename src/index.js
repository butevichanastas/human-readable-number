module.exports = function toReadable (number) {

  const zero = 'zero';
  const one = 'one';
  const two = 'two';
  const three = 'three';
  const four = 'four';
  const five = 'five';
  const six = 'six';
  const seven = 'seven';
  const eight = 'eight';
  const nine = 'nine';

  const ten = 'ten';

  const eleven = 'eleven';
  const twelve = 'twelve';
  const thirteen = 'thirteen';
  const fourteen = 'fourteen';
  const fifteen = 'fifteen';
  const sixteen = 'sixteen';
  const seventeen = 'seventeen';
  const eighteen = 'eighteen';
  const nineteen = 'nineteen';
  const twenty = 'twenty';

  const thirty = 'thirty';
  const forty = 'forty';
  const fifty = 'fifty';
  const sixty = 'sixty';
  const seventy = 'seventy';
  const eighty = 'eighty';
  const ninety = 'ninety';

  const oneHundred = 'hundred';

const str = number.toString();
const ones = Number(str[str.length - 1])
const desyatki = Number(str[str.length - 2])
const sotni = Number(str[str.length - 3])
let result = ""


if (ones === 0) {
  result = zero
}
if (ones === 1) {
 result = one
}
if (ones === 2) {
  result = two
}
if (ones === 3) {
  result = three
}
if (ones === 4) {
  result = four
}
if (ones === 5) {
  result = five
}
if (ones === 6) {
  result = six
}
if (ones === 7) {
  result = seven
}
if (ones === 8) {
  result = eight
}
if (ones === 9) {
  result = nine
}
if (desyatki === 1) {
 result = one + ' ' + result
}
if (desyatki === 2) {
  result = twenty + ' ' + result
}
if (desyatki === 3) {
  result = thirty + ' ' + result
}
if (desyatki === 4) {
  result = forty + ' ' + result
}
if (desyatki === 5) {
  result = fifty + ' ' + result
}
if (desyatki === 6) {
  result = sixty + ' ' + result
}
if (desyatki === 7) {
  result = seventy + ' ' + result
}
if (desyatki === 8) {
  result = eighty + ' ' + result
}
if (desyatki === 9) {
  result = ninety + ' ' + result
}
if (sotni === 1) {
 result = one + ' hundred ' + result
}
if (sotni === 2) {
  result = two + ' hundred ' + result
}
if (sotni === 3) {
  result = three + ' hundred ' + result
}
if (sotni === 4) {
  result = four + ' hundred ' + result
}
if (sotni === 5) {
  result = five + ' hundred ' + result
}
if (sotni === 6) {
  result = six + ' hundred ' + result
}
if (sotni === 7) {
  result = seven + ' hundred ' + result
}
if (sotni === 8) {
  result = eight + ' hundred ' + result
}
if (sotni === 9) {
  result = nine + ' hundred ' + result
}

return result

}

console.log(toReadable(999))


