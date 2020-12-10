import React, {Component} from 'react';
import PostService from "../../services/post-service/PostService";
import Post from "./Post";


class AllPosts extends Component {
    state = {posts: []};
    postService = new PostService();

    async componentDidMount() {
        let posts = await this.postService.posts()
        this.setState({posts})
    }

    render() {
        let {posts} = this.state;
        return (
            <div>
                {
                    posts.map(value => <Post item={value} key={value.id}/>)
                }
            </div>
        );
    }
}

export default AllPosts;