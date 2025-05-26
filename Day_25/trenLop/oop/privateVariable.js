// Javascript không dành cho lập trình hướng đối tượng


/* Class */
class Person {
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

/* Tính KẾ THỪA -> Male thừa hưởng tất cả các thuộc tính Person */
class Male extends Person {
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

class BoyStudent extends Male {

}

const duc = new BoyStudent('duc', 22, 'quynh')

duc.setName('viet');
duc.setGirlFriend('duc')
console.log(duc.getName(), duc.getGirlFriend())




