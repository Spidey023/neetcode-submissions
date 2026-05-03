class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if len(t) > len(s):
            return ""

        need = {}
        window = {}

        for ch in t:
            need[ch] = need.get(ch, 0) + 1

        have = 0
        needCount = len(need)

        l = 0
        res = [-1, -1]
        resLen = float("inf")

        for r in range(len(s)):
            ch = s[r]
            window[ch] = window.get(ch, 0) + 1

            if ch in need and window[ch] == need[ch]:
                have += 1

            while have == needCount:
                if r - l + 1 < resLen:
                    res = [l, r]
                    resLen = r - l + 1

                leftChar = s[l]
                window[leftChar] -= 1

                if leftChar in need and window[leftChar] < need[leftChar]:
                    have -= 1

                l += 1

        if resLen == float("inf"):
            return ""

        start, end = res
        return s[start : end + 1]
