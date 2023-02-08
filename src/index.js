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


if (number === 0) {
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
if (desyatki === 1 && ones === 0) {
 result = ten
}
if (desyatki === 1 && ones === 1) {
 result = eleven
}
if (desyatki === 1 && ones === 2) {
 result = twelve
}
if (desyatki === 1 && ones === 3) {
 result = thirteen
}
if (desyatki === 1 && ones === 4) {
 result = fourteen
}
if (desyatki === 1 && ones === 5) {
 result = fifteen
}
if (desyatki === 1 && ones === 6) {
 result = sixteen
}
if (desyatki === 1 && ones === 7) {
 result = seventeen
}
if (desyatki === 1 && ones === 8) {
 result = eighteen
}
if (desyatki === 1 && ones === 9) {
 result = nineteen
}  
if (desyatki === 2) {
  result = twenty + ' ' + result
}
if (desyatki === 2 && ones === 0) {
  result = twenty
}
if (desyatki === 3) {
  result = thirty + ' ' + result
}
if (desyatki === 3 && ones === 0) {
  result = thirty
}
if (desyatki === 4) {
  result = forty + ' ' + result
}
if (desyatki === 4 && ones === 0) {
  result = forty
}
if (desyatki === 5) {
  result = fifty + ' ' + result
}
if (desyatki === 5 && ones === 0) {
  result = fifty
}
if (desyatki === 6) {
  result = sixty + ' ' + result
}
if (desyatki === 6 && ones === 0) {
  result = sixty
}
if (desyatki === 7) {
  result = seventy + ' ' + result
}
if (desyatki === 7 && ones === 0) {
  result = seventy
}
if (desyatki === 8) {
  result = eighty + ' ' + result
}
if (desyatki === 8 && ones === 0) {
  result = eighty
}
if (desyatki === 9) {
  result = ninety + ' ' + result
}
if (desyatki === 9 && ones === 0) {
  result = ninety
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

return result.trim()

}
