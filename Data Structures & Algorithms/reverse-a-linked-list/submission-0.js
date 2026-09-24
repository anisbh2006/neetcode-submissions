class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null;
        let curr = head;

        while (curr !== null) {
            let next = curr.next; // Save the next node
            curr.next = prev;     // Reverse the link
            prev = curr;          // Move prev forward
            curr = next;          // Move curr forward
        }

        return prev;
    }
}