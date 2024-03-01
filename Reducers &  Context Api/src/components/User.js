import React from 'react'
import './Style/User.css'; // CSS dosyasını içe aktar


const User = (props) => {
    const { avatar_url, login, html_url } = props.user
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-3">
                    <img src={avatar_url} className='avatar img-fluid rounded-start' alt="" />
                </div>
                <div className="col-md-9">
                    <div className="card-body">
                        <h3 className='card-title'>{login}</h3>
                        <hr></hr>
                        <p>Followers</p>
                        <a href={html_url} className='btn btn-primary'>Github Adress</a>
                        <a href={html_url} className='btn btn-primary ms-2'>Web Site</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User