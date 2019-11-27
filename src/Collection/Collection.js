/**
 *
 */
class Collection {

    /**
     *
     */
    constructor() {
        this._items = {};
    }

    /**
     *
     * @param item
     * @param identifier
     */
    add(item, identifier) {
        this._items[(identifier || item.constructor.name)] = item;
    }

    /**
     *
     * @param itemName
     * @returns {*}
     */
    get(itemName) {

        if (!this.has(itemName)) {
            throw new Error(`No such item in ${this.constructor.name}`);
        }

        return this._items[itemName];
    }

    /**
     *
     * @param itemName
     * @returns {boolean}
     */
    has(itemName) {
        return this._items.hasOwnProperty(itemName);
    }

    remove(itemName) {

        if (!this.has(itemName)) {
            return false;
        }

        delete this._items[itemName];

        return true;
    }

    /**
     *
     * @returns {{}}
     */
    getAll() {
        return this._items;
    }

}

module.exports = Collection;
