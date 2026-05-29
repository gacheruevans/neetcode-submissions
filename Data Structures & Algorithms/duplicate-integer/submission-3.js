class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let n =nums.length;
        let current = 0;
        let previous = null;
        
        if(n <= 10**5 && n > 0){
            let sorted = nums.sort((a,b) => a - b);
            for(let i = 0; i<n; i++) {
                current = sorted[i];
                if ( current !== previous ) {
                    previous = current;
                }else {
                    return true;
                }
            }
            return false;
        }else { 
            return false
        };
    }
}
