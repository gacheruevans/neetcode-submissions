class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let n = nums.length;
        let count = 0;
        const freq = new Map();
        let s = freq.size;

        for( const num of nums ) {
            freq.set(num, (freq.get(num) ?? 0)+1);
        }
        
        const entries = [...freq.entries()];
        
        entries.sort((a, b) => b[1] - a[1]);

        const topKEntries = entries.slice(0, k);

        const result = topKEntries.map(([num, frequency]) => num);

        return result;

    }
}
