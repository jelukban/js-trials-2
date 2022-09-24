'use strict';

// 1. countWords
function countWords(phrase) {
  const word_counts = {};

  for (let word of phrase.split(' ')) {
   
    word_counts.hasOwnProperty(word) ? word_counts[word] += 1 : word_counts[word] = 1;
  }
  return word_counts;
}

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  
  const melonPrices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
  }

  if (!(melonPrices.hasOwnProperty(price))) {
    return null
  }

  return melonPrices[price].sort();

}
