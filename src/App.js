import './App.css';
import PostForm from './components/postForm';
import PostListBlock from './components/PostListBlock';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PostsProvider } from './components/postListContext';

function App() {

  const [postlist, setPostlist] = useState();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then(response => {
      console.log(response.data);
      setPostlist(response.data);
    })
    .catch(error => {
      console.log(error);
    })
  }, []);

  return (
    <div className="App">
      <h1>LIST OF POSTS</h1>
      <header className="App-header">
        <PostForm/>
        <PostsProvider value={postlist} >
           <PostListBlock/>
        </PostsProvider>
      </header>
    </div>
  );
}

export default App;
