/* API */

const baseUrl = 'http://localhost:3000'

// Function: API -> Javascript
const getMethod = async (endPoint) => {
    try {
        const response = await fetch(`${baseUrl}/${endPoint}`)
        return await response.json()
    }
    catch (error) {
        console.error(error)
    }
}


// POST
const postMethod = async (endPoint, body) => {
    try {
        const response = await fetch(
            `${baseUrl}/${endPoint}`,
            {
                method: 'POST', // Truyền method POST
                headers: {
                    'Content-Type': 'application/json', // Truyền dữ liệu theo dạng JSON
                },
                body: JSON.stringify(body), // Ép object -> dạng text (JSON)
            }
        )
        return await response.json()
    }
    catch (error) {
        console.error(error)
    }
}

export {
    getMethod,
    postMethod,
}
