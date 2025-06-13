const onMounted = () => {
    const accessToken = localStorage.getItem('access');
    if (accessToken) {
        window.location.href = './home.html';
    }
}

onMounted()