



// import { NavLink } from "react-router-dom"

// const Header = () => {
//     return (
//         <Header>
//             <nav>
//                 <ul>
//                     <li><NavLink to='/'>Home</NavLink></li>
//                     <li><NavLink to='/product'>Product</NavLink></li>
//                     <li><NavLink to='/user'>User</NavLink></li>
//                     <li><NavLink to='/post'>Post</NavLink></li>
//                 </ul>
//             </nav>
//         </Header>
//     )
// }

// export default Header


import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <nav className='w-7xl m-auto mt-2'>
                <ul className='flex justify-center items-center gap-4 px-5 py-3 bg-gray-800 rounded-4xl text-white '>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/product'>Product</NavLink></li>
                    <li><NavLink to='/user'>User</NavLink></li>
                    <li><NavLink to='/post'>Post</NavLink></li>
                    <li><NavLink to='/form'>Form</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header