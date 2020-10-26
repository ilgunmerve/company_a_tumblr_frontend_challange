import React from 'react';
//import './QuoteComponent.scss'; 

interface AudioComponentProps{
    "regular-title"?:  string;
    "regular-body"?: string;
}

const AudioComponent =(props: AudioComponentProps)=>{

    const { "regular-title": regular_title, "regular-body": regular_body} = props;

    return (
        <>

        </>
    );
}

export default AudioComponent;