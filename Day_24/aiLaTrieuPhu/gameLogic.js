import { questions, prizeMap } from "./const.js";
import {
    checkBtnRef, helpFiftyBtnRef, helpAudienceBtnRef,
    helpPhoneBtnRef, helpExpertBtnRef, restartBtnRef
} from "./references.js";
import {
    renderQuestionWithOptions, updateTimerDisplay, highlightSelectedOption,
    showAnswerFeedback, disableAllOptions, enableAllOptions, renderPrizeLadder,
    updateHelpButtonsAvailability, hideTwoIncorrectOptions, displayAudiencePoll,
    displayPhoneSuggestion, displayExpertAdvice, showGameOverScreen, resetGameScreen
} from "./render.js";

/* Khai báo biến */
// Chỉ số câu hỏi hiện tại
let currentQuestionIndex = 0;
// Thời gian đếm ngược
let timeLeft = 30;
// Biến lưu interval
let timerInterval = null;
// Gọi ra phần tu Lựa chọn của người chơi
let selectedOptionRefGlobal = null;
// Giá trị của lựa chọn của người choi
let selectedOptionValueGlobal = null;
// Trạng thái game có đang diễn ra hay không
let gameActive = false; //true: đang chơi - false: đã kết thúc hoặc chưa bắt đầu
// Trạng thái của các sự trợ giúp
let helpUsed = { fiftyFifty: false, audience: false, phone: false, expert: false };
// Mảng chứa 15 câu hỏi
let currentQuestionsSet = [];

/* Khởi tạo hàm lượt chơi mới */
const startGame = () => {
    currentQuestionIndex = 0;
    timeLeft = 30;
    selectedOptionRefGlobal = null;
    selectedOptionValueGlobal = null;
    gameActive = true;
    helpUsed = { fiftyFifty: false, audience: false, phone: false, expert: false };

    // Lấy 15 câu hỏi đầu tiên từ ngân hàng câu hỏi
    currentQuestionsSet = questions.slice(0, 15);
    if (currentQuestionsSet.length < 15) { // Cần ít nhất 15 câu hỏi để chơi theo format
        console.error("Không đủ 15 câu hỏi trong ngân hàng để bắt đầu game!");
        showGameOverScreen("Lỗi", `Cần 15 câu hỏi, hiện có ${currentQuestionsSet.length} câu.`, 0);
        checkBtnRef.style.display = 'none'; // Ẩn nút check nếu không đủ câu
        return;
    }
    if (currentQuestionsSet.length === 0) {
        showGameOverScreen("Lỗi", "Không có câu hỏi nào trong ngân hàng.", 0);
        checkBtnRef.style.display = 'none';
        return;
    }

    // Gọi hàm reset trong render.js
    resetGameScreen();
    displayQuestion(); // Sẽ gọi renderQuestionWithOptions và các hàm render khác
    // Truyền số thứ tự câu hỏi (currentQuestionIndex + 1)
    renderPrizeLadder(currentQuestionIndex + 1);
    // Cập nhật trạng thái của các nút trợ giúp
    updateHelpButtonsAvailability(currentQuestionIndex + 1, helpUsed);
    // Gọi hàm đếm ngược
    startTimer();
};

/* Màn hình câu hỏi */
const displayQuestion = () => {
    // currentQuestionIndex (0-14)
    // Nếu câu hỏi hiện tại mà lon hơn mảng câu hỏi 15 câu - WIN!!
    if (currentQuestionIndex >= currentQuestionsSet.length) { // Đã hết 15 câu
        handleCorrectAnswer(true); // isFinalWin = true
        return;
    }
    // Đặt câu hỏi là số thứ tự câu trong mảng currentQuestionsSet
    const question = currentQuestionsSet[currentQuestionIndex];
    // Kích hoạt trạng thái của các lựa chọn
    enableAllOptions();
    // Truyền số thứ tự câu (currentQuestionIndex + 1) cho tiêu đề
    // GỌi hàm render khói câu hỏi và lựa chọn
    renderQuestionWithOptions(question, currentQuestionIndex + 1, handleOptionClick);

    // Gọi phần tử và giá trị của lựa chọn của người chơi là null
    selectedOptionRefGlobal = null;
    selectedOptionValueGlobal = null;
    highlightSelectedOption(null); // Bỏ highlight ở các lựa chọn câu trước
};

/* Tạo hàm click */
const handleOptionClick = (optionValue, optionRef) => {
    // Nếu game không hoạt động hoặc lựa chọn đang ở trạng thái disable
    if (!gameActive || optionRef.classList.contains('disabled')) return;
    // Lưu lại lựa chọn của người dùng
    selectedOptionRefGlobal = optionRef;
    selectedOptionValueGlobal = optionValue;
    // Đồng thời hightlight lên đáp án của người dùng
    highlightSelectedOption(optionRef);
};


/* Gọi hàm đếm ngược */
const startTimer = () => {
    timeLeft = 30; // Reset thời gian về 30s
    updateTimerDisplay(timeLeft); // Hiển thị thời gian lên giao diện
    clearInterval(timerInterval);  // Xoá interval cũ (nếu có) -> tránh chạy nhiều timer cùng lúc
    // Thiết lap interval mới
    timerInterval = setInterval(() => {
        // Cứ sau 1s -> hành động timeLeft-- được xảy ra
        timeLeft--;
        //DDong thời hiển thị lại thời gian lên giao diện
        updateTimerDisplay(timeLeft);
        // Nếu thời gian nhỏ hơn 0
        if (timeLeft <= 0) {
            // Dừng timer
            clearInterval(timerInterval);
            if (gameActive) { // Chỉ xử lý hết giờ nếu game đang active và chưa có đáp án nào được check
                handleIncorrectAnswer("Hết giờ!");
            }
        }
    }, 1000);
};

/* Hàm tạm dừng đếm thời gian */
const stopTimer = () => {
    clearInterval(timerInterval); // tạm dừng đếm thời gian
};

/* Tạo hàm kiểm tra đáp án */
const checkAnswer = () => {
    // Nếu game đang không chạy và không có đáp án được chọn
    if (!gameActive || !selectedOptionValueGlobal) {
        // Nếu game đang chạy và không có đáp án nào được chọn
        if (gameActive && !selectedOptionValueGlobal) {
            alert("Vui lòng chọn một đáp án!");
        }
        // Thoát hàm
        return;
    }
    // Tạm dừng thời gian
    stopTimer();
    // Vô hiệu hoá các đáp án
    disableAllOptions();
    // gameActive = false; // Sẽ được đặt lại trong handleCorrect/Incorrect

    // Gọi ra câu hỏi hiện tại
    const question = currentQuestionsSet[currentQuestionIndex];
    // Cắm cờ kiểm tra đáp án
    const isCorrect = selectedOptionValueGlobal === question.correctAns;

    // Hiện ra đáp án đúng
    // Truyen 2 tham số lựa chon của người chơi, và đáp án đúng
    showAnswerFeedback(selectedOptionValueGlobal, question.correctAns);
    question.userAns = selectedOptionValueGlobal;
    question.isCorrect = isCorrect;

    // Nếu đúng
    if (isCorrect) {
        setTimeout(() => {
            // Nếu là câu cuối cùng (index 14) thì isFinalWin là true
            handleCorrectAnswer(currentQuestionIndex === currentQuestionsSet.length - 1);
        }, 1500);
    }
    // Nếu sai
    else {
        setTimeout(() => {
            handleIncorrectAnswer("Đáp án không chính xác!");
        }, 1500);
    }
};

/* Hàm kiểm tra có win hay không */
const handleCorrectAnswer = (isFinalWin) => {
    // Nếu trả lời đúng ở câu cối
    if (isFinalWin) {
        // currentQuestionIndex là 14 (câu 15)
        const finalPrize = prizeMap[currentQuestionIndex + 1]; // Lấy tiền thưởng câu 15
        showGameOverScreen("Chúc mừng!", "Bạn đã trở thành TRIỆU PHÚ!", finalPrize);
        // Dừng game
        gameActive = false;
    }
    // Nếu không phải câu cuối cùng
    else {
        // Tiếp tục cau tiếp theo
        currentQuestionIndex++;
        gameActive = true; // Cho phép chọn đáp án câu mới
        // Cho phép hiện câu mới đồng thời với số thứ tự câu và phần thưởng
        displayQuestion();
        renderPrizeLadder(currentQuestionIndex + 1);
        //Cập nhật trạng thái của các sự trợ giúp
        updateHelpButtonsAvailability(currentQuestionIndex + 1, helpUsed);
        // Bắt đầu lại thời gian
        startTimer();
    }
};

/* Hàm xử lý khi người chơi trả lời sai */
const handleIncorrectAnswer = (reason) => {
    gameActive = false; // Game kết thúc
    let prizeMoney = 0;
    // currentQuestionIndex là chỉ số của câu VỪA TRẢ LỜI SAI (0-14)

    if (currentQuestionIndex >= 10) { // Sai từ câu 11 (index 10) -> câu 15 (index 14)
        prizeMoney = prizeMap[10]; // Nhận tiền mốc câu 10
    } else if (currentQuestionIndex >= 5) { // Sai từ câu 6 (index 5) -> câu 10 (index 9)
        prizeMoney = prizeMap[5]; // Nhận tiền mốc câu 5
    } else { // Sai từ câu 1 (index 0) -> câu 5 (index 4)
        prizeMoney = 0;
    }
    showGameOverScreen("Rất tiếc!", `${reason} Bạn dừng cuộc chơi.`, prizeMoney);
};

// --- XỬ LÝ TRỢ GIÚP ---
/* Kích hoạt sự trợ giúp */
const activateHelp = (helpTypeCallback, helpFlag) => {
    // Điều kiện chung: từ câu 6 trở đi (index 5) và trợ giúp chưa dùng
    if (helpUsed[helpFlag] || (currentQuestionIndex + 1) < 6) return;

    helpTypeCallback(); // Gọi hàm xử lý logic cụ thể của trợ giúp

    // Đánh dấu sự trợ giúp đã được sử dụng
    helpUsed[helpFlag] = true;
    updateHelpButtonsAvailability(currentQuestionIndex + 1, helpUsed);
};

// Sự trợ giúp 50 - 50
const fiftyFiftyLogic = () => {
    // Gọi đến cau hỏi hiện tại
    const question = currentQuestionsSet[currentQuestionIndex];
    // Gọi ra đáp án đúng
    const correctAnswer = question.correctAns;
    // Gọi ra các lựa chọn
    const options = ['a', 'b', 'c', 'd'];
    // Tạo ra mảng đã Lọc ra lựa chọn khác với đáp án đúng
    let incorrectOptions = options.filter(opt => opt !== correctAnswer);
    // Xáo trộn mang đáp án sai để chọn ngẫu nhiên 2 cái để ẩn
    incorrectOptions.sort(() => 0.5 - Math.random());
    const optionsToHide = incorrectOptions.slice(0, 2);
    // Gọi hàm để ẩn
    hideTwoIncorrectOptions(optionsToHide);
};


// Sự trợ giúp gọi khán giả
const audiencePollLogic = () => {
    const question = currentQuestionsSet[currentQuestionIndex];
    const correctAnswer = question.correctAns;
    const options = ['a', 'b', 'c', 'd'];
    // Tạo ra đối tượng các đáp án khán giả đã trả lời
    let pollResults = {}; // Lưu kết quả dạng {a: %...}
    let remainingPercentage = 100;
    // Ưu tiên các đáp án đúng có tỷ lệ cao hơn (từ 50% - 80%)
    let correctAnswerPercentage = Math.floor(Math.random() * 31) + 50; // 50% - 80%

    correctAnswerPercentage = Math.min(correctAnswerPercentage, remainingPercentage);
    pollResults[correctAnswer] = correctAnswerPercentage;
    remainingPercentage -= correctAnswerPercentage;

    // Chia % còn lại cho các đáp án sai
    // Duyệt từng phần tử trong các option khác với đáp án đúng (3 phần tử)
    const otherOptions = options.filter(opt => opt !== correctAnswer);
    // Duyệt phần tử trong 3 phần tử đó
    otherOptions.forEach((opt, index) => {
        // Đáp án sai cuối cùng nhận hết phần còn lại
        if (index === otherOptions.length - 1) {
            pollResults[opt] = remainingPercentage;
        } else {
            // Random % cho các đáp án sai khác, không vượt quá phần còn lại
            let percentage = Math.floor(Math.random() * (remainingPercentage / (otherOptions.length - index) +1 ));
            percentage = Math.min(percentage, remainingPercentage);
            pollResults[opt] = percentage;
            remainingPercentage -= percentage;
        }
    });
    // Đảm bảo tổng là 100% do làm tròn (cộng dồn phần dư vào đáp án đúng nếu có)
    // Cộng dồn phần dư vào một đáp án nào đó (ví dụ đáp án đúng, hoặc đáp án đầu tiên trong các đáp án sai)
    let sumCheck = Object.values(pollResults).reduce((sum, val) => sum + val, 0);
    if (sumCheck !== 100 && pollResults[correctAnswer] !== undefined) {
        pollResults[correctAnswer] += (100 - sumCheck);
        if(pollResults[correctAnswer] < 0) { // Nếu bị âm, phân bổ lại
            // Logic phân bổ lại có thể phức tạp, tạm thời đảm bảo không âm
            // và các giá trị khác không quá thấp
            let deficit = Math.abs(pollResults[correctAnswer]);
            pollResults[correctAnswer] = 0;
            // Chia đều thâm hụt cho các lựa chọn khác còn lại
            const otherOptsForDeficit = options.filter(o => o !== correctAnswer && pollResults[o] > 0);
            if(otherOptsForDeficit.length > 0) {
                let share = Math.floor(deficit / otherOptsForDeficit.length);
                otherOptsForDeficit.forEach(op => pollResults[op] -= share);
                // Làm tròn lại tổng
                sumCheck = Object.values(pollResults).reduce((sum, val) => sum + val, 0);
                if(sumCheck !== 100 && options.includes(correctAnswer) && pollResults[otherOptions[0]] !== undefined) { // Cộng vào một lựa chọn khác
                    pollResults[otherOptions[0]] += (100 - sumCheck);
                }
            }
        }
    }

    // Gọi hàm render để hiển thị
    displayAudiencePoll(pollResults);
};


/* Logic gọi điện thoại ngẫu nhiên */
const phoneAFriendLogic = () => {
    const question = currentQuestionsSet[currentQuestionIndex];
    const correctAnswer = question.correctAns;
    const options = ['a', 'b', 'c', 'd'];
    // Ví dụ 75% cơ hội đúng
    let suggestion = (Math.random() < 0.75) ? correctAnswer : options.filter(opt => opt !== correctAnswer)[Math.floor(Math.random() * 3)];
    // GỌi hàm
    displayPhoneSuggestion(suggestion);
};

const expertAdviceLogic = () => {
    const question = currentQuestionsSet[currentQuestionIndex];
    const correctAnswer = question.correctAns;
    const options = ['a', 'b', 'c', 'd'];
    // Ví dụ 65% cơ hội đúng
    let advice = (Math.random() < 0.65) ? correctAnswer : options.filter(opt => opt !== correctAnswer)[Math.floor(Math.random() * 3)];
    // Gọi hàm
    displayExpertAdvice(advice);
};
// Gán sự kiện cho các sự trợ giúp
helpFiftyBtnRef.addEventListener('click', () => activateHelp(fiftyFiftyLogic, 'fiftyFifty'));
helpAudienceBtnRef.addEventListener('click', () => activateHelp(audiencePollLogic, 'audience'));
helpPhoneBtnRef.addEventListener('click', () => activateHelp(phoneAFriendLogic, 'phone'));
helpExpertBtnRef.addEventListener('click', () => activateHelp(expertAdviceLogic, 'expert'));
// Gám sự kiện cho nút Submit, và nút chơi lại
checkBtnRef.addEventListener('click', checkAnswer);
restartBtnRef.addEventListener('click', startGame);

startGame();