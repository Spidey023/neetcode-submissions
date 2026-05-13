class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        
        maxPile=max(piles)
        l,r=1,maxPile
        mint=float('inf')
        while l<=r:
            mid=(l+r)//2
            t=0
            for i in range(len(piles)):
                t += (piles[i] + mid - 1) // mid
            if t>h:
                l=mid+1
            elif t<=h:
                mint=min(mint,mid)
                r=mid-1
        return mint