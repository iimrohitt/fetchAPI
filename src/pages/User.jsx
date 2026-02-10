import { useEffect, useState } from "react"
import api from "../utils/axios";
import { Link } from "react-router-dom";

const User = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const fatchAllUser = async () => {
        try {
            setLoading(true)
            const res = await api.get('/users');
            setUsers(res.data.users);
            // console.log(res.data.users)
        } catch (error) {
            console.error("error to Fetch All user", error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fatchAllUser()
    }, []);

    if (loading) {
        return <p className="text-center mt-10">Loading Users...</p>
    }
    return (
        <div className="max-w-7xl mx-auto mt-10 p-4">
            <h2 className="text-2xl font-bold text-center mb-6">Users List</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {users.map((user) => (
                    <div
                        key={user.id}
                        className="border rounded-lg p-4 shadow-md bg-white"
                    > <Link to={`/users/${user.id}`}>
                            <div className="flex items-center gap-4">
                                <img
                                    src={user.image}
                                    alt={user.username}
                                    className="w-16 h-16 rounded-full object-cover border"
                                />

                                <div>
                                    <h3 className="font-semibold text-lg">
                                        {user.firstName} {user.lastName}
                                    </h3>

                                    <p className="text-sm text-gray-500">
                                        @{user.username}
                                    </p>

                                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                                        {user.role}
                                    </span>
                                </div>
                            </div>

                            <div className="mt-4 text-sm">
                                <p>
                                    <span className="font-medium">Email:</span>{" "}
                                    {user.email}
                                </p>

                                <p>
                                    <span className="font-medium">Phone:</span>{" "}
                                    {user.phone}
                                </p>

                                <p>
                                    <span className="font-medium">City:</span>{" "}
                                    {user.address.city}
                                </p>

                                <p>
                                    <span className="font-medium">Company:</span>{" "}
                                    {user.company.name}
                                </p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default User