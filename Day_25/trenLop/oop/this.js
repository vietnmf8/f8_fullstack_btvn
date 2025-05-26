const a = {
    name: 'Tin',
    getName() {
        // return a.name
        return this.name
    },
    badFriend: {
        name: 'Viet',
        getName() {
            return this.name
        }
    },
}

console.log(a.getName())
console.log(a.badFriend.getName())
// Từ khoá this the hiện chính đối tượng sinh ra nó this.name === a.name