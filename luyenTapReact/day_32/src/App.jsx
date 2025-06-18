import { useState } from 'react'
import './App.css'

function App() {
    /* Khai bao */
   const [num1, setNum1] = useState('')
   const [num2, setNum2] = useState('')
   let [result, setResult] = useState('Chưa có kết quả')

    //handleInput 1
    const handleInput1 = (event) => {
        setNum1(event.target.value)
        console.log("Nhập số thứ nhất: ", event.target.value)
    }
    //handleInput 2
    const handleInput2 = (event) => {
        setNum2(event.target.value)
        console.log("Nhập số thứ hai: ", event.target.value)
    }

    /* Validate: Kiểm tra số hợp lệ và khoảng trắng  */
    const isValidNumber = (number) => {
        return !isNaN(number) && number.trim() !== ''
        // //Tuong minh:
        // // B1: Xóa khoảng trắng 2 đầu
        // const numberTrim = number.trim()
        //
        // // B2: Nếu chuỗi rỗng thì không hợp lệ
        // if (numberTrim === '') {
        //     return false
        // }
        //
        // // B3: Ép về kiểu số và kiểm tra
        // const num = Number(numberTrim)
        // if (isNaN(numberTrim)) {
        //     return false
        // }
        // // B4: Nếu không rơi vào 2 trường hợp trên => hợp lệ
        // return true
    }

    /* Calculate */
    const calculate = (operation) => {
        // Kiem tra so hop le
        if (!isValidNumber(num1) || !isValidNumber(num2)) {
            alert('Vui lòng nhập số hợp lệ')
            setResult('Chưa có kết quả')
            return
        }

        //Cho phép nhập số thập phân
        const num1float = parseFloat(num1)
        const num2float = parseFloat(num2)

        // Thuc hien cac phep toan
        switch (operation) {
            case '+':
                result = num1float + num2float
                break;
            case '-':
                result = num1float - num2float
                break;
            case '*':
                result = num1float * num2float
                break;
            case '/':
                if (num2float === 0) {
                    alert('Phép tính không hợp lệ!')
                    setResult('Chưa có kết quả')
                    return
                }
                result = num1float / num2float
                break;
            default: return;
        }
        setResult(result)
        console.log('Ket qua: ', result)
    }


    /* Clear */
    const clearAll = () => {
        setResult('Chưa có kết quả')
        setNum1('')
        setNum2('')
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
                type="number"
                placeholder="Số thứ nhất"
                style={styles.input}
                value={num1}
                onChange={handleInput1}

            />
            <input
                type="number"
                placeholder="Số thứ hai"
                style={styles.input}
                value={num2}
                onChange={handleInput2}
            />

            <div style={styles.buttonGroup}>
                <button onClick={() => calculate('+')} style={styles.button}>+</button>
                <button onClick={() => calculate('-')} style={styles.button}>−</button>
                <button onClick={() => calculate('*')} style={styles.button}>×</button>
                <button onClick={() => calculate('/')} style={styles.button}>÷</button>
            </div>

            <div style={styles.result}>
                <strong>Kết quả:</strong> <span>{result}</span>
            </div>


            <button onClick={clearAll} style={styles.clearButton}>Clear</button>
        </div>
    );
}

export default App
