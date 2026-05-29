class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let n = nums.length;
        let count = 0;
        let currentCount = 0;

        for (let i = 0; i < n ; i++) {
            // check for 1 and the consecutive occurence and count.
            if(nums[i] === 1) { 
                currentCount++;
                if (currentCount > count) count = currentCount;
            } else {
                currentCount = 0;
            }
        }
        return count;
    }
}