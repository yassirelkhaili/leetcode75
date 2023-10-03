//first answer

// function findDifference(nums1: number[], nums2: number[], index: number = 0): number[][] {
//     let answer: number[][] = [[], []]
//     for (let i = 0; i < nums1.length; i++) {
//         index = 0
//         while (index < nums2.length && nums1[i] !== nums2[index]) index++
//         (index === nums2.length && !answer[0].includes(nums1[i])) && answer[0].push(nums1[i])
//     }
//     for (let i = 0; i < nums2.length; i++) {
//         index = 0
//         while (index < nums1.length && nums2[i] !== nums1[index]) index++
//         (index === nums1.length && !answer[1].includes(nums2[i])) && answer[1].push(nums2[i])
//     }
//     return answer
// };

//using javascript sets data structure

function findDifference(nums1: number[], nums2: number[], answer: number[][] = [[], []]): number[][] {
    const numSet1 = new Set(nums1)
    const numSet2 = new Set(nums2)
    for (const num of nums1)
        !(numSet2.has(num) || answer[0].includes(num)) && answer[0].push(num)
    for (const num of nums2)
        !(numSet1.has(num) || answer[1].includes(num)) && answer[1].push(num)
    return answer
};

console.log(findDifference([1,2,3], [2,4,6]))