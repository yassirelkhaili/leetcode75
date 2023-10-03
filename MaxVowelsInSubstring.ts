//my solution (beats 98.16% of typescript users)

const isVowel = (char: string): boolean => ('aeiou'.includes(char))

function maxVowels(s: string, k: number, vowelCount: number = 0, maxVowelCount: number = 0): number {
for (let i = 0; i < k; i++)
    isVowel(s[i]) && vowelCount++
maxVowelCount = vowelCount
for (let j = k; j < s.length; j++)
{
    isVowel(s[j]) && vowelCount++
    isVowel(s[j - k]) && vowelCount--
    maxVowelCount = Math.max(maxVowelCount, vowelCount)
}
return maxVowelCount
};