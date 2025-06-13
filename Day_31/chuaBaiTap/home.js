const onMounted = () => {
    const accessToken = localStorage.getItem('access');
    if (!accessToken) {
        window.location.href = './index.html';
    }
}

onMounted()