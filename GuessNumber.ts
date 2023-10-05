const guess = (num: number): number => (num < 6) ? -1 : (num === 6) ? 0 : 1

function guessNumber(n: number, start: number = 0, end: number = n): number {
    while (start <= end)
    {
        let myPick: number = Math.floor((start + end) / 2)
        if (guess(myPick) > 0)
            start = myPick + 1;
        else if (guess(myPick) < 0)
            end = myPick - 1;
        else
            return myPick
    }
    return -1 //error status code not found
}

console.log(guessNumber(10))

