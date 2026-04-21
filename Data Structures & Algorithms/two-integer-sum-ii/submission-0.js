class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let map=new Map()
        let reminder=0

        for(let i=0;i<numbers.length;i++){
            reminder=target-numbers[i]

            if(map.has(reminder)){
                return [map.get(reminder),i+1]
            }

            map.set(numbers[i],i+1)
        }
    }
}
