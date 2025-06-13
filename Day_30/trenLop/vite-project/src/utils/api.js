//Base URL API
const baseUrl = 'http://localhost:3000'

// GET API
const getMethod = async (endpoint) => {
    try { // Neu co loi se nhay vao Catch
        const response = await fetch(`${baseUrl}/${endpoint}`)
        return await response.json()
    }
    catch (e) {
        console.error(e)
    }
}

// POST API
const postMethod = async (endpoint, body) => {
    try {
        const response = await fetch(`${baseUrl}/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body) // Ep ve text -> JSON
        })

        return await response.json()
    }
    catch (e) {
        console.error(e)
    }
}

export {getMethod, postMethod}