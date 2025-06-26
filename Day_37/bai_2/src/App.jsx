import { useState, memo } from 'react'


const UserItem = memo(({ user }) => {
    console.log(`UserItem ${user.name} đang render`);

    return (
        <div style={{
            padding: '10px',
            margin: '5px',
            border: '1px solid #ccc',
            borderRadius: '5px'
        }}>
            <strong>ID:</strong> {user.id} - <strong>Tên:</strong> {user.name}
        </div>
    );
});

// Đặt displayName để dễ debug
UserItem.displayName = 'UserItem';

function App() {
    // Danh sách users (giữ nguyên từ code gốc)
    const users = [
        { id: 1, name: 'Nguyễn Văn A' },
        { id: 2, name: 'Trần Thị B' },
        { id: 3, name: 'Lê Văn C' },
    ];

    // State điểm số - không liên quan đến danh sách users
    const [score, setScore] = useState(0);

    // Hàm tăng điểm
    const increaseScore = () => {
        setScore(prevScore => prevScore + 1);
    };

    return (
        <div style={{ padding: '20px' }}>

            {/* Nút tăng điểm - state không liên quan đến users */}
            <div style={{ marginBottom: '20px' }}>
                <button onClick={increaseScore} style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}>
                    Tăng điểm
                </button>
                <span style={{ marginLeft: '10px', fontSize: '18px' }}>
          Điểm: {score}
        </span>
            </div>

            {/* Danh sách người dùng */}
            <h2>Danh sách người dùng:</h2>
            <div>
                {users.map(user => (
                    <UserItem
                        key={user.id}
                        user={user}
                    />
                ))}
            </div>
        </div>
    );
}

export default App