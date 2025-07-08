import {useDispatch, useSelector} from "react-redux";
import {addNew, increase} from "./store";


function App() {

    const dispatch = useDispatch()
    const count = useSelector((state) => state.count)
    const products = useSelector((state) => state.products)


    const onClick = () => {
        dispatch(increase(2)) // 2 -> action.payload
    }

    const onAddNew = () => {
        dispatch(addNew({id: 1, name: 'Sản phẩm mới'}))
    }

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={onClick}>Tăng</button>
            <button onClick={onAddNew}>Thêm</button>

            <ul>
                {
                    products.map((product) => (
                        <li key={product.id}>
                            <span>{product.name}</span>
                            <button>Del</button>
                        </li>
                    ))
                }
            </ul>

        </>
    )
}

export default App
