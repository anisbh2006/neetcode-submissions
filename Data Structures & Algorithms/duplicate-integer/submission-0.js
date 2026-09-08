class Solution {
    hasDuplicate(nums) {
        const uniqueNumbers = new Set(nums);

        return uniqueNumbers.size !== nums.length;
    }
}