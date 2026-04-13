class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
     const res={ }

    for (let word of strs){
        const sortedWord = word.split('').sort().join('');

        if(!res[sortedWord]) {
            res[sortedWord] = []
        }
    res[sortedWord].push(word)
        
    }

    return Object.values(res)
    }
}
