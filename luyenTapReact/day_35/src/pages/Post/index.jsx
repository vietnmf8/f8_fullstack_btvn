import {useState, useEffect} from "react";
import { getApi } from "../../utils/index.js";
import {toast} from "react-toastify";

export default function () {
    /* ==========================================================================================
     * Khai báo biến & state
     * ========================================================================================== */

    // Danh sách các bài posts
    const [posts, setPosts] = useState([])

    // Trạng thái loading
    const [loading, setLoading] = useState(false)

    // Thông báo lỗi!!
    const [error, setError] = useState(null)


    /* ==========================================================================================
     * Logic
     * ========================================================================================== */

    // FetchPosts
    const fetchPosts = async () => {
        try {
            setLoading(true)
            const data = await getApi('post/')

            if (data) {
                setPosts(data)
                toast.success("Tải bài viết thành công!")
            }
        }
        catch {
            setError("Lỗi khi tải bài viết")
        }
        finally {
            setLoading(false)
        }
    }


    /* ==========================================================================================
     * useEffect -> Api
     * ========================================================================================== */

    useEffect(() => {
        fetchPosts()
    }, []);


    /* ==========================================================================================
     * Giao diện
     * ========================================================================================== */

    return (
        <>
            <h1>Post Page</h1>
        </>
    )
}