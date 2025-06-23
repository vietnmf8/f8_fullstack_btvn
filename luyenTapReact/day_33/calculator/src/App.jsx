import {CalcBtn} from "./components";


function App() {


    return (
        <>
            <div className="screen"></div>
            <div className="keyboard">
                <CalcBtn text={'Viet'} backgroundColor="yellow"/>
                <CalcBtn text={'Quynh'} backgroundColor="purple"/>
                <CalcBtn text={'Nam'} backgroundColor="orange"/>
                <CalcBtn text={'Thu'} backgroundColor="brown"/>
            </div>
        </>
    );
}

export default App;
