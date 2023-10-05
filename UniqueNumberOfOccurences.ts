//my first intuitive solution 

// function uniqueOccurrences(arr: number[]): boolean {
//     let frequencyMap: Map<number, number> = new Map()
//     for (let num of arr)
//         frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1)
//     let frequencySet: Set<number> = new Set()
//     for (const [key, frequency] of frequencyMap)
//     {
//         if (frequencySet.has(frequency))
//             return false
//         else
//             frequencySet.add(frequency)
//     }
//     return true
//     };

//my final fastest solution

function uniqueOccurrences(arr: number[], frequencyMap: Map<number, number> = new Map(), countMap: Map<number, boolean> = new Map()): boolean {
    for (let num of arr)
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1)
    for (const [, frequency] of frequencyMap)
    {
        if (countMap.has(frequency))
            return false
        else
            countMap.set(frequency, true)
    }
    return true
    };



