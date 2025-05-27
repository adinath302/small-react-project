import React from 'react'

const Button = ({ title }) => {
    return (
        <div className=' '>
            <button className='bg-gray-600 text-white rounded-[7px] px-7 py-2 text-[13px] font-semibold word-spacing-wide'>{title}</button>
        </div>
    )
}

export default Button