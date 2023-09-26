let word1 = "abc";
let word2 = "pqr";

function mergeAlternately(word1: string, word2: string): string {
    let result : Array<string> = [];
    let index : number = 0;
    let index2 : number = 0;
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