import {Dialog, DialogContent, DialogTitle} from "@mui/material";

export default function ({isOpen, setIsOpen}) {
    return (
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
            <DialogTitle>Comfirm Delete</DialogTitle>
            <DialogContent>
                <span>Are you sure delete?</span>
            </DialogContent>
        </Dialog>
    )
}