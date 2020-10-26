import React from 'react';
//import './QuoteComponent.scss'; 

interface PhotoComponentProps{
    "photo-url-500"?: string;
    "photo-caption"?: any;
}

const PhotoComponent =(props: PhotoComponentProps)=>{

    const { "photo-url-500": photo_url_500, "photo-caption": photo_caption} = props;

    return (
        <>
            <img src={photo_url_500}/>
            <div dangerouslySetInnerHTML={{__html: photo_caption}} ></div>
        </>
    );
}

export default PhotoComponent;