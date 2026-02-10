import { useEffect, useState } from 'react'
import api from '../utils/axios'
import { Link } from 'react-router-dom';

const Product = () => {
    const [data, setData] = useState([]);

    const fetchProduct = async () => {
        try {
            const res = await api.get('/product');
            setData(res.data.products);
            console.log(res.data)
            // console.log("TYPE:", typeof res.data.products);
        } catch (error) {
            console.error("FetchApi Error : ", error);
        }
    }

    useEffect(() => {
        fetchProduct()
    }, []);

    return (
        <>
            {data.length ? <div className='max-w-7xl m-auto mt-5'>
                <ul className='w-full grid grid-cols-4 gap-4'>
                    {data.map((item) => (
                        <li className='w-full shadow-gray-300 rounded-lg shadow-md' key={item.id} >
                            <Link to={`/product/${item.id}`} >
                                <img loading="lazy" className='w-full' src={item.thumbnail} alt={item.tags[0]} />
                                <h4 className='text-center font-semibold'>{item.title}</h4>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div > : <p>loading....</p>
            }
        </>
    )
}

export default Product
