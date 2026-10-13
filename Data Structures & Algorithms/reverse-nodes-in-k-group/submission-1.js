
class Solution {
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        const dummy = new ListNode(0, head);
        let groupPrev = dummy;

        while (true) {
            // Find the kth node of the current group
            let kth = groupPrev;

            for (let i = 0; i < k; i++) {
                kth = kth.next;

                if (kth === null) {
                    return dummy.next;
                }
            }

            const groupNext = kth.next;

            // Reverse the current group
            let prev = groupNext;
            let curr = groupPrev.next;

            while (curr !== groupNext) {
                const temp = curr.next;
                curr.next = prev;
                prev = curr;
                curr = temp;
            }

            // Connect the reversed group
            const temp = groupPrev.next;
            groupPrev.next = kth;
            groupPrev = temp;
        }
    }
}
