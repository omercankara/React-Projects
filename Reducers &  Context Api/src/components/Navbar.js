import React from 'react'

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-dark bg-primary mb-2">
            <div className="container">
                <a href="/" className="navbar-brand d-flex">
                    <i className={props.icon}></i>
                    <p className='ms-4'>{props.title}</p>
                </a>
            </div>
        </nav>
    )
}

export default Navbar