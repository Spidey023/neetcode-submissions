class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    // isAnagram(s, t) {
    //     if(s.length !== t.length) return false

    //     let count = {}

    //     for(let char of s){
    //         count[char] = (count[char] ||0)+1; 
    //     }

    //     for(let char of t){
    //         if(!count[char]) return false
    //         count[char]--
    //     }
    //     return true
    // }

    isAnagram(s,t){
        if(s.length !== t.length) return false

        let count = new Map()

        for(let char of s){
            count.set(char, (count.get(char)||0)+1)
        }
        for(let char of t){
            if(!count.has(char)) return false
            count.set(char, count.get(char)-1)

               if (count.get(char) === 0) {
      count.delete(char); // cleanup if count reaches 0
    }
        }

     


        return true
    }
}
