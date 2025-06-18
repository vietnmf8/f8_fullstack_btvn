import './App.css'
import {useEffect, useState} from "react";

/* useState */
//Component: Là một function, function này đuợc gọi như một thẻ trong HTML
//--------------------------------------------------------------------------

function App() {
    // Tao bien count
    let [count, setCount] = useState(0); // 0: gia tri khoi tao

    // increaseCount
    const increaseCount = () => {
        setCount((count) => count + 1);
    }

    /* useEffect -> Console.log - Theo doi su thay doi cua bien */
    //Thực thi một function dựa trên giá trị thay đổi
    useEffect(() => {
        console.log(count)
    }, [count]);

    // Nếu không truyền vào [], thì sẽ log ra lần đầu tiên khi load trang, Gọi một lần duy nhất
    // mounted, vue: onMounted
    // Truờng hợp sử dụng: Gọi API
    //
    useEffect(() => {
        console.log('xin chao')

        //Khi web (page/component) vừa đuợc tắt -> unMounted
        // retrun -> function
        return () => {
            console.log('unMounted');
        }
    }, []);






  // MAIN:
  return (
    <>
        <h1>count: {count}</h1>
        {/* Click event */}
        <button onClick={increaseCount}>Click me!</button>
    </>
  )
}
export default App
