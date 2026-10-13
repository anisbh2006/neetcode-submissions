
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();

        // Dummy nodes to simplify insertion and removal
        this.left = new ListNode(0, 0);  // Least recently used
        this.right = new ListNode(0, 0); // Most recently used

        this.left.next = this.right;
        this.right.prev = this.left;
    }

    // Remove a node from the linked list
    remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    // Insert a node right before the right dummy
    insert(node) {
        const prev = this.right.prev;

        prev.next = node;
        node.prev = prev;

        node.next = this.right;
        this.right.prev = node;
    }

    get(key) {
        if (!this.cache.has(key)) {
            return -1;
        }

        const node = this.cache.get(key);

        // Mark as most recently used
        this.remove(node);
        this.insert(node);

        return node.value;
    }

    put(key, value) {
        if (this.cache.has(key)) {
            this.remove(this.cache.get(key));
        }

        const node = new ListNode(key, value);
        this.cache.set(key, node);
        this.insert(node);

        if (this.cache.size > this.capacity) {
            // Evict the least recently used node
            const lru = this.left.next;
            this.remove(lru);
            this.cache.delete(lru.key);
        }
    }
}

class ListNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}
