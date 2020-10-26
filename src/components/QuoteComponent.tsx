import React from 'react';
import './QuoteComponent.scss'; 

interface QuoteComponentProps{
    "quote-source"?:  any;
    "quote-text"?: string;
}

const QuoteComponent =(props: QuoteComponentProps)=>{

    const { "quote-source": quote_source, "quote-text": quote_text} = props;

    return (
        <>
            <p className="Quote-Header">{quote_text}</p>
            <div dangerouslySetInnerHTML={{__html: quote_source}} className="Quote-Source"></div>
        </>
    );
}

export default QuoteComponent;