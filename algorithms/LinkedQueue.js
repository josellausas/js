"use strict";
/**
 * LinkedQueue
 *
 * Operation    | Runtime
 * -------------|---------
 * enqueue(x) | O(1)
 * dequeue()  | O(1)
 * length     | O(1)
 * remove(node)     | O(1)
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Knows how to remove itself from a linked list
var QueueNode = /** @class */ (function () {
    function QueueNode(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
    QueueNode.prototype.remove = function () {
        if (this.prev) {
            this.prev.next = this.next;
        }
        this.next.prev = this.prev;
        this.data = null;
    };
    return QueueNode;
}());
var LinkedQueue = /** @class */ (function () {
    function LinkedQueue() {
        this.head = this.tail = null;
        this.length = 0;
    }
    LinkedQueue.prototype.enqueue = function (data) {
        var n = new QueueNode(data);
        if (!this.head) {
            this.head = this.tail = n;
        }
        else {
            this.tail.next = n;
            n.prev = this.tail;
            this.tail = n;
        }
        this.length++;
        return n; // Must be used to remove in O(1)
    };
    LinkedQueue.prototype.dequeue = function () {
        if (!this.head)
            return null;
        var data = this.head.data;
        if (this.head == this.tail) {
            this.head = this.tail = null;
            this.length = 0;
        }
        else {
            this.head = this.head.next;
            this.head.prev = null;
            this.length--;
        }
        return data;
    };
    LinkedQueue.prototype.remove = function (node) {
        node.remove();
        this.length--;
    };
    LinkedQueue.prototype.enqueueAtPosition = function (pos, data) {
        if (pos > this.length)
            return null;
        var n = new QueueNode(data);
        var here = this.head;
        for (var i = 0; i < pos; i++) {
            here = here.next;
        }
        if (!here) {
            return this.enqueue(data);
        }
        else {
            if (here.prev) {
                here.prev.next = n;
                n.prev = here.prev;
            }
            here.prev = n;
            n.next = here;
        }
        return n;
    };
    return LinkedQueue;
}());
exports.LinkedQueue = LinkedQueue;
