import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import '../../components/all-users/Users.css'

class Users extends Component {

    render() {
        const {item, match: {url}} = this.props;

        return (
            <div  className={'colorForUser'}>
                {item.id} - {item.name} - <Link to={url + '/' + item.id}>info page</Link>
            </div>
        );
    }
}

export default withRouter(Users);