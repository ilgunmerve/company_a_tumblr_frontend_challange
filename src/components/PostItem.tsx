import React from 'react';
import { IPost } from '../types/types';
import DateComponent from '../components/DateComponent'
import QuoteComponent from './QuoteComponent';
import RegularComponent from './RegularComponent';
import PhotoComponent from './PhotoComponent';

import './PostItem.scss';
import ConversationComponent from './ConversationComponent';

interface PostItemProps {
    post: IPost;
}

const PostItem = (props: PostItemProps) =>{

    const { post } = props;

    const renderSwitch =(type: string)=> {
        switch(type) {
            case 'photo':
                return <PhotoComponent photo-url-500={post["photo-url-500"]} photo-caption={post["photo-caption"]} />;
            case 'link':
                return 'bar';
            case 'conversation':
                return <ConversationComponent conversation={post.conversation}/>; 
            case 'audio':
                return ''; 
            case 'regular':
                return <RegularComponent regular-title={post["regular-title"]} regular-body={post["regular-body"]}/>; 
            case 'quote':
                return <QuoteComponent quote-source={post["quote-source"]} quote-text={post["quote-text"]} />; 
          default:
            return 'foo';
        }
      }

    return(
        <div className="Post-Container">
            <DateComponent date={new Date(post.date)} />
            <div className="Post-Detail">
                {renderSwitch(post.type)}

                {/* {post.type} */}
                {/* <p>{props.post.format}</p>    html */}
                {/* <p>{props.post.slug}</p> */}
                {/* <p>{props.post.tags}</p> */}
                {/* <p>{props.post.tumblelog?.title}</p> */}
                {/* <p>{props.post["quote-source"]}</p> */}
            </div>
        </div>
    );
};

export default PostItem;