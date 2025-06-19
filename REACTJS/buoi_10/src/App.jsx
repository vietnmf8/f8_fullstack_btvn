import { useState, useEffect } from 'react'
import './App.css'

function App() {

const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        console.log('Time Start')
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000)


        // Cleanup function - chạy khi component unmount
        return () => {
            console.log('Time End')
            clearInterval(interval)
        }
    },[])

    useEffect(() => {
        console.log(seconds)
    }, [seconds])




  return (
    <>
        <div>Timer: {seconds}s</div>
    </>
  )
}
export default App
