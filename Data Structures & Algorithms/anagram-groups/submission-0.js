class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for (const str of strs) {
            // Sort the characters to create the key
            const key = str.split("").sort().join("");

            // If the key doesn't exist, create an empty array
            if (!map.has(key)) {
                map.set(key, []);
            }

            // Add the string to its anagram group
            map.get(key).push(str);
        }

        return Array.from(map.values());
    }
}