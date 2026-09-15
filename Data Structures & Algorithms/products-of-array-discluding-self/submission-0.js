class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const output = new Array(nums.length).fill(1);

        // 1. Store the product of everything to the LEFT
        let prefix = 1;

        for (let i = 0; i < nums.length; i++) {
            output[i] = prefix;
            prefix *= nums[i];
        }

        // 2. Multiply by the product of everything to the RIGHT
        let suffix = 1;

        for (let i = nums.length - 1; i >= 0; i--) {
            output[i] *= suffix;
            suffix *= nums[i];
        }

        return output;
    }
}