import React, {Component} from 'react';
import '../../public/assets/css/styles.css';
import {Helmet} from "react-helmet";

const posts = [{
        id: 2,
        text: 'Muy buena esta nota',
        user: {
            avatar: 'https://i.pravatar.cc/100',
            username: 'Test User'
        }
    },
    {
        id: 1,
        text: "Pésima esta nota",
        user:{
            avatar: 'https://i.pravatar.cc/100',
            username: 'Test User 2'
        }
    }
];

export default class App extends Component {

        constructor(props){
            super(props);


            this.state = {
                posts:posts,
                postContent: ''
            };

        }

        handlePostContentChange = (event) => {
            this.setState({postContent: event.target.value})
        }

        handleSubmit = (event) => {
            event.preventDefault();
            const newPost = {
                id : this.state.posts.length + 1,
                text : this.state.postContent,
                user :  {
                    avatar : 'https://i.pravatar.cc/100',
                    username : 'Fake User'
                }
            };
            this.setState((prevState) =>({
                posts : [newPost, ...prevState.posts],
                postContent: ''
            }));
        }

        render(){

        const {posts, postContent} = this.state;

        return(
            <div className="container">
                <Helmet>
                    <title>GraphBook - Feed</title>
                    <meta name="description" content="Newsfeed of all your friends on Graphbook"/>
                </Helmet>
                <div className="postForm">
                    <form onSubmit={this.handleSubmit}>
                        <textarea value={postContent} onChange={this.handlePostContentChange} placeholder="Write your custom post!" name="" id="" cols="30" rows="10"></textarea>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
                <div className="feed">
                {posts.map((post, i) =>
                        <div key={post.id} className="post">
                    <div className="header">
                    <img src={post.user.avatar} alt=""/>
                    <h2>{post.user.username}</h2>
                    </div>
                    <p className="content">
                    {post.text}
                    </p>
                    </div>
                )}
        </div>
            </div>
        )
    }
}