import {useDispatch, useSelector} from "react-redux";
import {memo} from "react";
import {Inputting} from "../../store/SearchStr/action.jsx";



const Search = () => {
    const dispatch = useDispatch();
    const searchStr = useSelector(state => state.searchStr);



    return (
        <input
            value={searchStr || ''}
            onChange={(e) => {
                return dispatch(Inputting(e.target.value))
            }}
        />
    )
}

export default memo(Search);