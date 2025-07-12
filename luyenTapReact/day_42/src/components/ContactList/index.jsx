import {useDispatch, useSelector} from "react-redux";
import {useEffect, useMemo, useState} from "react";
import {fetchContacts} from "../../utils/index.js";
import {Alert, Box, CircularProgress, Container, Grid, Typography} from "@mui/material";
import {clearError} from '../../store/contactsSlice/index.jsx'
import ContactCard from '../ContactCard/index.jsx';
import SearchBar from "../SearchBar/index.jsx";
import FormData from "../FormData/index.jsx";
import DeleteDialog from "../DeleteDialog/index.jsx";

const ContactList = () => {
    /* ==========================================================================================
     * Lấy ra các biến  và state
     * ========================================================================================== */

    // Dispatch và các biến chung
    const dispatch = useDispatch();
    const {items, loading, error, searchTerm} = useSelector(state => state.contacts);

    // State theo dõi trạng thái mở/đóng form
    const [isOpenContactForm, setIsOpenContactForm] = useState(false);

    // State theo dõi trạng thái mở/đóng Delete Dialog
    const [isOpenDeleteDialog, setIsOpenDeleteDialog] = useState(false);

    // State theo dõi trạng thái Thêm mới/ Chỉnh sửa
    const [editingContact, setEditingContact] = useState(null)

    // State theo dõi trạng thái Xoá
    const [deleteContact, setDeleteContact] = useState(null)



    /* ==========================================================================================
     * useEffect:
     * -> Fetch API
     * -> Theo dõi trạng thái loading
     * ========================================================================================== */

    // Fetch API -> items
    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    // Theo dõi items
    useEffect(() => {
        console.log('- Items: ', items)
    }, [items])

    // Theo dõi trạng thái loading
    useEffect(() => {
        console.log('- ⌛Loading: ', loading)
    }, [loading])

    // Theo dõi trạng thái editingContact
    useEffect(() => {
        console.log('- ⌛Contact đang sửa: ', editingContact)
    }, [editingContact])

    // Theo dõi trạng thái deleteContact
    useEffect(() => {
        console.log('- ⌛Contact chuẩn bị xoá: ', deleteContact)
    }, [deleteContact])



    /* ==========================================================================================
     * Function
     * ========================================================================================== */

    // Xử lý khi nhấn vào nút ĐÓNG (Alert Error)
    const onCloseError = () => {
        dispatch(clearError())
    }

    // Biến danh sách được lọc dựa vào searchTerm
    const filteredContacts = useMemo(() => {
        if (!searchTerm) return items

        return items.filter(contact => {
            const fullName = `${contact.firstName} ${contact.lastName}`.toLowerCase()
            const email = contact.email.toLowerCase()
            const search = contact.search.toLowerCase()

            return fullName.includes(search) || email.includes(search)
        })
    }, [items, searchTerm])



    /* ==========================================================================================
     * GIAO DIỆN
     * ========================================================================================== */
    return (
        <Container>

            {/* Search Bar va Button */}
            <SearchBar
                setIsOpenContactForm={setIsOpenContactForm}
                setEditingContact={setEditingContact}
            />


            {/* Error Alert */}
            {
                error && (
                    <Alert
                        severity="error"    // Kiểu cảnh báo
                        sx={{mb: 2}}
                        onClose={onCloseError}
                    >
                        {error}
                    </Alert>
                )
            }


            {/* Loading */}
            {
                loading && (
                    <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", my: 4}}>
                        <CircularProgress/>
                        <Typography
                            sx={{ml: 2}}
                            fontWeight="bold"
                            fontFamily={'Lato'}
                            fontSize={20}
                        >
                            Loading...
                        </Typography>
                    </Box>
                )
            }

            {/* Danh sách contacts */}
            {
                !loading && (
                    <>
                        {
                            filteredContacts.length === 0 ? (
                                    <Box>
                                        <Typography variant={'h4'} color={'textSecondary'}>
                                            {searchTerm ? "Không tìm thấy liên hệ đó" : "Chưa có liên hệ nào"}
                                        </Typography>
                                    </Box>
                                ) :
                                (
                                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                        {
                                            filteredContacts.map((contact, index) => (
                                                <Grid
                                                    size={{ xs: 2, sm: 4, md: 4 }}
                                                    key={index}
                                                >
                                                    <ContactCard
                                                        contact={contact}
                                                        setIsOpenContactForm={setIsOpenContactForm}
                                                        setEditingContact={setEditingContact}
                                                        setDeleteContact={setDeleteContact}
                                                        setIsOpenDeleteDialog={setIsOpenDeleteDialog}
                                                    />
                                                </Grid>
                                            ))
                                        }
                                    </Grid>
                                )
                        }
                    </>
                )
            }


            {/* Form Data */}
            <FormData
                isOpenContactForm={isOpenContactForm}
                setIsOpenContactForm={setIsOpenContactForm}
                setEditingContact={setEditingContact}
                contact={editingContact}
                loading={loading}
            />

            {/* Delete Dialog */}
            <DeleteDialog
                isOpenDeleteDialog={isOpenDeleteDialog}
                setIsOpenDeleteDialog={setIsOpenDeleteDialog}
                contact={deleteContact}
                loading={loading}
            />

        </Container>
    )
}

export default ContactList