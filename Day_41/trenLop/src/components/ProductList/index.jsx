import {useDispatch, useSelector} from "react-redux";
import {DeleteProduct} from "../../store/Product/action.jsx";

const getSearchStr = (state) => {
    return state.searchStr
        ? state.products.filter(product => product.name.includes(state.searchStr))
        : state.products;
};

export default function () {
    const dispatch = useDispatch();
    const products = useSelector(getSearchStr)


    const onDelete = (id) => {
        dispatch(DeleteProduct(id))
    }

    return (
       <>
           <ul>
               {
                   products.map((product) => {
                       return <li key={product.id}>
                           <span>{product.name}</span>
                           <button onClick={() => onDelete(product.id)}>Del</button>
                       </li>
                   })
               }
           </ul>
       </>
    )
}