//Eucledian algorithm iterative

const gcdi = (a: number, b: number) : number => {
    let result: number = a % b;
    while (result != 0)
    {
        a = b;
        b = result;
        result = a % b;
    }
    return b;
}

//Eucledian algorithm recursion

const gcdr = (a: number, b: number) : number => (b === 0 ? a : gcdr(b, a % b));

//Main function

function gcdOfStrings(str1: string, str2: string): string {
    const strlen = str1.length;
    const strlen2 = str2.length;
    const gcdlen = gcdi(strlen, strlen2);
    const gcd = str2.substring(0, gcdlen);
    if (str1 + str2 == str2 + str1 && strlen % gcdlen === 0 && strlen2 % gcdlen === 0)
        return gcd;
    return "";
}