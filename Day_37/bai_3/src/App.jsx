import React, { useState, useCallback } from 'react';
import { CartItem } from './components/CartItem/index.jsx';

function CartUI() {
    // Chuyển dữ liệu cart thành state để có thể thay đổi
    const [cart, setCart] = useState([
        { id: 1, name: 'Áo thun', quantity: 1 },
        { id: 2, name: 'Quần jeans', quantity: 2 },
        { id: 3, name: 'Nón lưỡi trai', quantity: 1 },
    ]);

    // useCallback để tối ưu hàm tăng số lượng - chỉ tạo lại khi cart thay đổi
    const handleIncrease = useCallback((id) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    }, []);

    // useCallback để tối ưu hàm giảm số lượng
    const handleDecrease = useCallback((id) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    }, []);

    // useCallback để tối ưu hàm xóa sản phẩm
    const handleRemove = useCallback((id) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id));
    }, []);

    return (
        <div style={{ maxWidth: 480, margin: '0 auto', padding: 20 }}>
            <h2 style={{ textAlign: 'center' }}>🛒 Giỏ hàng</h2>
            {cart.map(item => (
                <CartItem
                    key={item.id}
                    item={item}
                    onIncrease={handleIncrease}
                    onDecrease={handleDecrease}
                    onRemove={handleRemove}
                />
            ))}
        </div>
    );
}

export default CartUI;