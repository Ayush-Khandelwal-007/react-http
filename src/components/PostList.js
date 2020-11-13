import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             post:[]
        }
    }
    
    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then((response) => {
            console.log(response);
            this.setState({
                post:response.data
            })
        })
        .catch((error) => {
            console.log(error); 
        })
    }

    render() {
        const posts=this.state.post
        return (
            <div className="App">
                {posts.length}<br></br>
                {posts.map((post)=> <div key={post.id}>{post.id}.......{post.title}<br></br></div>)}
            </div>
        )
    }
}

export default PostList
