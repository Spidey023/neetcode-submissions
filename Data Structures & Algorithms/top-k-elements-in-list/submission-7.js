class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        let freq={}
    let result=[]
        for(let i=0;i<nums.length;i++){
           freq[nums[i]] = (freq[nums[i]] || 0) + 1;
        }

        let sorted = Object.keys(freq).sort((a, b) => freq[b] - freq[a]);

    return sorted.slice(0, k);
    }
}
