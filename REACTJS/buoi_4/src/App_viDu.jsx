import { useState } from 'react'
import './App.css'

// Component: Hien thi thong tin sinh vien!
const StudentCards = (props) => {
    return (
        <div style={{
            widht: '100%',
            backgroundColor: '#f8eeee',
            borderRadius: '5px',
            padding: '10px',
            boxSizing: 'border-box',
            margin: '10px',
        }}>
            <h3>Ho va Ten: {props.name}</h3>
            <p>Tuoi: {props.age}</p>
            <p>Lop: {props.className}</p>
        </div>
    )
}



function App() {
  return (
    <>
       <StudentCards name={'Nguyen Minh Viet'} age={18} className={'3A'} />
       <StudentCards name={'Nguyen Thuy Quynh'} age={27} className={'4A'} />
    </>
  )
}
export default App
