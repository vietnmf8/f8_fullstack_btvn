/* Class cha */
interface MessageService {
    send: () => void
}

interface Test {
    doTest: () => void
}

// Da ke thua (da trien khai) Inheritance
class SmsService implements  MessageService, Test {
    send() {
        console.log('Sending SMS')
    }
    doTest() {
        console.log('do Index')
    }
}

// Vua extend - vua trien khai
class SnsService extends SmsService implements MessageService, Test {}