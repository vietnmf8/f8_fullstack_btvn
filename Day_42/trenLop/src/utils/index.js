import {createAsyncThunk} from "@reduxjs/toolkit";
import api from "../plugin/api.js";

const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        try {
            const {data} = await api.get('products/');
            console.log("Fetched products:", data);
            return data;
        }
        catch (error) {
            console.error("Failed to fetch products:", error);
            throw error; // Rethrow the error to be handled by extraReducers
        }
    }
)


export {fetchProducts};