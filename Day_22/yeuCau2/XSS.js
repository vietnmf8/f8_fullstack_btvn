//  Xử lý ngăn chặn XSS
// Nên thêm hàm sanitize:
function sanitizeInput(input) {
    return String(input)
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}
