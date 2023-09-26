var word1 = "abc";
var word2 = "pqr";
function mergeAlternately(word1, word2) {
    var result = [];
    var index = 0;
    var index2 = 0;
    while (index < word1.length || index2 < word2.length) {
        if (index < word1.length) {
            result.push(word1[index]);
            index++;
        }
        if (index2 < word2.length) {
            result.push(word2[index2]);
            index2++;
        }
    }
    return result.join('');
}
console.log(mergeAlternately(word1, word2));
