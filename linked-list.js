/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** _get(idx): retrieve node at idx. */
  _get(idx) {
    let node = this.head;
    let count = 0;

    while (node !== null && count != idx) {
      node = node.next;
      count++;
    }
    return node;
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if(this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = this.head;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if(this.tail) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = this.head;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    return this.removeAt(this.length - 1);
  }

  /** shift(): return & remove first item. */

  shift() {
    return this.removeAt(0);
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if(idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }
    return this._get(idx).val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if(idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }
    this._get(idx).val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if(idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    //remove head
    if(idx === 0) {
      let val = this.head.val;
      this.head = this.head.next;
      this.length--;
      if (this.length < 2) this.tail = this.head;
      return val;
    }
    //find previous node
    let prevNode = this._get(idx - 1);

    //remove tail
    if(idx === this.length - 1) {
      let val = prevNode.next.val;
      prevNode.next = null;
      this.tail = prevNode;
      this.length--;
      return val;
    }
    //remove from middle
    let val = prevNode.next.val;
    prevNode.next = prevNode.next.next;
    this.length--;
    return val;
  }

  /** average(): return an average of all values in the list */

  average() {
    
  }
}

module.exports = LinkedList;
