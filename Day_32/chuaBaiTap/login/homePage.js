import {getApi, postApi, getNewToken} from "./api.js";

const onMounted = async () => {
    const accessToken = localStorage.getItem("access");
    // Tai homePage.html:
    // Nếu trong localStorage mà chưa có gì (clear)
    // -> chuyển sang trong login lun
    if (!accessToken) {
        window.location.href = './login.html';
    }



    //get posts
    const posts = await getApi('post/')

}


// Call function
onMounted()