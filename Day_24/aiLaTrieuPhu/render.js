import {
    questionTitleRef, questionOptionsRef, timerRef, prizeListRef,
    helpFiftyBtnRef, helpAudienceBtnRef, helpPhoneBtnRef, helpExpertBtnRef,
    gameOverMessageRef, finalMessageTextRef, finalPrizeAmountRef, gameOverTitleRef,
    audiencePollResultsRef, phoneSuggestionRef, expertSuggestionRef
} from "./references.js";
import { prizeMap } from "./const.js"; // Cần prizeMap để render thang tiền thưởng

/* Tạo hàm render khối Câu hỏi và lựa chọn */
export const renderQuestionWithOptions = (questionObj, questionDisplayNumber, handleOptionClickCallback) => {
    // Đặt nội dung trong tiêu đề khối câu hỏi (số thứ tự : Nội dung)
    questionTitleRef.innerText = `Câu ${questionDisplayNumber}: ${questionObj.question}`;
    // Duyệt qua các lựa trọn trong khối câu hỏi
    questionOptionsRef.forEach(optionRef => {
        // Truy cập thuộc tính [data-value] cho mỗi lựa chọn
        const optionValue = optionRef.getAttribute('data-value');
        // Thêm nội dung IN HOA cho các lựa chọn VD: A: TP. Hồ Chí Minh
        optionRef.innerText = `${optionValue.toUpperCase()}: ${questionObj[optionValue]}`;
        console.log(optionRef);

        // Reset styles and visibility for 50/50
        optionRef.classList.remove('selected', 'correct', 'incorrect', 'disabled', 'hidden-by-5050');
        optionRef.style.display = 'block'; // Đảm bảo hiển thị lại nếu bị ẩn bởi 50/50 trước đó

        // Tạo sự kiện Click cho từng lựa chọn
        optionRef.onclick = () => handleOptionClickCallback(optionValue, optionRef);
    });

    // Reset các sự trợ giúp
    audiencePollResultsRef.style.display = 'none';
    audiencePollResultsRef.innerHTML = '';
    phoneSuggestionRef.style.display = 'none';
    phoneSuggestionRef.innerHTML = '';
    expertSuggestionRef.style.display = 'none';
    expertSuggestionRef.innerHTML = '';
};

/* Tạo hàm cập nhật thời gian -> Truyền tham số là thời gian đếm ngược */
export const updateTimerDisplay = (timeLeft) => {
    // Nội dung của thời gian đếm ngược
    timerRef.innerText = timeLeft;
};

/* Tạo hàm làm nổi bật lựa chọn của người chơi */
export const highlightSelectedOption = (selectedOptionRef) => {
    // Duyệt từng phần tử của khối lựa chọn -> gỡ class = "selected"
    questionOptionsRef.forEach(opt => opt.classList.remove('selected'));
    // Nếu phần tử được lựa chọn -> Thêm class = "selected"
    if (selectedOptionRef) {
        selectedOptionRef.classList.add('selected');
    }
};

/* Tạo hàm show Đáp án đúng */
// Tạo hàm hiện đáp án đúng -> truyền vào đáp án được chọn và đáp án đúng
export const showAnswerFeedback = (selectedValue, correctValue) => {
    // Duyệt qua từng lựa chọn trong khối lựa chọn
    questionOptionsRef.forEach(optionRef => {
        // Truy cập thuộc tính data-value
        const optionValue = optionRef.getAttribute('data-value');
        // Gỡ toàn bộ trạng class = "selected"
        optionRef.classList.remove('selected');

        // Nếu đáp án được chọn === đáp án đúng -> Thêm class = "correct"
        if (optionValue === correctValue) {
            optionRef.classList.add('correct');
        }
        // Nếu đáp án được chọn !== đáp án đúng -> Thêm class = "incorrect"
        if (optionValue === selectedValue && selectedValue !== correctValue) {
            optionRef.classList.add('incorrect');
        }
    });
};

/* Hàm vô hiệu hoá các sự lựa chọn */
// Tạo hàm vô hiệu hoá các sự lựa chọn
export const disableAllOptions = () => {
    // Duyệt từng phần tử trong khối lựa chọn
    questionOptionsRef.forEach(optionRef => {
        // Huỷ bọn sự kiện onclick
        optionRef.onclick = null;
        // Thêm class = "disabled"
        optionRef.classList.add('disabled');
    });
};

/* Hàm bật lại các sự lựa chọn */
export const enableAllOptions = () => {
    // Duyệt từng phần tử trong khối lựa chọn
    questionOptionsRef.forEach(optionRef => {
        // Gỡ class = "disable"
        optionRef.classList.remove('disabled');
        // Event listeners will be re-bound by renderQuestionWithOptions
    });
};




/* Render khối theo dõi câu hỏi và tiền thường */
// Truyền số thứ tự câu hỏi
export const renderPrizeLadder = (currentQuestionSequenceNum) => {
    // Đặt nội dung bên trong khối phần thưởng ban đầu  = ""
    prizeListRef.innerHTML = '';
    // Sắp xếp key của prizeMap (là các số thứ tự câu 1-15) từ cao xuống thấp (câu 15 ở trên cùng)
    Object.keys(prizeMap).map(Number).sort((a, b) => b - a).forEach(sequenceNumKey => {
        // Đặt biến prizeAmount = key trong obj PrizeMap -> Phần thuong tương ứng
        const prizeAmount = prizeMap[sequenceNumKey];
        // Tạo các listItem con bên trong prizeList
        const listItem = document.createElement('li');
        // Thêm nội dung cho listItem
        listItem.innerText = `Câu ${sequenceNumKey}: ${prizeAmount.toLocaleString()} VND`;
        // Đặt cho listItem thuộc tính là data-level = số thứ tự từ 1 - 15
        listItem.dataset.level = sequenceNumKey; // data-level giờ là số thứ tự câu

        // Nếu số thứ tự câu hỏi === câu hỏi hiện tại -> Thêm class = "Phần thưởng hiện tại"
        if (sequenceNumKey === currentQuestionSequenceNum) {
            listItem.classList.add('current-prize');
        }
        // Đánh dấu các mốc quan trọng 5, 10, 15
        if (sequenceNumKey === 5 || sequenceNumKey === 10 || sequenceNumKey === 15) {
            listItem.classList.add('milestone');
        }
        // Thêm các listItem tương ứng vào prizeList
        prizeListRef.appendChild(listItem);
    });
};



/* Cập nhật trạng thái của nút trợ giúp */
// Truyền 2 tham số là câu hỏi hiện tại, trạng thái của sự trợ giúp
export const updateHelpButtonsAvailability = (currentQuestionSequenceNum, helpUsedStatus) => {
    // Khi trả lời từ câu thứ 6 -> trả về true
    const canUseHelp = currentQuestionSequenceNum >= 6;

    // Vô hiệu hoá sự trợ giúp nếu chưa trả lời đến câu 6 hoặc sự trợ giúp này đã được sử dụng
    helpFiftyBtnRef.disabled = !canUseHelp || helpUsedStatus.fiftyFifty;
    helpAudienceBtnRef.disabled = !canUseHelp || helpUsedStatus.audience;
    helpPhoneBtnRef.disabled = !canUseHelp || helpUsedStatus.phone;
    helpExpertBtnRef.disabled = !canUseHelp || helpUsedStatus.expert;
};

/* Với sự tro giúp 50 - 50 */
// Truyền vào 2 đáp án Sai
export const hideTwoIncorrectOptions = (optionsToHide) => {
    // Duyệt từng lựa chọn trong khối lựa chọn
    questionOptionsRef.forEach(optionRef => {
        // Nếu đáp án được ẩn BAO GỒM lựa chọn có data-value
        if (optionsToHide.includes(optionRef.getAttribute('data-value'))) {
            // optionRef.style.display = 'none'; // Cách cũ
            // Thêm class = "hidden-by-5050" cho lựa chọn đó
            optionRef.classList.add('hidden-by-5050'); // Cách mới dùng class CSS
        }
    });
};

/* Tại khối hiện ket quả của sự trợ giúp từ tổ tư vấn */
export const displayAudiencePoll = (pollResults) => {
    // Đặt tiêu đề cho khối hiện ket quả của tổ tư vấn
    let pollHTML = '<h4>Kết quả từ khán giả:</h4>';
    // Duyệt từng đáp án của tổ tư vấn (pollResult là một obj)
    for (const option in pollResults) {
        pollHTML += `<p>${option.toUpperCase()}: ${pollResults[option]}%</p>`;
    }
    // Thêm nội dung cho khối tổ tư vấn
    audiencePollResultsRef.innerHTML = pollHTML;
    // Hiện khối đó
    audiencePollResultsRef.style.display = 'block';
};

/* Tại khối hiện ket quả của sự trợ giúp gọi điện thoại */
export const displayPhoneSuggestion = (suggestedOption) => {
    // Thêm nội dung cho khối go diện thoại
    phoneSuggestionRef.innerHTML = `<h4>Người thân gợi ý:</h4><p>Tôi nghĩ đáp án là: ${suggestedOption.toUpperCase()}</p>`;
    // Hiện khối
    phoneSuggestionRef.style.display = 'block';
};

/* Tại khối hiện ket quả của sự trợ giúp từ chuyên gia */
export const displayExpertAdvice = (expertAdvice) => {
    expertSuggestionRef.innerHTML = `<h4>Chuyên gia tư vấn:</h4><p>Theo tôi, bạn nên chọn đáp án: ${expertAdvice.toUpperCase()}</p>`;
    expertSuggestionRef.style.display = 'block';
};


/* Tại khối hiện gameOver */
// ->  Truyền vào tiêu đề, nội dung, số tiền
export const showGameOverScreen = (title, message, prizeMoney) => {
    // Thêm tieu đề
    gameOverTitleRef.innerText = title;
    // Thêm nội dung
    finalMessageTextRef.innerText = message;
    // Thêm phần thưởng
    finalPrizeAmountRef.innerText = prizeMoney.toLocaleString(); // Đã thêm VND trong HTML
    // Hiện khối
    gameOverMessageRef.style.display = 'block';

    // Ẩn màn chơi
    document.querySelector('.question').style.display = 'none';
    document.querySelector('.check-btn').style.display = 'none';
    document.getElementById('help-container').style.display = 'none';
    document.getElementById('timer-container').style.display = 'none';
    document.getElementById('prize-ladder-container').style.display = 'none';
};


/* Thực hiện chơi lai */
// Tạo hàm chơi lại
export const resetGameScreen = () => {
    // Ẩn màn Game Over
    gameOverMessageRef.style.display = 'none';
    // Hiện lại màn chơi
    document.querySelector('.question').style.display = 'block';
    document.querySelector('.check-btn').style.display = 'block';
    document.getElementById('help-container').style.display = 'block';
    document.getElementById('timer-container').style.display = 'block';
    document.getElementById('prize-ladder-container').style.display = 'block';

    // Duyệt từng lựa chọn
    questionOptionsRef.forEach(optionRef => {
        // Hiện khối lựa chọn
        optionRef.style.display = 'block';
        // Reset, gỡ bỏ các thuộc tính
        optionRef.classList.remove('selected', 'correct', 'incorrect', 'disabled', 'hidden-by-5050');
    });
    // Bật lại các trạng thái
    enableAllOptions();
};