import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {deleteContact} from "../../utils/index.js";

const DeleteDialog = ({isOpenDeleteDialog, setIsOpenDeleteDialog, contact, loading}) => {

    const dispatch = useDispatch();

    /* ==========================================================================================
     * Các hàm xử lý
     * ========================================================================================== */

    // Hàm xử lý khi nhấn nút Đóng
    const onCloseDeleteDialog = () => {
        setIsOpenDeleteDialog(false)
    }

    // Hàm xử lý khi nhấn nút xoá
    const onYes = async (contactId) => {
        await dispatch(deleteContact(contactId));
        onCloseDeleteDialog()
    }


    /* ==========================================================================================
     * Giao diện
     * ========================================================================================== */
    return (
        <Dialog
            open={isOpenDeleteDialog}
            onClose={onCloseDeleteDialog}
            maxWidth="sm"
            fullWidth
        >
            <DialogTitle>Dialog Delete Contact</DialogTitle>

            <DialogContent>
                <Typography
                    variant="h6"
                    color="text.secondary"
                    component="h2"
                >
                    {
                        contact && `Bạn có chắc chắn muốn xoá ${contact.firstName} ${contact.lastName}`
                    }
                </Typography>
            </DialogContent>

            <DialogActions>
                <Button onClick={onCloseDeleteDialog}>
                    Huỷ
                </Button>

                <Button
                    onClick={() => onYes(contact.id)}
                    color="error"
                    variant="outlined"
                    disabled={loading}
                >
                    Xoá
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default DeleteDialog