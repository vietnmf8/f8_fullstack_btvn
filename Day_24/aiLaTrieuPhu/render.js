import {questions} from "./const.js"; // Thêm ngân hàng câu hỏi
import {questionRef} from "./references.js"; // Thêm <div class="question">

/* Chức năng: Render giao diện */
/* ****************************** */

/* Tạo biến câu hỏi hiện tại */
// Giả sử câu hỏi hiện tại là câu 1
// Cần bo sung thêm next question / first question
const curQuestion = questions[0];

/* Tạo hàm hiện câu hỏi và 4 đáp án */
const onShowQuestion = () => {
    // Truy cập thẻ: <div class="question-title"></div>
    const titleRef = questionRef.querySelector('.question-title'); //Có thể lồng querySelector
    // Thêm nội dung vào thẻ question-title
    titleRef.innerText = curQuestion.question;

    // Tạo mảng chứa 4 đáp án
    ['a', 'b', 'c', 'd'].forEach(key => {
        questionRef.querySelector(`.question-option[value='${key}']`).innerText = `${key.toUpperCase()}: ${curQuestion[key]}`;
    })

    /* Tạo hàm reset Background */
    const resetBackground = () => {
        questionRef.querySelectorAll('.question-option').forEach(ref => {
            ref.style.backgroundColor = '#fff';
        })
    }


    /* Tạo sự kiện CLICK cho 4 đáp án */
    // Tạo hàm addEvent
    const addEvent = () => {
        ['a', 'b', 'c', 'd'].forEach(key => {
            // Truy cập phan tử/đáp án được chọn
            const answerRef = questionRef.querySelector(`.question-option[value='${key}']`)
            // Tạo sự kiện click cho mỗi đáp án
            answerRef.addEventListener('click', (e) => {
                // Đặt userAns = đáp án được click
                curQuestion.userAns = key;
                // Kiểm tra biến đáp án đúng nếu đáp án được chọn === đáp án đúng
                curQuestion.isCorrect = curQuestion.userAns === curQuestion.correctAns

                // Đặt background cho đáp án đúng
                resetBackground()
                answerRef.style.backgroundColor = '#ffb9b9';
                console.log(curQuestion);
            })
        })
    }
    // Gọi hàm
    addEvent();
}
onShowQuestion()



