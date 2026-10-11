
class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let dummy = new ListNode(0, head);
        let fast = dummy;
        let slow = dummy;

        // 1. Move fast n steps ahead
        for (let i = 0; i < n; i++) {
            fast = fast.next;
        }

        // 2. Move both pointers until fast reaches the last node
        while (fast.next) {
            fast = fast.next;
            slow = slow.next;
        }

        // 3. Remove the target node
        slow.next = slow.next.next;

        return dummy.next;
    }
}

