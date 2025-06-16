import { useState } from 'react'
import './App.css'

// Component:  BookCard hiển thị thông tin sách
const BookCard = (props) => {
    return (
        <div style={{
            width: '100%',
            background: '#ccc',
            margin: '30px auto',
            padding: '10px',
            boxSizing: 'border-box',
        }}>
            <h2>Ten sach: {props.title}</h2>
            <p>Tac gia: {props.author}</p>
            <p>Gia tien: {props.price}</p>
        </div>
    )
}



function App() {
    return (
        <>
            <h1>Book list: </h1>
            <BookCard
                title="Dac Nhan tam"
                author="Nguyen Minh Viet"
                price="100.000VND"
            />
            <BookCard
                title="Nha Gia Kim"
                author="Tran Khanh Linh"
                price="200.000VND"
            />
            <BookCard
                title="Toi Tai Gioi"
                author="Le Thanh Hang"
                price="300.000VND"
            />
        </>
    )
}
export default App
