class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    // 1) frequency map
    const freq = {};
    for (const x of nums) {
      freq[x] = (freq[x] || 0) + 1;
    }

    // 2) buckets: index = frequency
    const buckets = Array(nums.length + 1).fill(0).map(() => []);
    for (const [num, f] of Object.entries(freq)) {
      buckets[f].push(+num); // convert key back to number
    }

    // 3) collect from high freq down
    const out = [];
    for (let f = buckets.length - 1; f >= 0 && out.length < k; f--) {
      for (const n of buckets[f]) {
        out.push(n);
        if (out.length === k) break;
      }
    }

    return out;
  }
}
