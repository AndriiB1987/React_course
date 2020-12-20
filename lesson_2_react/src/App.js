import React, {Component} from 'react';
import AllUsers from "./components/all-users/AllUsers";
import AllPosts from "./components/all-posts/AllPosts";
import AllComments from "./components/all-comments/AllComments";
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import './App.css'

class App extends Component {
	myForm = React.createRef();

	state = {inputValue: ''};
    render() {
        return (			
			
            <Router>
                <div>
                    <div>
                        <Link to={'/users'}>users</Link>
                    </div>

                    <div>
                        <Link to={'/posts'}>posts</Link>
                    </div>

                    <div>
                        <Link to={'/comments'}>comments</Link>
                    </div>

                    <div className={'app-route'}>
                        <Switch>                        
                            <Route path={'/users'} render={() => {                                
                                return (<AllUsers/>)                               
                            }}/>
                            <Route path={'/posts'} render={() => {
                                return (<AllPosts/>)
                            }}/>
                            <Route path={'/comments'} render={() => {
                                return (<AllComments/>)
                            }}/>
                        </Switch>
                    </div>
                </div>
				<div>

				<form action={'/savedata'} onSubmit={this.send} ref={this.myForm}>
					<input type='number' onInput={this.commitState} value={this.state.inputValue}/>
					<button>send</button>
				</form>

			</div>
            </Router>

        );
	}
	send = (e) => {
		e.preventDefault();
		console.log(e.target.children[0].value);

	};

	commitState = (e) => {
		this.setState({inputValue: e.target.value});

	};
}

export default App;