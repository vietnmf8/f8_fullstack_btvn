/* Tính KẾ THỪA -> Male thừa hưởng tất cả các thuộc tính Person */
import {Person} from "./person.js";

export class Male extends Person {
    #girlFriend;
    constructor(name, age, girlFriend) {
        super(name, age);
        this.#girlFriend = girlFriend;
    }

    getGirlFriend() {
        return this.#girlFriend;
    }

    setGirlFriend(girlFriend) {
        this.#girlFriend = girlFriend;
    }


    eat() {
        super.eat();            // Giả sử muốn gọi eat Person -> gọi từ cha
        console.log('eat Male')  /* Ghi đè phương thức của cha -> TÍNH ĐA HÌNH */
    }
}