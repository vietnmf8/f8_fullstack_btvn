/* Open/Close: Object */
// Khách hàng - Normal
const calNormalCst = (totalMoney) => {
    return totalMoney
}

// Khách hàng - Vip
const calVipCst = (totalMoney) => {
    return totalMoney * 0.9
}

// Khách hàng - Premium
const calPremiumCst = (totalMoney) => {
    return totalMoney * 0.8
}

// Xây dựng object - Phan này có thể mở rộng
const customerType = {
    normal: calNormalCst,
    vip: calVipCst,
    premium: calPremiumCst,
}
// Tạo hàm tính toán -> Không cần sửa lại hàm này
const calculateMoney = (type, totalMoney) => {
    return customerType[type](totalMoney)
}
// Cập nhật sau này tại đây
const money = calculateMoney('vip', 1000)
console.log(money)