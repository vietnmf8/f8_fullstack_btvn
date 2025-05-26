/* Class */
export class Person {
    #name;
    #age;

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }
    /* TÍNH ĐÓNG GÓI - tạo ra các phương thức */
    // Tạo phương thực để lấy ra name
    getName() {
        return this.#name;
    }
    // Tạo phương thực để lấy ra age
    getAge() {
        return this.#age;
    }

    // Sửa lại thuộc tính
    setName(name) {
        this.#name = name;
    }

    setAge(age) {
        this.#age = age;
    }

    eat() {
        console.log('eat Person')
    }
}