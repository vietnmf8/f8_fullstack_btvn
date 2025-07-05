import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { SetSearchStr } from '../../store/SearchStr/action.jsx';
import { selectSearchStr } from '../../store/selectors.js';

const Search = () => {
    const dispatch = useDispatch();
    const searchStr = useSelector(selectSearchStr);

    const handleSearchChange = (e) => {
        const value = e.target.value;
        dispatch(SetSearchStr(value || null));
    };

    return (
        <div style={{ marginBottom: '20px' }}>
            <TextField
                fullWidth
                label="Tìm kiếm theo tên sản phẩm hoặc ID"
                variant="outlined"
                value={searchStr || ''}
                onChange={handleSearchChange}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
        </div>
    );
};

export default Search;