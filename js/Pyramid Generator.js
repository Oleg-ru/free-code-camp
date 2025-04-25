function pyramid(char, countLetter, isTop) {
    let resultPyramid = [];
    for (let i = 0, j = 1; i < countLetter; i++, j += 2) {
      if (isTop) {
        resultPyramid.push(`${' '.repeat(countLetter - i - 1)}${char.repeat(j)}`);
      } else {
        resultPyramid.push(`${' '.repeat(i)}${char.repeat(countLetter * 2 - j)}`);
      }
    }
  
    return `\n${resultPyramid.join('\n')}\n`;
  }
  
  console.log(pyramid('o', 3, false));

//Старый код:

// function pyramid(char, countLetter, isTop) {
//   let resultPyramid = [];
//   if (isTop) {
//     for (let i = 0, j = 1; i < countLetter; i++, j += 2) {
//       resultPyramid.push(`${' '.repeat(countLetter - i + 1)}${char.repeat(j)}`);
//     }
//   } else {
//     for (let i = 0, j = 1; i < countLetter; i++, j += 2) {
//       resultPyramid.push(`${' '.repeat(i)}${char.repeat(countLetter * 2 - j)}`);
//     }
//   }
//   return `\n${resultPyramid.join('\n')}\n`;
// }
/*
   o
  ooo
 ooooo
ooooooo

    o
   ooo
  ooooo
 ooooooo
ooooooooo
*/