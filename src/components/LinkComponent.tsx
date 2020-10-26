import React from 'react';
import './LinkComponent.scss'; 

interface LinkComponentProps{
    linkText?: string;
    linkDescription?: any;
    linkUrl?: string;
}

const LinkComponent =(props: LinkComponentProps)=>{

    const {linkDescription, linkText, linkUrl} = props;

    return (
        <>  
            <a className="link" href={linkUrl}>{linkText}</a>
            <div dangerouslySetInnerHTML={{__html: linkDescription}}></div>
        </>
    );
}

export default LinkComponent;