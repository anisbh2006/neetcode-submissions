class Solution {
    encode(strs) {
        let result = "";

        for (const s of strs) {
            result += s.length + "#" + s;
        }

        return result;
    }

    decode(str) {
        const result = [];
        let i = 0;

        while (i < str.length) {
            const separator = str.indexOf("#", i);
            const length = Number(str.slice(i, separator));

            const start = separator + 1;
            const word = str.slice(start, start + length);

            result.push(word);

            i = start + length;
        }

        return result;
    }
}
