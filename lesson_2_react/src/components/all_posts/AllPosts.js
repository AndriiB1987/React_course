import React, {Component} from 'react';
import Post from '../post/Post';

class AllPosts extends Component {

	state = {posts: [], chosenOne: null};

	onSelectUser = (id) => {
		let {posts} = this.state;
        let find = posts.find(value => value.id === id);
        //let body = find.value;
		//console.log(body);
		this.setState({chosenOne: find});
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
		console.log('componentDidMountPosts');
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(value => value.json())
			.then(posts => {
                this.setState({posts});
			});
	}
}

export default AllPosts;