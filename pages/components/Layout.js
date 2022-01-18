import React from 'react'
import { container } from './layout.module.css'

const Layout = ({Children}) => {
    return (
        <div>
            {Children}   
        </div>
    )
}

export default Layout
