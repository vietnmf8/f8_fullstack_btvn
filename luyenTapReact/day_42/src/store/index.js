import {configureStore} from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice/index.jsx";

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
    }
})

export default store;