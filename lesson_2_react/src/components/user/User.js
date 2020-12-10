import React, {Component} from 'react';
import '../user/User.css';

class User extends Component {
	render() {
		let {item, onSelectUser} = this.props;
		return (
			<div className='myClass'>			
			{item.id} - {item.name}
				<button onClick={() => onSelectUser(item.id)}>chose</button>
			</div>
		);
	}
}

export default User;