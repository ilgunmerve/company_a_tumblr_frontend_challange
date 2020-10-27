import React from 'react';
import './main.scss';
import data from './assets/data.json';
import HomePage from './containers/HomePage';
import SinglePost from './containers/SinglePost';
import NotFound from './containers/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {

  const {tumblelog, posts, 'posts-total': postTotal} = data;

  return (
    <div className="App">
      <h1>{tumblelog.title}</h1>
      <p className="postCount"> { `Showing ${postTotal} posts` }</p>

      <Router>
        <div className = "body">
          <Switch>
            <Route exact path="/">
              <HomePage posts={posts} description={tumblelog.description} postsTotal={postTotal} />
            </Route>
            <Route path="/posts/:id">
              <SinglePost posts={posts}/>
            </Route>
            <Route path="/not-found">
              <NotFound />
            </Route>
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
