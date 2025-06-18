import { useState } from 'react'
import './App.css'


// Bai tap:
// Tạo component hiển thị thông tin cá nhân
// (tên, tuổi, sở thích)


/* Init */
function App() {
    // Khai báo
    const name = 'Nguyen Minh Viet';
    const age = 22;
    const hobbies = ['Doc sach', 'Nghe nhac', 'Xem phim']
    const isWorking = true;

 // Giao diện
  return (
    <>
        <div style={{
            width: '100%',
            margin: '0 auto',
            padding: '20px',
            backgroundColor: '#ffdbdb',
            boxSizing: 'border-box',
            borderRadius: '5px',
            fontFamily: 'Lato',
            fontSize: '14px',
        }}>
            <h2 style={{
                color: '#b92020',
                textAlign: 'center',
            }}>
                Thong tin ca nhan
            </h2>

            <div>
                <p><strong>Ho va ten:</strong> {name}</p>
                <p><strong>Tuoi:</strong> {age}</p>
                <p><strong>Trang thai:</strong> {isWorking ? 'Dang di lam' : 'That nghiep'}</p>

                <div>
                    <p><strong>So thich:</strong> </p>
                    <ul>
                        {hobbies.map((hobby, index) => {
                            return <li key={index}>{hobby}</li>
                        })}
                    </ul>
                    <p style={{
                        backgroundColor: '#e21313',
                        padding: '20px',
                        color: 'white',
                    }}>
                        <em>Toi co {hobbies.length} so thich va {age >= 18 ? "da" : "chua"} du tuoi truong thanh!</em>
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}
export default App
