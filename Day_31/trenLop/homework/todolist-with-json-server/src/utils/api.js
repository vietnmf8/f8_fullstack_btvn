// Base URL API
const baseUrl = 'http://localhost:3000'

// GET Api
const getApi = async (endpoint) => {
    try {
        const response = await fetch(`${baseUrl}/${endpoint}`)
        return await response.json()
    }
    catch (e) {
        console.error(e)
    }
}

// POST Api
const postApi = async (endpoint, body) => {
    try {
        const response = await fetch(`${baseUrl}/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
        return await response.json()
    }
    catch (e) {
        console.error(e)
    }
}


// put Api
const putApi = async (endpoint, body) => {
    try {
        const response = await fetch(`${baseUrl}/${endpoint}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
        return await response.json()
    }
    catch (e) {
        console.error(e)
    }
}

// dele

export {getApi, postApi, putApi}