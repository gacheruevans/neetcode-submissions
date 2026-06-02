class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = new Map();

        for (const num of nums) {
            freq.set(num, (freq.get(num) ?? 0) + 1);
        }

        const buckets = Array(nums.length + 1)
            .fill(null)
            .map(() => []);

        for (const [num, frequency] of freq) {
            buckets[frequency].push(num);
        }

        const result = [];

        for (let i = buckets.length - 1; i >= 0; i--) {
            for (const num of buckets[i]) {
                result.push(num);

                if (result.length === k) {
                    return result;
                }
            }
        }

        return result;
    }
}
