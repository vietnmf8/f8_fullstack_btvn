import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {useState} from "react";


export default function DialogDeleteConfirm ({isOpen, onClose, onYesDelete, curEmployee}) {
    // Tránh Render lại App

    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
        >
            <DialogTitle sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <span>Delete Employee</span>
                <CloseIcon
                    color='primary'
                    onClick={onClose}
                    sx={{cursor: 'pointer'}}
                />
            </DialogTitle>

            <DialogContent>
                <span>Are you sure?</span>
            </DialogContent>

            <DialogActions>
                <Button
                    variant="outlined"
                    color="error"
                    onClick={onClose}
                >
                    NO
                </Button>

                <Button
                    variant="outlined"
                    color="info"
                    onClick={() => {
                        console.log('Da xoa thanh cong!')
                        onYesDelete(curEmployee)
                    }}
                >
                    YES
                </Button>
            </DialogActions>
        </Dialog>
    )
}