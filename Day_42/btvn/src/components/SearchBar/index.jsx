import {Box, Button, InputAdornment, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import {setSearchTerm} from "../../store/contactsSlice/index.jsx";
import {useDispatch, useSelector} from "react-redux";

const SearchBar = ({setIsOpenForm, setEditingContact}) => {
    const dispatch = useDispatch();
    const {searchTerm} = useSelector((state) => state.contacts);

    // Xử lý khi nhập ô search
    const onSearchChange = (e) => {
        const value = e.target.value;
        console.log('Đang nhập: ', value)

        dispatch(setSearchTerm(value));
    }

    // Xử lý khi nhấn vào nút Thêm mới
    const onAddNew = () => {
        console.log('Đã nhấn vào nút Thêm mới!')
        setIsOpenForm(true)
        setEditingContact(null)
    }


    return (
        <div>
            {/* Search và Add Button */}
            <Box sx={{ mb: 3, display: 'flex', gap: 2, alignItems: 'center' }}>
                <TextField
                    fullWidth
                    placeholder="Tìm kiếm theo tên hoặc email..."
                    autoComplete={'off'}
                    value={searchTerm}
                    onChange={onSearchChange}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />

                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    sx={{ minWidth: 120 }}
                    onClick={onAddNew}
                >
                    Thêm mới
                </Button>
            </Box>
        </div>
    )
}

export default SearchBar;