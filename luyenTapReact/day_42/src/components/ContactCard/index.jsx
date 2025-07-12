import {Avatar, Box, Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {Email, Phone, Delete, Edit} from "@mui/icons-material";
import {useEffect} from "react";


const ContactCard = ({
                         contact,
                         setEditingContact,
                         setIsOpenContactForm,
                         setIsOpenDeleteDialog,
                         setDeleteContact
                     }) => {

    /* ==========================================================================================
     * Khai báo các biến
     * ========================================================================================== */

    // Kết hợp firstName + lastName
    const fullName = `${contact.firstName} ${contact.lastName}`;


    /* ==========================================================================================
     * Các hàm xử lý
     * ========================================================================================== */

    // Xu lý khi nhấn vào nút Edit
    const onEdit = (contact) => {
        setEditingContact(contact)
        setIsOpenContactForm(true)
    }

    // Xử lý khi nhấn vào nút Xoá
    const onDelete = (id) => {
        setIsOpenDeleteDialog(true)
        setDeleteContact(contact)
    }


    /* ==========================================================================================
     * Giao diện
     * ========================================================================================== */
    return (
        <Card sx={{
            minWidth: 300,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            border: '1px solid lightgray',
            bgcolor: '#ebffff',
            alignItems: 'center',


        }}>

            <CardContent sx={{margin: 'auto'}}>
                {/* Avatar */}
                <Avatar
                    src={contact.image}
                    alt={fullName}
                    sx={{
                        margin: 'auto',
                        width: 100,
                        height: 100,
                        bgcolor: 'blue',
                    }}>
                    {fullName.charAt(0).toUpperCase()}
                </Avatar>


                {/* Tên */}
                <Typography
                    variant="h5"
                    component="h2"
                    gutterBottom
                    sx={{marginTop: 2}}
                    fontWeight="bold"
                    fontFamily={["Lato"]}
                    textAlign={'center'}
                >
                    {fullName}
                </Typography>


                {/* Email */}
                <Box display="flex" alignItems="center" gap={2}>
                    <Email
                        sx={{
                            margin: 'auto',
                        }}
                    />
                    <Typography
                        variant="h6"
                        component="h3"
                        gutterBottom
                        sx={{marginTop: 1}}
                        fontWeight="bold"
                        fontFamily={["Lato"]}
                        textAlign={'center'}
                    >
                        {contact.email}
                    </Typography>
                </Box>


                {/* Phone */}
                <Box display="flex" alignItems="center" gap={2}>
                    <Phone/>
                    <Typography
                        variant="h6"
                        component="h3"
                        gutterBottom
                        sx={{marginTop: 1}}
                        fontWeight="bold"
                        fontFamily={["Lato"]}
                        textAlign={'center'}
                    >
                        {contact.phone}
                    </Typography>
                </Box>
            </CardContent>

            <CardActions sx={{marginBottom: '10px'}}>
                <Button
                    variant="outlined"
                    color="primary"
                    startIcon={<Edit/>}
                    onClick={() => onEdit(contact)}

                >
                    Sửa
                </Button>

                <Button
                    variant="contained"
                    color="error"
                    startIcon={<Delete/>}
                    onClick={() => onDelete(contact.id)}
                >
                    Xoá
                </Button>
            </CardActions>
        </Card>
    )
}

export default ContactCard