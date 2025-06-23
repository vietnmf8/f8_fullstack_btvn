import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {useEffect, useState} from "react";


export default function DialogEmployee ({isOpen, onClose, curEmployee, onInput, onSave}) {
    // Tránh Render lại App
    const [inputValue, setInputValue] = useState({...curEmployee});


    useEffect(() => {
        setInputValue({...curEmployee});
    },[curEmployee])

    useEffect(() => {
        console.log('inputValue: ', inputValue);
    },[inputValue])


    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
        >
            <DialogTitle sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <span>New Employee</span>
                <CloseIcon
                    color='primary'
                    onClick={onClose}
                    sx={{cursor: 'pointer'}}
                />

            </DialogTitle>

            <DialogContent>
                <TextField
                    fullWidth
                    variant="standard"
                    label="Name"
                    value={inputValue.name}
                    onChange={(event) => onInput('name', event.target.value)}
                />
                <TextField
                    fullWidth
                    variant="standard"
                    label="Age"
                    value={inputValue.age}
                    sx={{mt: '8px'}}
                    onChange={(event) => onInput('age', event.target.value)}
                />
                <TextField
                    fullWidth
                    variant="standard"
                    label="Address"
                    value={inputValue.address}
                    sx={{mt: '8px'}}
                    onChange={(event) => onInput('address', event.target.value)}
                />
            </DialogContent>

            <DialogActions>
                <Button
                    variant="outlined"
                    color="error"
                    onClick={onClose}
                >
                    CLOSE
                </Button>

                <Button
                    variant="outlined"
                    color="info"
                    onClick={() => {
                        console.log('save')
                        onSave()
                    }}
                >
                    SAVE
                </Button>
            </DialogActions>
        </Dialog>
    )
}