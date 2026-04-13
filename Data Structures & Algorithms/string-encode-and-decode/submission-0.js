class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res=''
        for(let s of strs){
            res += s.length+'#'+ s
        }
        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let out = []
        let i=0
        while(i<str.length){
           let j=i
           while(str[j]!=='#') j++

           let slength =Number( str.slice(i,j))

          let  start = j+1
          let end=start+slength

          out.push(str.slice(start, end))
          i=end
        }
        return out
    }
}
