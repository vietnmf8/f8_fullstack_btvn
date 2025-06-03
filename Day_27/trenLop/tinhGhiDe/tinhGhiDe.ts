class Animal {
    eat() {
        console.log('động vật ăn')
    }

    go() {
        console.log('động vật đi')
    }

    doSomething() {
        this.go()
        this.eat()
    }
}


class Cat extends Animal {
    go() {
        console.log('con mèo đi')
    }
}

const cat = new Cat()
cat.doSomething()