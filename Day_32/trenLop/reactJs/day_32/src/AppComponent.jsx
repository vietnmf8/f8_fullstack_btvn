import './App.css'

/* useState */
//Component: Là một function, function này đuợc gọi như một thẻ trong HTML
//--------------------------------------------------------------------------

const BangTx = () => {
    return (
        <>
            <h1>Ahihi</h1>
        </>
    )
}

function App() {
    // Tao bien count
    let count = 0
    console.log(count)

    // increaseCount
    const increaseCount = () => {
        count = count + 1
        console.log(count)
    }

  // MAIN:
  return (
    <>
        <h1>count: {count}</h1>
        {/* Click event */}
        <button onClick={increaseCount}>Click me!</button>
        <BangTx></BangTx>
    </>
  )
}
export default App
