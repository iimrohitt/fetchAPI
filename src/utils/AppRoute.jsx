import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Product from '../pages/Product'
import Post from '../pages/Post'
import User from '../pages/User'
import ProductDetail from '../pages/ProductDetail'
import UserDetail from '../pages/UserDetail'
import PostDetails from '../pages/PostDetails'
import FromHandler from '../pages/FromHandler'

const AppRoute = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product' element={<Product />} />
            <Route path='/product/:id' element={<ProductDetail />} />
            <Route path='/post' element={<Post />} />
            <Route path='/posts/:id' element={<PostDetails />} />
            <Route path='/user' element={<User />} />
            <Route path='/users/:id' element={<UserDetail />} />
            <Route path='/form' element={<FromHandler />} />
        </Routes>
    )
}

export default AppRoute
