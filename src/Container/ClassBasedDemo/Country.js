import React, { Component } from 'react';

class Country extends Component {
    constructor(props) {
        super(props);
        this.state ={
            CountryName: 'india'
        }
    }

    CountryName = () => {
        this.setState({
            CountryName: 'uk'
        })
        // console.log("CountryName");
    }
    
    render() {
        return (
            <div>
                <p>{this.state.CountryName}</p>
                <button onClick={() => this.CountryName()}>changecountry</button>
            </div>
        );
    }
}

export default Country;