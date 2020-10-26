import React from 'react';
import './main.scss';
import data from './assets/data.json';
import PostList from './components/PostList';

function App() {

  const {tumblelog, posts, 'posts-total': postTotal} = data;

  return (
    <div className="App">
      <h1>{data.tumblelog.title}</h1>
      <div className = "body">
        <PostList posts={data.posts} />
        <p className="t-description">{tumblelog.description}</p>
      </div>
    </div>
  );
}

export default App;
