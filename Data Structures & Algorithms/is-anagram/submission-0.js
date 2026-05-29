class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sLower = s.toLowerCase();
        let tLower = t.toLowerCase();
        
        
        if (sLower.length !== tLower.length) return false;
        if (sLower.length < 1 || sLower.length > 5 * 10**4) throw new RangeError(`String length must be between 1 and 50,000`);

        const freq = {};

        for(const char of sLower) {
            freq[char] = (freq[char] ?? 0) + 1;
        }

        for(const char of tLower) {
            if(!freq[char]) return false;
            freq[char]--;
        }
        return true;
    }
}
