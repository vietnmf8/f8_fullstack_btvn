import {Box, CircularProgress, Container, Grid, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useMemo, useState} from "react";
import {fetchContacts} from "../../utils/index.js";
import SearchBar from '../SearchBar/index.jsx'
import ContactCard from '../ContactCard/index.jsx'
import ContactForm from "../ContactForm/index.jsx";
import {clearError} from "../../store/contactsSlice/index.jsx";

const ContactList = () => {

    const dispatch = useDispatch();
    const {items, loading, error, searchTerm} = useSelector((state) => state.contacts);

    // Fetch contact khi component mount
    useEffect(() => {
        console.log("Items lần đầu mount: ", items);
    }, [items]);

    // Fetch contact khi component mount
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);


    // State cho form dialog (Mở/Đóng)
    const [isOpenForm, setIsOpenForm] = useState(false);
    const [editingContact, setEditingContact] = useState(null);


    // Xử lý khi nhấn vào nút Huỷ
    const onCloseDialog = () => {
        setIsOpenForm(false);
    }

    // Xử lý clear error
    const handleClearError = () => {
        dispatch(clearError());
    };


    // Filtered contacts dựa trên search term
    const filteredContacts = useMemo(() => {
        if (!searchTerm) {
            return items;
        }
        return items.filter((contact) => {
            // Các trường lọc
            const fullName = `${contact.firstName} ${contact.lastName}`.toLowerCase();
            const email = contact.email.toLowerCase();
            const search = searchTerm.toLowerCase();

            return fullName.includes(search) || email.includes(search);
        })
    }, [items, searchTerm]);


    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            {/* Header */}
            <Typography
                variant="h4"
                component="h1"
                gutterBottom
                align="center"
            >
                Quản lý danh bạ
            </Typography>


            {/* SearchBar */}
            <SearchBar
                setIsOpenForm={setIsOpenForm}
                setEditingContact={setEditingContact}
            />

            {/* Loading */}
            {
                loading && (
                    <Box sx={{display: 'flex', justifyContent: 'center', my: 4}}>
                        <CircularProgress/>
                        <Typography sx={{ml: 2}}>Loading...</Typography>
                    </Box>
                )
            }

            {/* Danh sách contacts */}
            {!loading && (
                <>
                    {
                        filteredContacts.length === 0 ? (
                            <Box sx={{ textAlign: 'center', py: 4 }}>
                                <Typography variant="h6" color="text.secondary">
                                    {searchTerm ? "Không tìm thấy liên hệ nào" : "Chưa có liên he nào"}
                                </Typography>
                            </Box>
                        ) : (
                            <Grid container spacing={2}>
                                {
                                    filteredContacts.map((contact) => (
                                        <Grid item xs={12} sm={6} md={4} lg={3} key={contact.id}>

                                            {/* Contact Card */}
                                            <ContactCard
                                                contact={contact}
                                                setIsOpenForm={setIsOpenForm}
                                                setEditingContact={setEditingContact}
                                            />
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        )
                    }
                </>
            )}

            {/* Contact Form */}
            <ContactForm
                open={isOpenForm}
                onClose={onCloseDialog}
                contact={editingContact}
                loading={loading}
                setEditingContact={setEditingContact}
                setIsOpenForm={setIsOpenForm}
            />
        </Container>
    )
}

export default ContactList;