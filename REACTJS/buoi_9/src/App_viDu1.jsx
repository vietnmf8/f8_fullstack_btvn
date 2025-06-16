import { useState } from 'react'
import './App.css'

function App() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    // Xử lý thay đổi của tất cả input
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData(
            (formData) => (
                {
                    ...formData,
                    [name]: value
                }
            )
        )

        console.log(formData)

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Xin chào ${formData.name}!`);
        console.log('Form data:', formData);
    };




    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Tên:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nhập tên của bạn"
                />
            </div>

            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Nhập email"
                />
            </div>

            <div>
                <label>Tin nhắn:</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Nhập tin nhắn"
                />
            </div>

            <button type="submit">Gửi thông tin</button>
        </form>
    );
}
export default App
