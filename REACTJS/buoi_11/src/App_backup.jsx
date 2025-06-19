import {useEffect, useState} from 'react'
import './App.css'

// Viết Custom Hook useInput
const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await fetch(url)
                const result = await response.json()
                setData(result)
            }
            catch (error) {
                setError(error.message)
            }
            finally {
                setLoading(false)
            }
        }

        fetchData();
    }, [url])

    return { data, loading, error }
}



// Sử dụng trong form
function App() {
    const { data, loading, error } = useFetch('https://api.example.com/user/1');
    if (loading) return <p>Dang tai...</p>
    if (error) return <p>Loi: {error}</p>


    return (
      <>
          <div>Xin chao {data?.name}</div>
      </>
  )
}
export default App
