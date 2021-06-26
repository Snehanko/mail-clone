import React from 'react'
import Header from './Header'
import Mail_list from './Mail-list'
import Sidebar from './Sidebar'

const Mail = () => {
    return (
        <div className="container">
            <Header/>
            <div className="mail-container">
                <Sidebar />
                <Mail_list />
            </div>
        </div>
    )
}

export default Mail
