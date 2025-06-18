
import {getApi, postApi, getNewToken} from "./api.js";

/* Truy cap phan tu */
const loginBtnRef = document.getElementById("login-btn");
const emailInputRef = document.querySelector("input[name='email']");
const passwordInputRef = document.querySelector("input[name='password']");


// Click event
loginBtnRef.addEventListener("click", async () => {
    const email = emailInputRef.value;
    const password = passwordInputRef.value;

    // handle login
    const data = await postApi('login/', {
        email: email,
        password: password
    })

    // Save localStorage
    localStorage.setItem('access', data.access)
    localStorage.setItem('refresh', data.refresh)

    // Access to Home Page
    window.location.href = "./homePage.html"

})



const onMounted = () => {
    const accessToken = localStorage.getItem("access");
    // Tai login.hmtl:
    // Nếu trong localStorage da co accessToken
    // -> chuyển sang trang homepage.html
    if (accessToken) {
        window.location.href = './homePage.html';
    }
}





/* Call onMounted */
onMounted()