/* Gui tin nhan:
* - SMS
* - Email
*  */
// Kieu Enum -> khong phai sua nhieu cho
enum SendType {
    SMS = 'sms',
    MAIL = 'mail'
}
/* Class cha */
interface MessageService {
    send: () => void
}

// SMS
class SmsService implements  MessageService {
    send() {
        console.log('Sending SMS')
    }
}
// EMAIL
class EmailService implements  MessageService {
    send() {
        console.log('Sending Email')
    }
}

// Dependencies Inversion
const onSend = (msgService: MessageService) => {
    msgService.send(); // Goi truc tiep kieu Class chung
}

onSend(new SmsService());
onSend(new EmailService());
