class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map=new Map();
        
        let reminder=0

        for(let right=0; right<nums.length; right++){
          reminder=target-nums[right]
           if(map.has(reminder)){
            return [map.get(reminder), right]
           }
        map.set(nums[right], right)
        }
    }
}
