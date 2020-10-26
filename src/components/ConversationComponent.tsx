import React from 'react';
import { Conversation } from '../types/types';
import './ConversationComponent.scss'; 

interface ConversationComponentProps{
    conversation?: Conversation[];
}

const ConversationComponent =(props: ConversationComponentProps)=>{

    const {conversation} = props;

    return (
        <ul className="conversationList">
                { conversation?.map((item) => <li><span className="label">{item.label}</span> <span>{item.phrase}</span></li>) }
        </ul>
    );
}

export default ConversationComponent;