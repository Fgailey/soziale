import React from "react";


function Layout (props) {

        return(
            <div>
                {/* <div>
                    <span>{props.sender.name}: </span>
                    <span>{props.message}</span>
                </div> */}

                <li className="d-flex justify-content-between mb-4 pb-3">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg" alt="avatar" className="avatar rounded-circle mr-2 ml-lg-3 ml-0 z-depth-1" />
                    <div className="chat-body white p-3 ml-2 z-depth-1">
                        <div className="header">
                        <strong className="primary-font">{props.sender.name}</strong>
                        <small className="pull-right text-muted"><i className="far fa-clock" /> 12 mins ago</small>
                        </div>
                        <hr className="w-100" />
                        <p className="mb-0">
                        {props.message}
                        </p>
                    </div>
                </li>

            </div>
        )
}

export default Layout;