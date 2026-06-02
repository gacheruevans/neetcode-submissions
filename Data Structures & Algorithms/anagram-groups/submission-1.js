class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for(const word of strs) {
            // Build a frequency count for 26 characters
            const count = new Array(26).fill(0);
            for(const char of word) {
                count[char.charCodeAt(0)- "a".charCodeAt(0)]++;
            }
            
            const key = count.join("#")
            if(!map.has(key)) map.set(key,[]);
            map.get(key).push(word);
        }
        return Array.from(map.values());
    }
}
