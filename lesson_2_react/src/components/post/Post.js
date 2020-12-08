import React, {Component} from 'react';

class Post extends Component {
	render() {
		let {item, onSelectUser} = this.props;
		return (
			<div>
				{item.id} - {item.title}
				<button onClick={() => onSelectUser(item.id)}>select</button>
			</div>
		);
	}
}

export default Post;