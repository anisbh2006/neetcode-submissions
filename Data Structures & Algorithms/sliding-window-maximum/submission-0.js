
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const result = [];
        const deque = []; // Stores indices
        let head = 0;

        for (let right = 0; right < nums.length; right++) {
            // Remove indices outside the current window
            if (head < deque.length && deque[head] <= right - k) {
                head++;
            }

            // Remove smaller values from the back
            while (
                deque.length > head &&
                nums[deque[deque.length - 1]] <= nums[right]
            ) {
                deque.pop();
            }

            deque.push(right);

            // Window is complete
            if (right >= k - 1) {
                result.push(nums[deque[head]]);
            }
        }

        return result;
    }
}

