class Solution {
    encode(strs) {
        let res = "";

        for (let str of strs) {
            res += str.length + "#" + str;
        }

        return res;
    }

    decode(s) {
        let res = [];
        let i = 0;

        while (i < s.length) {
            let j = i;

            while (s[j] !== '#') {
                j++;
            }

            let length = parseInt(s.slice(i, j));
            let word = s.slice(j + 1, j + 1 + length);

            res.push(word);

            i = j + 1 + length;
        }

        return res;
    }
}