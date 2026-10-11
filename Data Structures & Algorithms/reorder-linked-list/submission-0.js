
class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        if (!head || !head.next) return;

        // 1. Find the middle
        let slow = head;
        let fast = head;

        while (fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // 2. Reverse the second half
        let curr = slow.next;
        slow.next = null;

        let prev = null;

        while (curr) {
            let nextNode = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextNode;
        }

        // 3. Merge the two halves
        let first = head;
        let second = prev;

        while (second) {
            let nextFirst = first.next;
            let nextSecond = second.next;

            first.next = second;
            second.next = nextFirst;

            first = nextFirst;
            second = nextSecond;
        }
    }
}
