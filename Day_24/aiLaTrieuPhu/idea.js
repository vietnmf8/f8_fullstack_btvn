// Game Ai là triệu phú:
// - 15 câu hỏi - độ khó tăng dần
//      + Sẽ có một ngân hàng câu hỏi, không được trùng nhau
//      + Mỗi câu có 4 đáp án: trong đó:
//          / Có 1 đáp án đúng
//          / Có 1 đáp án người chơi chọn

// - Ban đầu có 3 sự trợ giúp, từ câu 6 trở đi sẽ có thêm 1 sự trợ giúp
//      + Hỏi ý kiến khán giả -> Random theo tỉ lệ %
//      + 50 - 50
//      + Gọi điện cho người thân -> Random
//      + Tổ tư vấn tại chỗ -> Random

// - Có 3 mốc quan trọng: 5 - 10 - 15
// - Có tiền thưởng tại mỗi câu

// - Màn hình chơi:
//      + 1 box câu hỏi
//      + 4 box hiện đáp án
//      + 1 box hiện trợ giúp
//      + 1 box hiện danh sách số câu - tiền thưởng tương ứng
// - Thêm câu hỏi (màn hình riêng) -> Không làm
// - Bộ câu hỏi:
//      + Biến questions -> là array để chứa câu hỏi
// - Tạo biến lưu các sự trợ giúp -> khi click vào trợ giúp nào thì ẩn đi luôn
// VD: chọn 50 - 50:
//      + ẩn sự trợ giúp đi
//      + Loại bỏ 2 đáp án sai -> text = ""
// Cần biến để lưu số thứ tự câu hỏi và giá trị phần thưởng
// Cần biến để lưu câu hỏi hiện tại để người chơi biết đang ở câu nào
// Ấn nút Next:
//  + Cần check xem đáp án đúng hay sai:
//      / Nếu đúng -> ting(sound) -> Nhấn next -> Nâng câu hỏi hiện tại
//      / Nếu sai -> Hiện đáp án đúng -> Dừng lại game và hiện số tiền thường

// Trong mỗi câu hỏi:
//      + Có câu hỏi
//      + Co 4 đáp án
//      + Co 1 đáp án đúng
//      + Co 1 đáp án người chơi chọn
//      + level câu hỏi
//      + Status đúng/sai của đáp án
// tạo biến questions = [
//      {
//          id: 1,
//          question: "How are you today"
//          A: 'ok'
//          B: 'ko ok'
//          C: 'good'
//          D: 'my name is bang'
//          correct: 'D'
//          user-select: 'D'
//          is-correct: 'true'
//          level: '1'
//          show: false -> Đây la thuôc tính kiểm tra xem câu hỏi đã được hiện hay chưa
//      },
//
//      {
//          id: 2,
//          question: "How are you today"
//          A: 'ok'
//          B: 'ko ok'
//          C: 'good'
//          D: 'my name is bang'
//          correct: 'D'
//          user-select: 'D'
//          is-correct: 'true'
//          level: '1'
//      },
//  [

// Xử lý tiền thưởng
// {
//      1: 200,     Câu 1: tiền thuong là 200
//      2: 300,     Câu 2: tiền thuong là 300
// }

// current_level = 3    level câu hỏi hiện tại