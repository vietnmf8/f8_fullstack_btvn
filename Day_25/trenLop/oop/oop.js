// Javascript không dành cho lập trình hướng đối tượng

// const initPerson = (name, age) => {
//     return {
//         name: name,
//         age: age,
//         eat() {
//             console.log('eat')
//         }
//     }
// }
//
// console.log()
//
// const duc = {
//     ...initPerson('quynh', 22), // Rải
//     eat() { // ES6 rút gọn
//         console.log('eat')
//     },
//     girlFriend: initPerson('quynh', 22)
// }

/* Class */
class Person {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log('eat Person')
    }
}

/* Tính kế thừa -> Male thừa hưởng tất cả các thuộc tính Person */
class Male extends Person {
    girlFriend;
    constructor(name, age, girlFriend) {
        super(name, age);
        this.girlFriend = girlFriend;
    }

    eat() {
        super.eat();            // Giả sử muốn gọi eat Person -> gọi từ cha
        console.log('eat Male')  /* Ghi đè phương thức của cha -> TÍNH ĐA HÌNH */
    }
}

class BoyStudent extends Male {

}

const duc = new BoyStudent('duc', 22, 'quynh')
duc.name = 'viet'
console.log(duc) // -> Không bảo mat vì dễ dàng sửa đổi




