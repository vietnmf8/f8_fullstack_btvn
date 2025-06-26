import Dialog from "@mui/material/Dialog";
import {Button, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";

export default function ConfirmDeleteDialog({isOpen, setIsOpen}) {
    return (
        <Dialog
            open={isOpen} // Trang thai co dang mo khong?
            onClose={() => setIsOpen(false)} // Khi close
            sx={{width: '1000px', margin: '20px auto', height: '500px'}}
        >
            <DialogTitle>Confirm Delete</DialogTitle>
            <DialogContent>
                <span>Ban co chac chan muon xoa khong?</span>
            </DialogContent>
        </Dialog>
    )
}