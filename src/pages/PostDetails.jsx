import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../utils/axios';

const PostDetails = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    const fetchSinglePost = async () => {
        try {
            const res = await api.get(`/posts/${id}`)
            setPost(res.data);
            console.log(res.data)
        } catch (error) {
            console.error("error for find Single Post ", error);
        }
    }
    useEffect(() => {
        fetchSinglePost()
    }, [id]);
    if (!post) {
        return <p>Loading...</p>
    }
    return (
        <div className="max-w-4xl mx-auto mt-10 p-6">

            <div className="border rounded-lg shadow-md p-6 bg-white">

                <h1 className="text-2xl font-bold mb-4">
                    {post.title}
                </h1>

                <p className="text-gray-700 mb-6">
                    {post.body}
                </p>

                <div className="flex gap-2 flex-wrap mb-4">
                    {post.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="text-xs bg-gray-200 px-3 py-1 rounded"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex justify-between text-sm mt-4 border-t pt-4">

                    <span>👍 Likes: {post.reactions.likes}</span>

                    <span>👎 Dislikes: {post.reactions.dislikes}</span>

                    <span>👁 Views: {post.views}</span>

                </div>

            </div>
        </div>
    )
}

export default PostDetails