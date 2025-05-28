/* Gui tin nhan:
* - SMS
* - Email
*  */
// Kieu Enum -> khong phai sua nhieu cho
enum SendType {
    SMS = 'sms',
    MAIL = 'mail'
}

class MessageService {
    //Thay vi type: string -> dat ten cu the 'SMS' | 'EMAIL'
    // Kieu: enum
    send(sendType: SendType) {
        if (sendType === SendType.SMS) {
            console.log('Sending SMS')
        } else {
            console.log('Sending EMAIL')
        }
    }
}

// SMS
class SmsService {
    send() {
        console.log('Sending SMS')
    }
}
// EMAIL
class EmailService {
    send() {
        console.log('Sending Email')
    }
}


const main = () => {
    const messageService = new MessageService();
    messageService.send(SendType.SMS);
}

main()
