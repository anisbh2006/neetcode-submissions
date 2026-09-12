class Solution {
   
    
    topKFrequent(nums, k) {
        const count = new Map();
        for (const num of nums) {
    count.set(num, (count.get(num) || 0) + 1);
}
    const sorted = [...count].sort((a, b) => b[1] - a[1]);
    return sorted.slice(0, k).map(pair => pair[0]);
    }
}
