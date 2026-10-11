
class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (!head) return null;

        const map = new Map();

        // 1. Create a copy of every node
        let curr = head;

        while (curr) {
            map.set(curr, new Node(curr.val));
            curr = curr.next;
        }

        // 2. Connect next and random pointers
        curr = head;

        while (curr) {
            const copy = map.get(curr);

            copy.next = curr.next ? map.get(curr.next) : null;
            copy.random = curr.random ? map.get(curr.random) : null;

            curr = curr.next;
        }

        // 3. Return the copied list's head
        return map.get(head);
    }
}

