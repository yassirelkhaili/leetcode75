const isThisVowel = (char: string) : boolean => ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(char);

function reverseVowels(s: string): string {
 let reversedVowels: Array<string> = s.split('');
 let leftpointer = 0;
 let rightpointer = s.length - 1;
 while (leftpointer < rightpointer)
 {
    while (leftpointer < rightpointer && !isThisVowel(reversedVowels[leftpointer]))
        leftpointer++;
    while (leftpointer < rightpointer && !isThisVowel(reversedVowels[rightpointer]))
        rightpointer--;
    if (leftpointer < rightpointer) {
        [reversedVowels[leftpointer], reversedVowels[rightpointer]] = [reversedVowels[rightpointer], reversedVowels[leftpointer]];
        leftpointer++;
        rightpointer--;
    }
 }
 return reversedVowels.join('');
};