import {Base} from "./base.js";

export class Product extends Base{
    #price;

    constructor(id, name, price) {
        // Khởi tạo thuộc tính
        super(id, name);
        this.#price = price;
    }

    /* Getter: Phương thức lấy */
    // Lấy giá
    getPrice() {
        return this.#price;
    }

    /* Setter: Phương thức thay đổi */

    // Thay đổi giá
    setPrice(price) {
        this.#price = price;
    }

    // toString
    toString() {
        return `Product = (id: ${this.getId()}, name: ${this.getName()}, price: ${this.#price})`;
    }
}