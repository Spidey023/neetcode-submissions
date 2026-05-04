class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        l,r=0,k
        res=[]
       
        

        while r<=len(nums) :
            window=nums[l:r]

            res.append(max(window))
            l+=1
            r+=1
        return res
        
