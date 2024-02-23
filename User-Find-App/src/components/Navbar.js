import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-primary mb-2">
                <div className="container">
                    <a href="/" className="navbar-brand d-flex">
                        <i className={this.props.icon}></i>
                        <p className='ms-4'>{this.props.title}</p>
                    </a>
                </div>
            </nav>
        )
    }
}

export default Navbar