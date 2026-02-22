import React, { useEffect, useState } from 'react'
import api from '../utils/axios';
import { Link } from 'react-router-dom';

const Post = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchPost = async () => {
        try {
            setLoading(true);
            const res = await api.get('/posts');   // FIXED endpoint
            setPosts(res.data.posts);
        } catch (error) {
            console.error("post Fetch error", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchPost()
    }, []);

    if (loading) {
        return <p className="text-center mt-10">Loading Posts...</p>
    }

    return (
        <div className="max-w-6xl mx-auto mt-10 p-4">
            <h2 className="text-2xl font-bold text-center mb-6">All Posts</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {posts.map((post) => (
                    <div
                        key={post.id}
                        className="border rounded-lg p-4 shadow-md bg-white"
                    >
                        <Link to={`/posts/${post.id}`}>
                            <h3 className="font-semibold text-lg mb-2">
                                {post.title}
                            </h3>

                            <p className="text-sm text-gray-600">
                                {post.body}
                            </p>

                            <div className="mt-3 flex gap-2 flex-wrap">
                                {post.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="text-xs bg-gray-200 px-2 py-1 rounded"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-3 text-sm flex justify-between">
                                <span>👍 {post.reactions.likes}</span>
                                <span>👎 {post.reactions.dislikes}</span>
                                <span>👁 {post.views}</span>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Post
