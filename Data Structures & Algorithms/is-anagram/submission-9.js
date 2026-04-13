class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
     isAnagram(s, t) {
        if (s.length !== t.length) return false; // quick reject

        const seen = {};

        for (let ch of s) {
            seen[ch] = (seen[ch] || 0) + 1;
        }

        for (let ch of t) {
            if (!seen[ch]) {  // seen[ch] is 0 or undefined
                return false;
            }
            seen[ch]--;
        }

        return true; // no need to check leftovers!
    }
}
