import React , { useState, useEffect } from 'react';
import { IPost } from './types/types';
import './main.scss';
import data from './assets/data.json';
import PostItem from './components/PostItem';

function App() {

  // const [posts, setPosts] = useState<Array<IPost>>([]);

  const {tumblelog, posts, 'posts-total': postTotal} = data;

  return (
    <div className="App">
      <h1>{data.tumblelog.title}</h1>
      <div className = "body">
        <PostItem post={data.posts[0]}  />
        <p className="t-description">{tumblelog.description}</p>
      </div>
      {/* { data.posts.map( (postItem) => ( <PostItem key={postItem.id} post={postItem}  />) ) } */}
    </div>
  );
}

export default App;
