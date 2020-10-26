import React from 'react';
import './RegularComponent.scss'; 

interface ReqularComponentProps{
    "regular-title"?:  string | null;
    "regular-body"?: any;
}

const ReqularComponent =(props: ReqularComponentProps)=>{

    const { "regular-title": regular_title, "regular-body": regular_body} = props;

    return (
        <>
            <p className="Regular-Header">{regular_title}</p>
            {/* <p className="Regular-Body">{regular_body}</p> */}
            <div dangerouslySetInnerHTML={{__html: regular_body}} ></div>
        </>
    );
}

export default ReqularComponent;