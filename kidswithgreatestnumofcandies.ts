function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const sortedArr = [...candies];
    const maxValue: number = sortedArr.sort((a: number, b: number) => a - b)[sortedArr.length - 1];
    return candies.map((value: number) => (value + extraCandies) >= maxValue);
    };