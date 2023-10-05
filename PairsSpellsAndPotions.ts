//first solution too slow buddy

function successfulPairs(spells: number[], potions: number[], success: number, index: number = 0, result: Array<number> = new Array(spells.length).fill(0)): number[] {
    while (index < spells.length)
    {
        for (const num of potions)
            num * spells[index] >= success && (result[index] += 1)
        index++;
    }
    return result
};