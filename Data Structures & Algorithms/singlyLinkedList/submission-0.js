class Node {
  constructor(n) {
    this.value = n;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node(null);  // sentinel node
    this.tail = this.head;       // tail starts at sentinel
    this.size = 0;
  }

  /**
   * @param {number} index
   * @return {number}
   */
  get(index) {
    if (index < 0 || index >= this.size) return -1; // out of bounds
    let curr = this.head.next; // skip sentinel
    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }
    return curr.value;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  insertHead(val) {
    const newNode = new Node(val);
    newNode.next = this.head.next;
    this.head.next = newNode;
    if (this.tail === this.head) this.tail = newNode; // list was empty
    this.size++;
    return null;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  insertTail(val) {
    const newNode = new Node(val);
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
    return null;
  }

  /**
   * @param {number} index
   * @return {boolean}
   */
  remove(index) {
    if (index < 0 || index >= this.size) return false;

    let prev = this.head;
    for (let i = 0; i < index; i++) {
      prev = prev.next;
    }
    const toDelete = prev.next;
    prev.next = toDelete.next;

    if (toDelete === this.tail) this.tail = prev; // update tail if last node
    this.size--;
    return true;
  }

  /**
   * @return {number[]}
   */
  getValues() {
    const result = [];
    let curr = this.head.next; // skip sentinel
    while (curr) {
      result.push(curr.value);
      curr = curr.next;
    }
    return result;
  }
}
