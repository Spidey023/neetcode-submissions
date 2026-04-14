class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
  
    groupAnagrams(strs) {
        let result = {};

        for (let i = 0; i < strs.length; i++) {
            let sorted = strs[i].split('').sort().join('');

            if (!result[sorted]) {
                result[sorted] = [];
            }

            result[sorted].push(strs[i]);
        }

        return Object.values(result);
    }
}
