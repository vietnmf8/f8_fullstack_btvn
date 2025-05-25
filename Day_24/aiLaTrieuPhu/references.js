/* Chức năng: Truy cập các biến trong HTML */

/* Khối câu hỏi */
// Truy cập khối câu hỏi
export const questionContainerRef = document.querySelector('.question');
// Truy cập tiêu đề trong khối câu hỏi
export const questionTitleRef = document.querySelector('.question-title');
// Truy cập các lựa chọn
export const questionOptionsRef = document.querySelectorAll('.question-option'); // NodeList
// Truy cập nút Submit
export const checkBtnRef = document.querySelector('.check-btn');

/* Khối thời gian */
// Truy cập thời gian đếm ngược
export const timerRef = document.getElementById('timer');

/* Khối phần thưởng */
// Truy cập danh sách phần thưởng
export const prizeListRef = document.getElementById('prize-list');

/* Khối sự trợ giúp */
// Truy cập sự trợ giúp 50 - 50
export const helpFiftyBtnRef = document.getElementById('help-fifty');
// Truy cập sự trợ giúp từ khán giả
export const helpAudienceBtnRef = document.getElementById('help-audience');
// Truy cập sự trợ giúp gọi điện thoại cho người thân
export const helpPhoneBtnRef = document.getElementById('help-phone');
// Truy cập sự trợ giúp của tổ tư vấn
export const helpExpertBtnRef = document.getElementById('help-expert');

// Truy cập kết quả trả về -> sự trợ giúp từ khán giả
export const audiencePollResultsRef = document.getElementById('audience-poll-results');
// Truy cập kết quả trả về -> sự trợ giúp từ gọi điện cho người thân
export const phoneSuggestionRef = document.getElementById('phone-suggestion');
// Truy cập kết quả trả về -> sự trợ giúp từ tổ tư vấn
export const expertSuggestionRef = document.getElementById('expert-suggestion');

/* Khối GameOver */
// Truy cập khối GameOver
export const gameOverMessageRef = document.getElementById('game-over-message');
// Truy cập tiêu đề của khối Game Over
export const gameOverTitleRef = document.getElementById('game-over-title');
// Truy cập phần tử nội dung trong khối Game Over
export const finalMessageTextRef = document.getElementById('final-message-text');
// Truy cập phần thưởng trong khối Game Over
export const finalPrizeAmountRef = document.getElementById('final-prize-amount');
// Truy cập nút Chơi Lại trong khối Game Over
export const restartBtnRef = document.getElementById('restart-btn');