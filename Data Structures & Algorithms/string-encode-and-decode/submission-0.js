class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = '';
        for(const str of strs){
            encoded += str.length + "#" + str;
        }
        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i = 0;

        while(i < str.length) {
            // Find the delimiter '#'
            let j = i;
            while(str[j]!== '#') {
                j++;
            }
            // Exttract length
            const len = Number(str.slice(i, j));
            // Slice exactly `len` characters after the '#'
            const word = str.slice(j + 1, j + 1 + len);
            result.push(word);

            //Move pointer to next encoded string
            i = j +1 + len;
        }
        return result;
    }
}
