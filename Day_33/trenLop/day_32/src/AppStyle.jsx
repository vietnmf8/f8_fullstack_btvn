import './App.css'

function App() {

  return (
    <>
        <h1 style={{color: 'red'}}>Quynh <span>Oki nhe</span></h1>
        <h2 className={'bg--blue white--text'}>Quynh <span>Oki nhe</span></h2>

        <span style={
            {
                display: 'block',
                backgroundColor: 'green',
                color: '#fff'
            }
        }>Test thoi anh em</span>


        <span style={
            {
                borderRadius: '50%',
                display: 'block',
                backgroundColor: 'red',
                color: '#fff'
            }
        }>Test thoi anh em</span>

    </>

  )
}

export default App
