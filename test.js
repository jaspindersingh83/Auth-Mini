
/* eslint-disable class-methods-use-this */
class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      // Do not modify anything inside of the constructor
    }
    // Wraps the given value in a node object and adds the node to the tail of the list
    // If the list is empty, the new element is considered the tail as well as the head
    // If there is one element in the list before the new element is added, the new element becomes the tail of the list
    addToTail(value) {
      const newNode = {
        value,
        next: null,
      };
      if (!this.tail) {
        this.tail = newNode;
        this.head = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
    // Removes the current head node from the list, replacing it with the next element in the list
    // Returns the value of the removed node
    removeHead() {
      const returnValue = this.head.value;
      this.head = this.head.next;
      return returnValue;
    }
    // Checks the linked list for the given value
    // Returns true if the the value is found in the list, false otherwise
    contains(value) {
      let found = false;
      let current = this.head;
      while (current.next !== null) {
        if (current.value === value) found = true;
        current = current.next;
      }
      return found;
    }
  }
  
  module.exports = { LinkedList };

// A special array class that can only store the number of items specified by the `limit` argument


class LimitedArray {
    constructor(limit) {
      // You should not be directly accessing this array from your hash table methods
      // Use the getter and setter methods included in this class to manipulate data in this class
      this.storage = [];
      this.limit = limit;
    }
  
    checkLimit(index) {
      if (typeof index !== 'number') throw new Error('The supplied index needs to be a number');
      if (this.limit <= index) {
        throw new Error('The supplied index lies out of the array\'s bounds');
      }
    }
  
    each(cb) {
      for (let i = 0; i < this.storage.length; i++) {
        cb(this.storage[i], i);
      }
    }
    // Use this getter function to fetch elements from this class
    get(index) {
      this.checkLimit(index);
      return this.storage[index];
    }
  
    get length() {
      return this.storage.length;
    }
    // Use this setter function to add elements to this class
    set(index, value) {
      this.checkLimit(index);
      this.storage[index] = value;
    }
  }
  /* eslint-disable no-bitwise, operator-assignment */
  // This is hash function you'll be using to hash keys
  // There's some bit-shifting magic going on here, but essentially, all it is doing is performing the modulo operator
  // on the given `str` arg (the key) modded by the limit of the limited array
  // This simply ensures that the hash function always returns an index that is within the boundaries of the limited array
  const getIndexBelowMax = (str, max) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) + hash + str.charCodeAt(i);
      hash = hash & hash;
      hash = Math.abs(hash);
    }
    return hash % max;
  };
  
  module.exports = {
    LimitedArray,
    getIndexBelowMax,
  };


/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */


class HashTable {
  constructor(limit = 8) {
    this.limit = limit;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }

  resize() {
    this.limit *= 2;
    const oldStorage = this.storage;
    console.log(oldStorage.length)
    this.storage = new LimitedArray(this.limit);
    const keyVals = [];
    console.log(oldStorage.length)
    for (let i = 0; i < oldStorage.length; i++) {
      if (oldStorage.storage[i] !== undefined) {
        let currentNode = oldStorage.storage[i].head;
        while (currentNode !== null) {
          keyVals.push([currentNode.value[0], currentNode.value[1]]);
          currentNode = currentNode.next;
        }
      }
    }
    for (let j = 0; j < keyVals.length; j++) {
      this.insert(keyVals[j][0], keyVals[j][1]);
    }
  }

  capacityIsFull() {
    let fullCells = 0;
    this.storage.each((bucket) => {
      if (bucket !== undefined) fullCells++;
    });
    return fullCells / this.limit >= 0.75;
  }

  // Adds the given key, value pair to the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // If no bucket has been created for that index, instantiate a new bucket and add the key, value pair to that new bucket
  // If the key already exists in the bucket, the newer value should overwrite the older value associated with that key
  insert(key, value) {
    if (this.capacityIsFull()) this.resize();
    const index = getIndexBelowMax(key.toString(), this.limit);
    if (!this.storage.get(index)) {
      const bucket = new LinkedList();
      bucket.addToTail([key, value]);
      this.storage.set(index, bucket);
    }
    if (this.storage.get(index)) {
      const bucket = this.storage.get(index);
      let keyFound = false;
      let currentNode = bucket.head;
      while ((currentNode.next !== null) && (!keyFound)) {
        if (currentNode.value[0] === key) {
          currentNode.value[1] = value;
          keyFound = true;
        }
        currentNode = currentNode.next;
      }
      if (!keyFound) {
        bucket.addToTail([key, value]);
      }
    }
  }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    const bucket = this.storage.get(index);
    // here's it's kind of unclear
    // should I return undefined or false if nothing is found?
    if (bucket) {
      let found = false;
      if (bucket.head.value[0] === key) {
        bucket.removeHead();
        found = true;
      }
      let previousNode = bucket.head;
      let currentNode = previousNode.next;
      while ((currentNode !== null) && (!found)) {
        if (currentNode.value[0] === key) {
          previousNode.next = currentNode.next;
          currentNode.next = null;
          found = true;
          if (bucket.tail === currentNode) {
            bucket.tail = previousNode;
          }
        }
        if (!found) {
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
      }
    }
  }
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    const bucket = this.storage.get(index);
    if (bucket) {
      let scannedNode = bucket.head;
      let found = false;
      while (scannedNode.next !== null) {
        if (scannedNode.value[0] === key) {
          found = true;
          return scannedNode.value[1];
        }
        scannedNode = scannedNode.next;
      }
      if (!found) {
        return undefined;
      }
    }
  }
}

const myHash = new HashTable();
myHash.insert('Sean', 'An aspiring developer');
myHash.insert('1', 'one');
myHash.insert('2', 'two');
myHash.insert('3', 'three');
myHash.insert('4', 'one');
myHash.insert('5', 'two');
myHash.insert('6', 'three');
// myHash.insert('7', 'eight');
// myHash.insert('8', 'three');
// myHash.insert('9', 'eight');
console.log(myHash.storage);

module.exports = HashTable;