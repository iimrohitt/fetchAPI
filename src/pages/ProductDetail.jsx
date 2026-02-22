import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../utils/axios';

const ProductDetail = () => {
    const { id } = useParams();
    const [data, setdata] = useState(null);

    const fatchSingleProduct = async () => {
        try {
            const res = await api.get(`/product/${id}`)
            console.log(res.data)
            setdata(res.data)
        } catch (error) {
            console.error("Single Product Not Fatch", error);
        }
    }

    useEffect(() => {
        fatchSingleProduct()
    }, [id])

    if (!data) {
        return <p>loading....</p>
    }
    return (
        <div className="max-w-6xl mx-auto mt-10 p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                <div>
                    <img
                        className="w-[80%] object-cover rounded-lg shadow-md"
                        src={data.thumbnail}
                        alt={data.title}
                    />

                    <div className="flex gap-3 mt-4">
                        {data.images.map((img, index) => (
                            <img
                                key={index}
                                className="w-20 h-20 object-cover rounded cursor-pointer border"
                                src={img}
                                alt="product"
                            />
                        ))}
                    </div>
                </div>

                <div>
                    <h1 className="text-2xl font-bold">{data.title}</h1>

                    <p className="text-gray-600 mt-2">{data.description}</p>

                    <div className="mt-4">
                        <span className="text-xl font-semibold">₹ {data.price}</span>
                        <span className="ml-3 text-green-600">
                            {data.discountPercentage}% OFF
                        </span>
                    </div>

                    <div className="mt-2">
                        <span className="font-medium">Rating:</span> {data.rating} ⭐
                    </div>

                    <div className="mt-2">
                        <span className="font-medium">Brand:</span> {data.brand}
                    </div>

                    <div className="mt-2">
                        <span className="font-medium">Category:</span> {data.category}
                    </div>

                    <div className="mt-2">
                        <span className="font-medium">Stock:</span> {data.stock}
                    </div>

                    <div className="mt-2">
                        <span className="font-medium">Warranty:</span>{" "}
                        {data.warrantyInformation}
                    </div>

                    <div className="mt-2">
                        <span className="font-medium">Return Policy:</span>{" "}
                        {data.returnPolicy}
                    </div>

                </div>
            </div>

            <div className="mt-10">
                <h2 className="text-xl font-bold mb-4">Customer Reviews</h2>

                {data.reviews.map((review, index) => (
                    <div
                        key={index}
                        className="border p-3 rounded mb-3 shadow-sm"
                    >
                        <p className="font-semibold">{review.reviewerName}</p>
                        <p>{review.comment}</p>
                        <p>Rating: {review.rating} ⭐</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductDetail