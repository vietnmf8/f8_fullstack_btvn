import React, { memo } from 'react';

export const CartItem = memo(({ item, onIncrease, onDecrease, onRemove }) => {
    // Console log để theo dõi khi component re-render
    console.log(`Rendering: ${item.name}`);

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 12,
            border: '1px solid #ddd',
            borderRadius: 6,
            marginBottom: 12
        }}>
            <div>
                <div style={{ fontWeight: 'bold' }}>{item.name}</div>
                <div style={{ fontSize: 13, color: '#666' }}>Số lượng: {item.quantity}</div>
            </div>

            <div style={{ display: 'flex', gap: 6 }}>
                {/* Button tăng số lượng */}
                <button onClick={() => onIncrease(item.id)}>+</button>

                {/* Button giảm số lượng - disabled khi quantity <= 1 */}
                <button
                    onClick={() => onDecrease(item.id)}
                    disabled={item.quantity <= 1}
                >
                    -
                </button>

                {/* Button xóa sản phẩm */}
                <button
                    onClick={() => onRemove(item.id)}
                    style={{ color: 'red' }}
                >
                    Xóa
                </button>
            </div>
        </div>
    );
});

// Đặt tên cho component để dễ debug
CartItem.displayName = 'CartItem';
