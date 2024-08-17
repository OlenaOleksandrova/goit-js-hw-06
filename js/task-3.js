class StringBuilder {
     #value ;

  constructor(initialValue) {
    this.#value = initialValue;
    }
    getValue() {
        return this.#value;
    }

    padEnd(str) {
        this.#value + str;
    }
}