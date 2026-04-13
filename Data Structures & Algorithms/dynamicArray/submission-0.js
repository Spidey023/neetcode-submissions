class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.newArray = new Array(capacity);
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        if (i < 0 || i >= this.size) {
            throw new Error("Index out of bounds");
        }
        return this.newArray[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     */
    set(i, n) {
        if (i < 0 || i >= this.size) {
            throw new Error("Index out of bounds");
        }
        this.newArray[i] = n;
    }

    /**
     * @param {number} n
     */
    pushback(n) {
        if (this.size === this.capacity) {
            this.resize();
        }
        this.newArray[this.size] = n;
        this.size++;
    }

    /**
     * @returns {number}
     */
    popback() {
        if (this.size === 0) {
            throw new Error("Array is empty");
        }
        let val = this.newArray[this.size - 1];
        this.size--;
        return val;
    }

    /**
     * Doubles capacity
     */
    resize() {
        this.capacity *= 2;
        let newArr = new Array(this.capacity);
        for (let i = 0; i < this.size; i++) {
            newArr[i] = this.newArray[i];
        }
        this.newArray = newArr;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }
}
