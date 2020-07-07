import React, { Fragment, Component } from 'react';
import CardList from './CardList';
import Scroll from './Scroll'
import SearchBox from './SearchBox'
import './App.css';

class App extends Component {
    
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield:''
        }
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users }));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const filteredRobots = this.state.robots.filter( robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (this.state.robots.length === 0) {
            return <h1 className='tc pv7'>Loading...</h1>
        } else {
            return (
                <Fragment>
                    <div className='tc'>
                        <h1 className='f1'>RoboDex</h1>
                        <SearchBox searchChange={this.onSearchChange}/>
                        <Scroll>
                            <CardList robots={filteredRobots}/>
                        </Scroll>
                    </div>
                </Fragment>
            );
        }
    } 
}

export default App;