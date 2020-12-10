import React, {Component} from 'react';
import User from '../user/User';
import {UserService} from '../../services/UserService';

class AllUsers extends Component {

	userService = new UserService();

	state = {users: [], chosenOne: null};

	onSelectUser = (id) => {
		let {users} = this.state;
		let find = users.find(value => value.id === id);
		this.setState({chosenOne: find});
	};

	render() {
		console.log('rend');
		let {users, chosenOne} = this.state;
		return (
			<div>
				{
                    users.map(user => <User 
                        item={user} 
                        key={user.id} 
                        onSelectUser={this.onSelectUser}/>)
				}
				{
					chosenOne && <User item={chosenOne}/>
				}

			</div>
		);
	}

	componentDidMount() {
		this.userService.getAllUsers().then(value=>this.setState({users:value}));
	}
}

export default AllUsers;