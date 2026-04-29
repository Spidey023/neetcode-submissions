class Solution:
    def lengthOfLongestSubstring(self, s):
        l = 0
        r = 0
        seen = set()
        maxC = 0

        while r < len(s):
            if s[r] not in seen:
                seen.add(s[r])
                maxC = max(maxC, r - l + 1)
                r += 1
            else:
                seen.remove(s[l])
                l += 1

        return maxC