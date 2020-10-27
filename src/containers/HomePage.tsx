import React from 'react';
import {IPost} from '../types/types';
import PostList from '../components/PostList';

interface HomePageProps{
    posts: Array<IPost>;
    description: String;
    postsTotal: number;
}

const HomePage =(props: HomePageProps)=>{
    const {posts, description, postsTotal} = props;

    return (
        <>
            <PostList posts={posts} />
            <div>
                <p className="t-description">{description}</p>
            </div>
            
        </>
    );
}

export default HomePage;
