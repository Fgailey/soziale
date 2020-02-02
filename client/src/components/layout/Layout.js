import React from "react";


function Layout (props) {

        return(
            <div>
                <div>
                    {/* <span>{console.log(props)}</span> */}
                    <span>{props.sender.name}: </span>
                    <span>{props.message}</span>
                </div>
            </div>
        )
}

export default Layout;