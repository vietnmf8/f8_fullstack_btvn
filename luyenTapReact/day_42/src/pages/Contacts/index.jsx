import ContactList from "../../components/ContactList/index.jsx";
import SearchBar from "../../components/SearchBar/index.jsx";
import {Container, Typography} from "@mui/material";
import {useState} from "react";

const Contacts = () => {

    /* ==========================================================================================
     * Giao diện
     * ========================================================================================== */
    return (
        <Container
            maxWidth="lg"
            sx={{
                py: 4,
                border: '1px solid gray',

            }}
        >
            {/* Header */}
            <Typography
                variant="h4"
                component="h2"
                fontWeight="bold"
                fontFamily={'Lato'}
                color="textSecondary"
                align="center"
                gutterBottom
            >
                Quản lý danh bạ
            </Typography>

            {/* Component chính hiển thị danh bạ */}
            <ContactList/>
        </Container>
    )
}

export default Contacts