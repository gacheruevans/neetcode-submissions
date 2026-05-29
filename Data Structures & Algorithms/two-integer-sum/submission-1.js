class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let complement = 0;
        let n = nums.length;

        const seen = new Map(); // Using a hashtable for easier tracking.
        for( let i=0; i < n; i++) {
            complement = target - nums[i];
            if (seen.has(complement)) {
                return [seen.get(complement), i];
            }
            seen.set(nums[i], i);
        }
        return null;
    }
}