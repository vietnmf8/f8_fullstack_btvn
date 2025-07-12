import {Box, Button, InputAdornment, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setSearchTerm} from "../../store/contactsSlice/index.jsx";
import {Add, Search} from '@mui/icons-material'
import {useState} from "react";

const SearchBar = ({setIsOpenContactForm, setEditingContact}) => {

    /* ==========================================================================================
     * Lấy các biến cần thiết
     * ========================================================================================== */

    const dispatch = useDispatch();
    const {searchTerm} = useSelector(state => state.contacts);



    /* ==========================================================================================
     * Search
     * ========================================================================================== */

    // Xử lý: Nhập vào ô Search
    const onSearchChange = (e) => {
        const value = e.target.value;
        dispatch(setSearchTerm(value));
    }

    /* ==========================================================================================
     * Button
     * ========================================================================================== */

    // Xử lý: Khi click vào "THÊM MỚI"
    // Chức năng: Mở Dialog thêm mới
    const onAddNew = () => {
        setIsOpenContactForm(true)
        setEditingContact(null)
        console.log('Đã nhấn vào nút THÊM MỚI')
    }


    /* ==========================================================================================
     * Giao diện
     * ========================================================================================== */
    return (
        <Box
            sx={{
                mb: 3,
                display: 'flex',
                gap: 2
            }}
        >
            {/* Input */}
            <TextField
               fullWidth
                placeholder="Tìm kiếm contact..."
                value={searchTerm}
                onChange={onSearchChange}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Search/>
                        </InputAdornment>
                    )
                }}
            />

            {/* Button */}
            <Button
                variant="outlined"
                startIcon={<Add/>}
                sx={{minWidth: 150}}
                onClick={onAddNew}
            >
                Thêm mới
            </Button>
        </Box>
    )
}

export default SearchBar