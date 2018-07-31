import React, { Component } from 'react'

class NotFound extends Component {
    render(){
        return(
            <div className="container">
                <div className="alert alert-warning">
                    <button type="button" className="close" data-dissmiss="alert" aria-hidden="true">&time;
                    </button>
                    <strong>Khong tim thay trang</strong>
                </div>
            </div>
        )
    }
}
export default NotFound;