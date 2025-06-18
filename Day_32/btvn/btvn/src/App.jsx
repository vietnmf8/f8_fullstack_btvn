import React, {useState} from 'react';
import './App.css'


function App() {
    /* Khai bao */
    const [num1, setNum1] = useState(''); // Number 1
    const [num2, setNum2] = useState(''); // Number 2
    const [result, setResult] = useState('Chưa có kết quả'); // Ket qua
    const [error, setError] = useState(''); // Thong bao loi

    /* Validation */
    //Kiểm tra xem có phải số không?
    const isValidNumber = (value) => {
        return !isNaN(value) && value.trim() !== ''
    }

    /* Handle Input */
    const handleInput = (value, callback) => {
        console.log(value)
        callback(value)
        setError('')
    }

    /* Calculate */
    const calculate = (operation) => {
        // Validate?
        if (!isValidNumber(num1) || !isValidNumber(num2)) {
            setError('Vui lòng nhập số hợp lệ');
            setResult('');
            return;
        }

        // Khai bao so thuc va ket qua
        const num1Float = parseFloat(num1)
        const num2Float = parseFloat(num2)
        let result

        // Thuc hien phep tinh
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
                    setResult('')
                    return;
                }
                result = num1Float / num2Float
                break;
            default: return;
        }

        // Hien thi ket qua
        setResult(result)
        setError('')
    }

    /* Clear */
    const clearAll = () => {
        setNum1('');
        setNum2('');
        setResult('Chưa có kết quả');
        setError('');
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
        error: {
            color: '#f44336',
            fontSize: '16px',
            marginTop: '10px',
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
                onChange={(e) => handleInput(e.target.value, setNum1)}
            />
            <input
                type="number"
                placeholder="Số thứ hai"
                style={styles.input}
                value={num2}
                onChange={(e) => handleInput(e.target.value, setNum2)}
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

            {error ? <div style={styles.error}>{error}</div> : null}


            <button style={styles.clearButton} onClick={clearAll}>Clear</button>
        </div>
    );
}

export default App;

