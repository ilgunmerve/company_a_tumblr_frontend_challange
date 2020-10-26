import React from 'react';
import './QuoteComponent.scss'; 

interface ReqularComponentProps{
    "regular-title"?:  string | null;
    "regular-body"?: string;
}

const ReqularComponent =(props: ReqularComponentProps)=>{

    const { "regular-title": regular_title, "regular-body": regular_body} = props;

    return (
        <>
            <p className="Regular-Header">{regular_title}</p>
            <p className="Regular-Body">{regular_body}</p>
        </>
    );
}

export default ReqularComponent;