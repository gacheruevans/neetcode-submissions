class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let n =nums.length;
        if (n === 0) return false;
        if (n > 10**5) throw new RangeError(`Input length ${n} exceeds maximum of 100,000`);

        const sorted = [...nums].sort((a,b) => a - b);// avoids mutating of original array
        for(let i = 1; i<n; i++) {
            if(sorted[i] === sorted[i-1]) return true;
        }
        return false;
        
    }
}
