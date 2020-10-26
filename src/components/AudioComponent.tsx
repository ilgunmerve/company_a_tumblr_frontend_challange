import React from 'react';
//import './QuoteComponent.scss'; 

interface AudioComponentProps{
    audioCaption?:  any;
    audioPlayer?: string;
}

const AudioComponent =(props: AudioComponentProps)=>{

    const { audioCaption, audioPlayer} = props;

    return (
        <>
            <div dangerouslySetInnerHTML={{__html: audioCaption}}></div>
            <audio  src={audioPlayer} controls/>
            {console.log(audioPlayer)}


        </>
    );
}

export default AudioComponent;