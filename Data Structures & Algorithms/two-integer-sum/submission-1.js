class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
let seen={}
        for(let i=0; i<nums.length;i++){
            let reminder = target-nums[i]

            if(seen[reminder]!==undefined){
                return [seen[reminder],i]
            }
            seen[nums[i]]=i
        }
    }
}
