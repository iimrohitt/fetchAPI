import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../utils/axios';

const UserDetail = () => {
    const [user, setUser] = useState(null);
    const { id } = useParams();

    const singleUser = async () => {
        try {
            const res = await api.get(`/users/${id}`);
            setUser(res.data);
            console.log(res.data);
        } catch (error) {
            console.error("Single USER Fetch Failed", error);
        }
    }

    useEffect(() => {
        singleUser();
    }, [id]);

    if (!user) {
        return <p>Loading...</p>
    };

    return (
        <div className="max-w-6xl mx-auto mt-10 p-6">

            <div className="bg-white shadow-md rounded-lg p-6">

                <div className="flex items-center gap-6">
                    <img
                        src={user.image}
                        alt={user.username}
                        className="w-32 h-32 rounded-full object-cover border"
                    />

                    <div>
                        <h2 className="text-2xl font-bold">
                            {user.firstName} {user.lastName}
                        </h2>

                        <p className="text-gray-500">@{user.username}</p>

                        <span className="inline-block mt-2 bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded">
                            {user.role}
                        </span>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">

                    <p><b>Email:</b> {user.email}</p>
                    <p><b>Phone:</b> {user.phone}</p>
                    <p><b>Age:</b> {user.age}</p>
                    <p><b>Gender:</b> {user.gender}</p>
                    <p><b>Blood Group:</b> {user.bloodGroup}</p>
                    <p><b>University:</b> {user.university}</p>

                    <p><b>Height:</b> {user.height} cm</p>
                    <p><b>Weight:</b> {user.weight} kg</p>

                    <p><b>Eye Color:</b> {user.eyeColor}</p>
                    <p><b>Hair:</b> {user.hair.color} - {user.hair.type}</p>
                </div>

                <div className="mt-6">
                    <h3 className="font-bold text-lg mb-2">Address</h3>

                    <p>
                        {user.address.address}, {user.address.city},
                        {user.address.state}, {user.address.country}
                    </p>
                </div>


                <div className="mt-6">
                    <h3 className="font-bold text-lg mb-2">Company Info</h3>

                    <p><b>Name:</b> {user.company.name}</p>
                    <p><b>Department:</b> {user.company.department}</p>
                    <p><b>Title:</b> {user.company.title}</p>
                </div>

                <div className="mt-6">
                    <h3 className="font-bold text-lg mb-2">Bank Details</h3>

                    <p><b>Card Type:</b> {user.bank.cardType}</p>
                    <p><b>Currency:</b> {user.bank.currency}</p>
                    <p><b>IBAN:</b> {user.bank.iban}</p>
                </div>

            </div>
        </div>
    )
}

export default UserDetail