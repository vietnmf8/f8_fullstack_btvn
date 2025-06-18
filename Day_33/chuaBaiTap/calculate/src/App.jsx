import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import './App.css'

function App() {
    // React-Lir: Toastify
    const notify = () => toast("Wow so easy!");
    // Khai báo
    const [firstNum, setFirstNum] = useState('')
    const [secondNum, setSecondNum] = useState('')


    //First Num On Change
    const onChangeFirstNum = (event) => {
        if (isNaN(event.target.value)) {
            toast.error("Wow so easy!")
        }
        setFirstNum(event.target.value)


    }
    //Second Num On Change
    const onChangeSecondNum = (event) => {
        setSecondNum(event.target.value)
    }

    // const handleInputChange = (data, callback) => {
    //     callback(data)
    //     console.log(data)
    // }



    // Operation: +
    const sum = (firstNum, secondNum) => {
        return firstNum + secondNum
    }
    // Minus: -
    const minus = (firstNum, secondNum) => {
        return firstNum - secondNum
    }
    // Times: -
    const times = (firstNum, secondNum) => {
        return firstNum * secondNum
    }
    // Divide: -
    const divide = (firstNum, secondNum) => {
        if (secondNum === 0) {
            return
        }
        return firstNum / secondNum
    }

    const operator = {
        sum: sum,
        minus: minus,
        times: times,
        divide: divide
    }

    //Calculate
    const calculate = (operation) => {
        const result = operator[operation](Number(firstNum), Number(secondNum))
        console.log(result)
    }



    const styles = {
        container: {
            padding: '30px',
            maxWidth: '400px',
            margin: '50px auto',
            textAlign: 'center',
            backgroundColor: '#f4f4f4',
            borderRadius: '12px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        },
        title: {
            marginBottom: '20px',
            color: '#333',
        },
        input: {
            width: '80%',
            padding: '10px',
            margin: '8px 0',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '6px',
        },
        buttonGroup: {
            marginTop: '15px',
        },
        button: {
            padding: '10px 20px',
            margin: '6px',
            fontSize: '18px',
            cursor: 'pointer',
            border: 'none',
            backgroundColor: '#4CAF50',
            color: 'white',
            borderRadius: '6px',
            transition: 'background-color 0.3s',
        },
        clearButton: {
            marginTop: '15px',
            padding: '10px 20px',
            fontSize: '16px',
            border: 'none',
            backgroundColor: '#f44336',
            color: 'white',
            borderRadius: '6px',
            cursor: 'pointer',
        },
        result: {
            marginTop: '20px',
            fontSize: '18px',
            color: '#222',
        },
    };
    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Máy Tính Cơ Bản</h2>

            <input
                placeholder="Số thứ nhất"
                style={styles.input}
                value={firstNum}
                onChange={onChangeFirstNum}
            />
            <input
                placeholder="Số thứ hai"
                style={styles.input}
                value={secondNum}
                onChange={onChangeSecondNum}
            />

            <div style={styles.buttonGroup}>
                <button style={styles.button} onClick={() => calculate('sum')}>+</button>
                <button style={styles.button} onClick={() => calculate('minus')}>−</button>
                <button style={styles.button} onClick={() => calculate('times')}>×</button>
                <button style={styles.button} onClick={() => calculate('divide')}>÷</button>
            </div>

            <div style={styles.result}>
                <strong>Kết quả:</strong> <span>Chưa có kết quả</span>
            </div>

            <button style={styles.clearButton}>Clear</button>
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    );
}

export default App
