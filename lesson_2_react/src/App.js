import './App.css';
import React, {useEffect, useState} from "react";

export default function App() {
    const [count, setCount] = useState(1);
    const [user, setUser] = useState();

    const incrementCounter = () => setCount((prev) => prev + 1);
    const decrementCounter = () => {
        setCount((prev) => prev > 1 ? prev - 1 : prev)
    }
    const cleanCounter = () => setCount(1);

    // url = 'https://jsonplaceholder.typicode.com'
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
            .then(value => value.json())
            .then(value => setUser(value))
    }, [count])

    return (
        <div>
            <h4>User {count}</h4>
            <button onClick={incrementCounter}>+</button>
            <button onClick={decrementCounter}>-</button>
            <button onClick={cleanCounter}>Clear</button>
            {!!user &&
            (<div>
                <p>{user.id} - {user.name} </p>
            </div>)
            }
        </div>
        
    )}
/* //     <div className={'header'}>
//     <div>
//     <Link className={'myBtn'} to={'/user'} onClick={() => this.setmyMaxValue(10)}>User</Link>
//     </div>
//     <div>
//     <Link className={'myBtn'} to={'/post'} onClick={() => this.setmyMaxValue(100)}>Post</Link>
//     </div>
//     <div>
//     <Link className={'myBtn'} to={'/comment'} onClick={() => this.setmyMaxValue(500)}>Comment</Link>
//     </div>
// <form ref={this.numberForm} onSubmit={this.chooseNumber}>
//     <input type="number" min={1} max={this.state.myMaxValue} onInput={this.saveNumber} value={this.state.controlNumber}/>
//     <button>find</button>
// </form>
// </div> */