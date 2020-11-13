import './App.css';
import PostForm from './components/postForm';
import PostList from './components/PostList';

function App() {
  return (
    <div className="App">
      <h1>LIST OF POSTS</h1>
      <header className="App-header">
        <PostForm/>
        <PostList/>
      </header>
    </div>
  );
}

export default App;
