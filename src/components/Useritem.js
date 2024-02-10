import React from 'react'

const Useritem = (props) => {
    const { user } = props;
    return (
        <div className="card text-center">
            <div className="card-header">
                
            </div>
            <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">{user.email}</p>
            </div>
            <div className="card-footer text-muted">
                
            </div>
        </div>
    )
}

export default Useritem