import {Button, TextField} from "@mui/material";
import {useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {useNavigate} from "react-router";


export default function () {

    const navigate = useNavigate();


    // Bien luu gia tri input
    const [info, setInfo] = useState({
        email: 'admin@gmail.com',
        password: '12345678',
    });

    const onLogin = async () => {
        try {
            //data mang theo: access, refresh
            const {data} = await axios.post('https://8fty49z8qb.execute-api.ap-southeast-1.amazonaws.com/login/', info)
            const {access, refresh} = data
            localStorage.setItem('access', access)
            localStorage.setItem('refresh', refresh)
            toast.success('Login Successful')

            navigate('/');
        }
        catch (error) {
            toast.error('Login Failed')
        }

    }


    return (
        <>
            <h1>Login</h1>

            <TextField
                label={"Email"}
                value={info.email || ""}
                onChange={(e) => {
                    setInfo({...info, email: e.target.value});
                }}
            />
            <TextField
                label={"Password"}
                type="password"
                value={info.password || ""}
                onChange={(e) => {
                    setInfo({...info, password: e.target.value});
                }}
            />
            <Button onClick={onLogin}>Login</Button>
        </>
    )
}