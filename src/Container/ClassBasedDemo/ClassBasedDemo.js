// Class Based Component
import React, { Component } from 'react';

// inheritance

// child Class       // parent Class
class ClassBasedDemo extends Component {
    constructor(props){
        super(props);

        this.state = {
            cityname: 'surat'
        }
    }
    
    changecity = () => {
        this.setState({
            cityname: 'Baroda'
        })
        // console.log("changecity");
    }

    render() {
        return (
            <div>
                <p>{this.state.cityname}</p>
                <button onClick={() => this.changecity()}>changecity</button>
            </div>
        );
    }
}

export default ClassBasedDemo;

