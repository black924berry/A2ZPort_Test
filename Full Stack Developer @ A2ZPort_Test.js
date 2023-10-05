function findLongestWordWithMostVowels(sentence) {
  const words = sentence.match(/[a-zA-Z]+/g);

  if (!words) {
    return null; // No valid words in the sentence
  }

  let longestWord = '';
  let maxWordLength = 0;
  let maxVowelCount = 0;

  for (const word of words) {
    const vowelCount = (word.match(/[aeiouAEIOU]/g) || []).length;

    if (word.length > maxWordLength || (word.length === maxWordLength && vowelCount > maxVowelCount)) {
      longestWord = word;
      maxWordLength = word.length;
      maxVowelCount = vowelCount;
    }
  }

  return longestWord;
}

const inputSentence = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers (Socrates)";
const result = findLongestWordWithMostVowels(inputSentence);

console.log(result); // Output: "experience"