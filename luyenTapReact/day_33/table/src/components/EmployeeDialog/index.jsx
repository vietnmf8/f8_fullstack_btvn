import {useEffect, useState} from "react";
import Dialog from "@mui/material/Dialog";
import {Button, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function EmployeeDialog({isOpen, setIsOpen, employee, onSave, setEmployee}) {
    const [inputtingEmployee, setInputtingEmployee] = useState({...employee})

    useEffect(() => {
        setInputtingEmployee({...employee})
    }, [employee])


    const onClickSave = () => {
        console.log(employee)
    }

    const onInput = (e) => {
        setInputtingEmployee({
            ...inputtingEmployee,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <Dialog
            open={isOpen} // Trang thai co dang mo khong?
            onClose={() => setIsOpen(false)} // Khi close
            sx={{width: '1000px', margin: '20px auto', height: '500px'}}
        >
            <DialogTitle sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <span>New Employee</span>
                <CloseIcon
                    sx={{cursor: 'pointer'}}
                    onClick={() => setIsOpen(false)}
                />
            </DialogTitle>

            <DialogContent>
                <TextField
                    fullWidth
                    label="name"
                    name="name"
                    variant="standard"
                    value={inputtingEmployee.name}
                    autoComplete={'off'}
                    onChange={(e) => onInput(e)}
                />

                <TextField
                    fullWidth
                    sx={{mt: '10px'}}
                    label="age"
                    name="age"
                    variant="standard"
                    value={inputtingEmployee.age}
                    autoComplete={'off'}
                    onChange={(e) => onInput(e)}
                />
                <TextField
                    fullWidth
                    sx={{mt: '10px'}}
                    label="address"
                    name="address"
                    variant="standard"
                    value={inputtingEmployee.address}
                    autoComplete={'off'}
                    onChange={(e) => onInput(e)}

                />
            </DialogContent>

            <DialogActions>
                <Button
                    variant="outlined" color="error"
                    sx={{cursor: 'pointer'}}
                    onClick={() => setIsOpen(false)}
                >
                    CLOSE
                </Button>
                <Button variant="contained" color="success" onClick={onClickSave}>SAVE</Button>
            </DialogActions>
        </Dialog>
    )
}