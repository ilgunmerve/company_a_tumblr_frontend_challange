import React from 'react';
import { IPost } from '../types/types';
import DateComponent from '../components/DateComponent'
import QuoteComponent from './QuoteComponent';
import RegularComponent from './RegularComponent';
import PhotoComponent from './PhotoComponent';
import './PostItem.scss';
import ConversationComponent from './ConversationComponent';
import LinkComponent from './LinkComponent';
import AudioComponent from './AudioComponent';
import { Link } from 'react-router-dom'
import Modal from 'react-modal';

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
                return <LinkComponent linkDescription={post["link-description"]} linkText={post["link-text"]} linkUrl={post["link-url"]}/>;
            case 'conversation':
                return <ConversationComponent conversation={post.conversation}/>; 
            case 'audio':
                return <AudioComponent audioCaption={post["audio-caption"]} audioPlayer={post["audio-player"]} />; 
            case 'regular':
                return <RegularComponent regular-title={post["regular-title"]} regular-body={post["regular-body"]}/>; 
            case 'quote':
                return <QuoteComponent quote-source={post["quote-source"]} quote-text={post["quote-text"]} />; 
          default:
            return '';
        }
      }

    return(
        <div className="Post-Container">
            <DateComponent date={new Date(post.date)} />
            <div className="Post-Detail">
                {renderSwitch(post.type)}
            </div>
            <div>
                <Link target="_blank" to={`/posts/${post.id}`}>
                    <button className="Button-Pop">{'>'}</button>
                </Link>
            </div>
        </div>
    );
};

export default PostItem;