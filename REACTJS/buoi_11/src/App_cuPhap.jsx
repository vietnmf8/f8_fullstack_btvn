import { useState } from 'react'
import './App.css'


// Custom Hook phải bắt đầu bằng "use"
function useCustomHook(initialValue) {
    const [state, setState] = useState(initialValue)

    // Logic xử lý của bạn
    const doSomething = () => {
        // xử lý logic
    };

    // Return những gì component cần sử dụng
    return { state, setState, doSomething };
}




function App() {

    const { state, setState, doSomething } = useCustomHook("giá trị ban đầu");
  return (
    <>
        <div>{state}</div>
    </>
  )
}
export default App
