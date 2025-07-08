import {useEffect, useState} from 'react'

import './App.css'
import axios from "axios";
import {divide} from "../../../Day_23/calculator/mathOperations.js";

function App() {

    // Danh sách các bài posts
    const [posts, setPosts] = useState([]);

    // Kiem tra xem có post nào đang chỉnh sưửa không
    const [editingPost, setEditingPost] = useState(null)

    // Tạo các trường trong FormData
    const [formData, setFormData] = useState({
        title: '', body: ''
    })

    /* Method */

    // Method GET
    const getPosts = async () => {
        try {
            const {data} = await axios.get('http://localhost:3000/posts')
            setPosts(data.slice(0, 10)); //Lấy 10 bài
        }
        catch (error) {
            console.log(error)
        }
    }

    // Method POST
    const createPost = async () => {
        try {
            const {data} = await axios.post('http://localhost:3000/posts', {
                title: formData.title,
                body: formData.body,
                userId: 1

            })

            // Thêm bài post vào đầu danh sách
            setPosts(prev => [data, ...prev]);
            // Reset truong nhập
            setFormData({title: '', body: ''})
        }
        catch (error) {
            console.log(error)
        }
    }

    // Method PUT
    const putPost = async (id) => {
        try {
            const {data} = await axios.put(`http://localhost:3000/posts/${id}`, {
                title: formData.title,
                body: formData.body,
                userId: 1
            })


            // Cập nhật post trong danh sách
            setPosts(posts.map(post => {
                return post.id === id ? data : post
            }))
            // Reset truong nhập
            setFormData({title: '', body: ''})
        }
        catch (error) {
            console.log(error)
        }

    }

    // Method DELETE
    const deletePost = async (id) => {
        try {
            const {data} = await axios.delete(`http://localhost:3000/posts/${id}`, {
                title: formData.title,
                body: formData.body,
                userId: 1
            })


            // Cập nhật post trong danh sách
            setPosts(posts.filter(post => post.id !== id))
            // Reset truong nhập
            setFormData({title: '', body: ''})
        }
        catch (error) {
            console.log(error)
        }
    }



    /* Kết thúc Method */



    useEffect(() => {
        getPosts()
    }, [])


    // Submit
    const onSubmit = (e) => {
        e.preventDefault()
        if (!formData.body || !formData.title) {
            console.log('nhập đi')
        } else {
            console.log('tạo mới')
            if (editingPost) {
                putPost(editingPost.id)
            } else {
                createPost()
            }
        }
    }

    // Sửa Post
    const onEditPost = (post) => {
        console.log(`Sửa:  ${post}`)
        setEditingPost(post)
        setFormData({
            title: post.title,
            body: post.body,
        })

    }

    // Xoá Post
    const onDeletePost = (postId) => {
        console.log(`Xoá:  ${postId}`)
        deletePost(postId)
    }

    // Huỷ lệnh edit
    const onCancelEdit = () => {
        console.log('Huỷ')
        setFormData({
            title: '',
            body: '',
        })
    }



        return (
        <div style={{padding: '20px'}}>
            <h2>Quản lý bài viết</h2>

            {/* Form Tạo/Sưả */}
            <form onSubmit={onSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder={"Tiêu đề"}
                        value={formData.title}
                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
                    />
                </div>

                <div>
                    <textarea
                        placeholder={'Nội dung'}
                        value={formData.body}
                        onChange={(e) => setFormData({...formData, body: e.target.value})}
                        style={{ width: '100%', height: '80px', padding: '8px', marginBottom: '10px' }}
                    />
                </div>

                <button
                    type="submit"
                >
                    {
                        editingPost ? "Chỉnh sửa" : "Tạo mới"
                    }
                </button>

                <button
                    type="button"
                    onClick={onCancelEdit}
                >
                    Huỷ
                </button>

                {/* Danh sách bài Posts */}
                <div>
                    {
                        posts.map(post => (
                            <div key={post.id}>
                                <h3>{post.title}</h3>
                                <p>{post.body}</p>
                                <button type="button" onClick={() => onEditPost(post)}>Sửa</button>
                                <button type="button" onClick={() => onDeletePost(post.id)}>Xoá</button>
                                <hr/>
                            </div>
                        ))
                    }
                </div>
            </form>

        </div>
    )
}

export default App
