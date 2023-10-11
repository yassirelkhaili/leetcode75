function isSubsequence(s: string, t: string): boolean {
    let sPointer: number = 0;
    let tPointer: number = 0;
    while (tPointer < t.length)
    {
        if (s[sPointer] === t[tPointer]) {
            sPointer++;
        }
        tPointer++;
    }
    return sPointer === s.length;
    };