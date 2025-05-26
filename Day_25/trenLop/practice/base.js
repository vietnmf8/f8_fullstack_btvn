export class Base {
    #id;
    #name;

    constructor(id, name) {
        // Khởi tạo thuộc tính
        this.#id = id;
        this.#name = name;
    }

    /* Getter: Phương thức lấy */
    // Lấy Id
    getId() {
        return this.#id;
    }
    // Lấy Name
    getName() {
        return this.#name;
    }


    /* Setter: Phương thức thay đổi */
    // Thay đổi Id
    setId(id) {
        this.#id = id;
    }
    // Thay đổi Name
    setName(name) {
        this.#name = name;
    }

    // toString
    toString() {
        return `Base = (id: ${this.#id}, name: ${this.#name})`;
    }
}