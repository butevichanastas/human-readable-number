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
if (str[str.length - 1] === 0) {
  return zero
}
if (str[str.length - 1] === 1) {
  return one
}
if (str[str.length - 1] === 2) {
  return two
}
if (str[str.length - 1] === 3) {
  return three
}
if (str[str.length - 1] === 4) {
  return four
}
if (str[str.length - 1] === 5) {
  return five
}
if (str[str.length - 1] === 6) {
  return six
}
if (str[str.length - 1] === 7) {
  return seven
}
if (str[str.length - 1] === 8) {
  return eight
}
if (str[str.length - 1] === 9) {
  return nine
}

}





// 333 = 3*100 + 3*10 + 3
// 'three hundred thirty three'

// let number = 569;
// let str = number.toString();
// let length = str.length;


// let number = 569;
// let str = number.toString().split('');


