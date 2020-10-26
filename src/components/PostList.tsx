import React from 'react';
import {IPost} from '../types/types';
import PostItem from './PostItem';
import './PostList.scss';

interface PostList{
    posts: Array<IPost>;
}

const PostList =(props: PostList)=>{
    return (
        <ul className="Post-List"> 
            { props.posts.map( postItem =>  <PostItem key={postItem.id} post={postItem}  />) }
        </ul>
    );
}

export default PostList;
