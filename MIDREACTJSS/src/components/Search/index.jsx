import {TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {selectProducts, selectSearchStr} from "../../store/selectors.js";
import {updateAPI} from "../../utils/index.js";
import {inputting} from "../../store/SearchStrSlice/index.jsx";


const Search = () => {

    const dispatch = useDispatch()
    const searchStr = useSelector(selectSearchStr)

    // Hàm xu lý khi nhập vào ô tìm kiếm
    const onInput = (e) => {
        console.log(e.target.value)
        const value = e.target.value
        dispatch(inputting(value))
    }

    return (
        <>
            <TextField
                fullWidth
                label={"Tìm kiếm sản phẩm"}
                autoComplete={'off'}
                value={searchStr || ''}
                onChange={onInput}
            />

        </>
    )
}

export default Search