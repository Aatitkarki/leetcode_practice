//Converting roman to integer
function romanToInt(s: string): number {
  let arr: string[] = s.split("");
  let totalNum: number = 0;
  arr.forEach((value) => {
    totalNum += getInteger(value);
  });
  console.log(totalNum);
  return totalNum;
}

function getInteger(s: string): number {
  let num = 0;
  switch (s) {
    case "I":
      num = 1;
      break;
    case "V":
      num = 5;
      break;
    case "X":
      num = 10;
      break;
    case "C":
      num = 100;
      break;
    case "D":
      num = 500;
      break;
    case "M":
      num = 1000;
      break;
  }
  return num;
}

console.log(romanToInt("MCMXCIV"));
