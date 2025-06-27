// Com1
import {createContext, memo, useContext, useRef} from "react";

const Context = createContext(null);

const Com1 = ({}) => {
    // Rendering
    console.log('Đã render COM1')

    const {c2Ref} = useContext(Context);

    const onChangeColor = () => {
        console.log('onChangeColor')
        c2Ref.current.style.color = 'red'
    }


    return (
        <>
            <p>Component 1</p>
            <button onClick={onChangeColor}>Change color</button>
        </>

    )
}

// Com2
const Com2 = () => {
    // Rendering
    console.log('Đã render COM2')

    const {c2Ref} = useContext(Context);
    return (
        <>
            <p ref={c2Ref}>Component 2</p>
        </>
    )
}

export default function () {

    console.log('Đã render MAIN COMPONENT!')

    const c2Ref = useRef(null)
    const provider = {c2Ref}

    return (
        <Context value={provider}>
            <h1>Xin chao!</h1>
            <Com1 />
            <Com2 />
        </Context>
    )
}