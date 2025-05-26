import {Base} from "./base.js";


/* Khởi tạo đối tượng class Employee */
export class Employee extends Base{
    // Khởi tạo biến private
    #address;

    constructor(id, name, address) {
        // Khởi tạo thuộc tính
        super(id, name);
        this.#address = address;
    }

    /* Getter: Phương thức lấy */
    // Lấy địa chỉ
    getAddress() {
        return this.#address;
    }

    /* Setter: Phương thức thay đổi */
    // Thay đổi Address
    setAddress(address) {
        this.#address = address;
    }

    // toString
    toString() {
        return `Employee = (id: ${this.getId()}, name: ${this.getName()}, address: ${this.#address})`;
    }

}

// const employee = new Employee(1, 'Viet', 'Ha Noi');
// console.log(employee.getName());