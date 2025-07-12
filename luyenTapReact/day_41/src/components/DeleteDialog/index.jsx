import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import {useDispatch} from "react-redux";
import {deleteAPI} from "../../utils/index.js";

const DeleteDialog = ({open, onClose, product}) => {
    const dispatch = useDispatch()
    const onConfirm = () => {
        dispatch(deleteAPI(product.id))
        onClose()
    }

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Xoa</DialogTitle>

            <DialogContent>
                Ban co chac chan muon xoa khong?
            </DialogContent>

            <DialogActions>
                <Button onClick={onConfirm} color="primary">Confirm</Button>
                <Button color="error" onClick={onClose} variant={'outlined'}>Huy</Button>

            </DialogActions>
        </Dialog>
    )
}

export default DeleteDialog