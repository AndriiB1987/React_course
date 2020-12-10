import React, {Component} from 'react';
import Post from '../post/Post';
import {PostService} from '../../services/PostService';

class AllPosts extends Component {

	postService = new PostService();

	state = {posts: [], chosenOne: null};

	// onSelectUser = (id) => {
	// 	let {posts} = this.state;
    //     let find = posts.find(value => value.id === id);
	// 	this.setState({chosenOne: find});
	// };
	onSelectUser = (id) => {
		this.postService.getPostById(id).then(value=> this.setState({chosenOne:value}))
	};

	render() {
        console.log('rend');
		let {posts, chosenOne} = this.state;
		return (
			<div>
				{
                    posts.map(post => <Post 
                        item={post} 
                        key={post.id}
                        onSelectUser={this.onSelectUser}/>)
				}
				{
					chosenOne && <h2>userId - {chosenOne.userId} : {chosenOne.body}</h2>
				}
			</div>
		);
	}

	componentDidMount() {
		this.postService.getAllPosts().then(value=>this.setState({posts:value}));
			
	}
}

export default AllPosts;