import {Button} from "@mui/material";
import {useNavigate} from "react-router";
import {useEffect} from "react";
import {get} from "../../utils/index.js";

export default function () {
    //
    // const navigate = useNavigate();
    //
    // const onClick = () => {
    //     navigate('/employees');
    // }

    const getPosts = async () => {
        const posts = await get('post/')
    }

    useEffect(() => {
        getPosts()
    }, []);


    return (
        <>
            <h1>Home</h1>
        </>
    )
}
