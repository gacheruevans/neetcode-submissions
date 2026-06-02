class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for(const word of strs) { // O(n)
            const key = word.toLowerCase().split("").sort().join(""); // O(k)

            if(!map.has(key)) {
                map.set(key,[]);
            }
            map.get(key).push(word);
        }
        return Array.from(map.values());

    }
}
