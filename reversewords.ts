function reverseWords(s: string): string {
    let reversedString: Array<string> = [];
    let index: number = 0;
    let length: number = s.length;
    while (index < length)
    {
        let word: string = "";
        while (index < length && s[index] === " ")
            index++;
        while (index < length && s[index] !== " ")
        {
            word += s[index];
            index++;
        }
        if (word.length > 0)
            reversedString.push(word);
        index++;
    }
    return reversedString.reverse().join(' ');
    };