import { useState } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';

function App() {
    const errorNotify = (message) => toast.error(message);


    /* Khai bao */
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('Chưa có kết quả');
    const [error, setError] = useState('');

    /* Validate */
    const isValidNumber = (value) => {
        return !isNaN(value) && value.trim() !== ''
    }

    /* onInput */
    const onInputChange = (value, setNum) => {
        setNum(value)
        setError('')
        error && setResult('Chưa có kết quả')
    }

    /* calculate */
    const calculate = (operation) => {

        if (!isValidNumber(num1) || !isValidNumber(num2)) {
            setError('Vui lòng nhập số hợp lệ')
            setResult('Chưa có kết quả')
            errorNotify('Vui lòng nhập số hợp lệ')
            return;
        }

        const num1Float = parseFloat(num1)
        const num2Float = parseFloat(num2)
        let result

        switch (operation) {
            case '+':
                result = num1Float + num2Float
                break;
            case '-':
                result = num1Float - num2Float
                break;
            case '*':
                result = num1Float * num2Float
                break;
            case '/':
                if (num2Float === 0) {
                    setError('Không thể chia cho 0')
                    setResult('Chưa có kết quả')
                    errorNotify('Không thể chia cho 0')
                    return;
                }
                result = num1Float / num2Float
                break;
        }
        setResult(result)
        console.log(num1, operation, num2, '=', result)
    }

    /* clearAll */
    const clearAll = () => {
        setResult('Chưa có kết quả')
        setError('')
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
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Máy Tính Cơ Bản</h2>

            {/* Num1 */}
            <input
                type="number"
                placeholder="Số thứ nhất"
                style={styles.input}
                value={num1}
                onChange={(event) => onInputChange(event.target.value, setNum1)}
            />

            {/* Num2 */}
            <input
                type="number"
                placeholder="Số thứ hai"
                style={styles.input}
                value={num2}
                onChange={(event) => onInputChange(event.target.value, setNum2)}
            />

            <div style={styles.buttonGroup}>
                <button style={styles.button} onClick={() => calculate('+')}>+</button>
                <button style={styles.button} onClick={() => calculate('-')}>−</button>
                <button style={styles.button} onClick={() => calculate('*')}>×</button>
                <button style={styles.button} onClick={() => calculate('/')}>÷</button>
            </div>

            <div style={styles.result}>
                <strong>Kết quả:</strong> <span>{result}</span>
            </div>

            {error ? <div>{error}</div> : null}

            <button style={styles.clearButton} onClick={clearAll}>Clear</button>
            <ToastContainer />
        </div>
    );
}

export default App
