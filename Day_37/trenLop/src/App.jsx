import {memo, useMemo, useState, useCallback, useEffect, useRef} from 'react'
import './App.css'

// Com1
const Com1 = memo(({ref}) => {
    // Rendering
    console.log('COM1 rendering!!!')

    return (
        <h1 ref={ref}>Component 1</h1>
    )
})

// Com2
const Com2 = memo(({count}) => {
    // Rendering
    console.log('COM2 rendering!!!')
    return (
        <>
            <h2>Component 2</h2>
            <p>Count: {count}</p>
        </>
    )
})


// const count = {current: 0}
function App() {

    // const [count, setCount] = useState(0)

    const [age, setAge] = useState(0)
    const [input, setInput] = useState('')
    const count = useRef(0)
    const divRef = useRef(null)
    const comp1Ref = useRef(null)


    const getSum = (n) => {
        let value = 0
        for (let i = 0; i < 10000; i++) {
            value += n
            console.log(value)
        }
        return value
    }
    // const sum = useMemo(() => getSum(count), [count]);

    // Rendering
    console.log('App rendering!!!')


    const log = useCallback(() => {
        console.log('LOG rendering!!!', age)
        console.log('-------------------------------------')
    }, [age]);

    log()

    useEffect(() => {
        count.current =  count.current + 1
        console.log(count)
    })

    // Bat dong bo
    setTimeout(() => {
        console.log("divRef: ", divRef.current)
        // console.log("comp1Ref: ", comp1Ref.current)
        comp1Ref.current.style.color = 'red'
    })

  return (
    <>
        {/* tham chieu div (cac the nguyen thuy) qua useRef */}
        <div ref={divRef}></div>
        <Com1 ref={comp1Ref} />
        <Com2 count={count.current} />
        <p>Age: {age}</p>
        {/*<p>Sum: {sum}</p>*/}
        {/*<button onClick={() => setCount(count + 1)}>Click COUNT!</button>*/}
        <button onClick={() => setAge(age + 1)}>Click AGE!</button>
        <input onChange={e => setInput(e.target.value)} value={input} />
    </>
  )
}

export default App
