# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Axios 
At first, I tried to retrieve data with http request via axios but received "cors policy error" then I just imported the given json file.

# What it does 

It gets the blog title and description from json data and shows them together with posts.
For each different post I created a react component to render them. I chose which component to render depending on post.type
React-Router is added to the application. Route will change on single post clicks, the user can also write the postId ( if they know) with /posts/id to render that single post.
I did not add modal because of time constraints.
