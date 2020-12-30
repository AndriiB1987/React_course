import React, {Component} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserSearch from "./components/UserSearch";
import PostsSearch from "./components/PostsSearch";
import CommentsSearch from "./components/CommentsSearch";


class App extends Component {
    state = {controlNumber: '', chosenNumber : null, myMaxValue : 10};
    numberForm = React.createRef();

    render() {
        return (
            <Router>
                <div className={'header'}>
                        <div>
                        <Link className={'myBtn'} to={'/user'} onClick={() => this.setmyMaxValue(10)}>User</Link>
                        </div>
                        <div>
                        <Link className={'myBtn'} to={'/post'} onClick={() => this.setmyMaxValue(100)}>Post</Link>
                        </div>
                        <div>
                        <Link className={'myBtn'} to={'/comment'} onClick={() => this.setmyMaxValue(500)}>Comment</Link>
                        </div>
                    <form ref={this.numberForm} onSubmit={this.chooseNumber}>
                        <input type="number" min={1} max={this.state.myMaxValue} onInput={this.saveNumber} value={this.state.controlNumber}/>
                        <button>find</button>
                    </form>
                </div>
                <Switch>
                    <Route exact path={'/'} render={() => {
                        return "Choose what you need"
                    }}/>
                    <Route exact path={'/user'} render={(props) => {
                        return <UserSearch {...props} number={this.state.chosenNumber}/>
                    }}/>
                    <Route exact path={'/post'} render={(props) => {
                        return <PostsSearch {...props} number={this.state.chosenNumber}/>
                    }}/>
                    <Route exact path={'/comment'} render={(props) => {
                        return <CommentsSearch {...props} number={this.state.chosenNumber}/>
                    }}/>
                </Switch>
            </Router>
    );
    }

    setmyMaxValue = (myMaxValue) => {
        this.setState({controlNumber : ''})
        this.setState({chosenNumber : null})
        this.setState({myMaxValue})
    }
    saveNumber = (e) => {
        this.setState({controlNumber : e.target.value})
    }

    chooseNumber = (e) => {
        e.preventDefault();
        this.setState({chosenNumber : this.numberForm.current[0].value})
    }
}

export default App;