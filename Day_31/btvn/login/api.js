const BASE_URL = 'https://8fty49z8qb.execute-api.ap-southeast-1.amazonaws.com'


// GET
const getApi = async (endpoint) => {
    try {
        const response = await fetch(`${BASE_URL}/${endpoint}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.access}`

            },
        })
        const data = await response.json()

        // Nếu "detail": "token expired" -> POST API login/get_new_token
        if (data.detail === 'token expired') {
            await getNewToken(() => {
                getApi(endpoint)
            })
        }
        // Return
        return data
    }
    catch (error) {
        console.log(error)
    }
}


// POST
const postApi = async (endpoint, body) => {
    try {
        const response = await fetch(`${BASE_URL}/${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.access}`
            },
            body: JSON.stringify(body),
        })
        const data = await response.json()

        // Nếu "detail": "token expired" -> POST API login/get_new_token
        if(data.detail === 'token expired') {
            await getNewToken(() => {
                postApi(endpoint, body)
            })
        }
        // Return
        return data

    }
    catch (error) {
        console.log(error)
    }
}

// POST: login/get_new_token
const getNewToken = async (callback) => {

    const response = await fetch(`${BASE_URL}/login/get_new_token/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // Lay refresh
            refresh: localStorage.getItem("refresh"),
        }),
    })

    const data = await response.json()
    // return data

    // Neu trong data co ton tai "access": ... -> luu vao localStorage
    if (data.access) {
        localStorage.setItem("access", data.access)
        await callback()
    }
}

export {getApi, postApi, getNewToken}