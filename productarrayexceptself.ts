function productExceptSelf(nums: number[]): number[] {
    // implemented neetcodes logic with typescript
    const length: number = nums.length;
    const result: Array<number> = Array(length).fill(1);
    let prefix = 1;
    for (let i = 0; i < length; i++) {
        result[i] *= prefix;
        prefix *= nums[i];
    }
    let postfix = 1;
    for (let i = length - 1; i >= 0; i--) {
        result[i] *= postfix;
        postfix *= nums[i];
    }
    return result;
}