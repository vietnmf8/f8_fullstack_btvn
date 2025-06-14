Luồng Đăng ký / Đăng nhập!
Đăng ký:
- Client: Đăng kí tài khoản -> với API
- Server: Trả về thông tin "Đăng ký  thành công/thất bại"

Đăng nhập:
- Client:
    + Nhập user, password vào ô input
    + Nhấp Login -> gọi POST (user/pass) API cho server
    + Server check xem user/pass có hợp lệ không?
        - Nếu hợp lệ -> return
        - Nếu thành công -> trả về:
            * access_token (Chứa thông tin)
            * refresh_token
    + Login vào homepage -> lấy thông tin các todos -> get(todos) kèm theo access_token
        - Nếu có -> trả về thông tin todolist
        - Nếu không có -> 403


-----------------------------------------------------------------------------------------------


- Sau khi POST API -> trả về:
    * access_token (Chứa thông tin)
    * refresh_token
      (Lưu 2 thông tin này ngay vao localStorage)

-> Chuyển sang homepage
-> Lấy danh sách todos -> GET (truyền thêm header - đem access_token theo để lấy thông tin)

Sau 1 phút -> token expried (hết hạn) -> lấy access_token mới dựa vào refresh_token
Bằng cách: gọi (POST) đến API (...com/login/get_new_token) với body:
{
"refresh": truyền_refresh_token_đã_có
}
- Lay ra danh sach todos: GET (dinh kem header - access_token)


-> Sau khi POST -> lại sinh ra access_token -> lưu vào localStorage

LapLai qua trinh:

Neu GetAPI -> catch (access expired tuc la het han) -> goi la getNewAPI (POST, API)

GIỮ PHIÊN ĐĂNG NHẬP!