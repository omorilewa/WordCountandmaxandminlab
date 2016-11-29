
module.exports = {

words: function (text) {
  var textWords = text.split(/[\s]+/);
  var wordCount = {};
  for (var word in textWords) {
    word = textWords[word];
    if(word.length < 1) {
      continue;
    } else if (typeof wordCount[word] === 'undefined' || typeof wordCount[word] === 'function') {
      wordCount[word] = 1;
    } else {
      wordCount[word] = wordCount[word] + 1;
    }
  }
  return wordCount;
},

}

 