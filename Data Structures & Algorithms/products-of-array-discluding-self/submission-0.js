class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix=1
        let n= nums.length
        let left=[]
        let right=new Array(n).fill(1)
        let result=[]
        for(let i=0;i<nums.length;i++){
           left[i] = prefix;
            prefix *= nums[i];
            
           
        }
        let suffix=1
         for(let i=nums.length-1;i>=0;i--){
            right[i]=suffix;
            suffix*=nums[i]
           
        }
       
        for(let i=0;i<nums.length;i++){
            result[i] = left[i]*right[i]
        }
return result
    }
}
