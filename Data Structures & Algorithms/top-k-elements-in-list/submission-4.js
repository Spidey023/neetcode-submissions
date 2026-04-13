class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
topKFrequent(nums, k) {
  const seen = {};

  // Count frequencies
  for (let n of nums) {
    seen[n] = (seen[n] || 0) + 1;
  }

  // Convert to array of [num, freq], sort by freq
  return Object.entries(seen)
    .sort((a, b) => b[1] - a[1])   // sort by frequency
    .slice(0, k)                   // take top k
    .map(item => Number(item[0])); // return only numbers
}

}
