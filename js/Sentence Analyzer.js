function getVowelCount(sentence) {
  const vowelLetters = ['a', 'e', 'i', 'o', 'u', 'y'];
  let count = 0;
  sentence.split('').forEach((element) => {
    if (vowelLetters.includes(element.toLowerCase())) count += 1;
  });
  return count;
}

const getConsonantCount = (sentence) => {
  const vowelLetters = 'bcdfghjklmnpqrstvwxyz';
  let count = 0;
  for (const char of sentence.toLowerCase()) {
    if (vowelLetters.includes(char)) {
      count += 1;
    }
  }
  return count;
};

const getPunctuationCount = (sentence) => {
  const punctuations = '.,!?;:-()[]{}"\'–';
  let count = 0;
  for (const char of sentence.toLowerCase()) {
    if (punctuations.includes(char)) {
      count += 1;
    }
  }
  return count;
};

function getWordCount(sentence) {
  if (sentence.length === 0 || sentence.trim().length === 0) return 0;
  return sentence.split(' ').length;
}

const punctuationCount = getPunctuationCount('WHAT?!?!?!?!?');

console.log(`Punctuation Count: ${punctuationCount}`);
