class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
//         const res={}
//         for(let num of nums){
//             res[num] = (res[num] || 0 )+1
//         }

//         for (let value of Object.values(res)) {
// if(value>=2){
//     return true
// }
// }
// return false
//     }

let seen={}
for (let num of nums){
    if(seen[num]) return true;
    seen[num] =true
}
return false
}
}