import React from 'react';
import { IPost } from '../types/types';
import DateComponent from '../components/DateComponent'
import './PostItem.scss';

interface PostItemProps {
    post: IPost;
}

const PostItem = (props: PostItemProps) =>{

    const { post } = props;

    return(
        <div className="Post-Container">
            <DateComponent date={new Date(post.date)} />
            <div className="Post-Detail">
                {/* <p>{props.post.format}</p>    html */}
                <p>{post["quote-text"]}</p>
                {/* <p>{props.post.slug}</p> */}
                <p>{props.post.tags}</p>
                {/* <p>{props.post.tumblelog?.title}</p> */}
                <p>{props.post["url-with-slug"]}</p>  {/** redirect */ }
                {/* <p>{props.post.bookmarklet}</p> */}
                {post["quote-source"] && <p>{props.post["quote-source"]}</p>}

                {/* <p>{props.post["quote-source"]}</p> */}
            </div>
        </div>
    );
};

export default PostItem;