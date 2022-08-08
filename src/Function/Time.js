import React, { Component } from 'react';

class Time extends Component {
    //1.Provides Initial Value
    constructor(props) {
        super(props);

        this.state ={
            time:new Date()
        }
    }
     
    tick = () => {
        this.setState({
            time:new Date()
        })
    }

    //3. sent reqvest to a servar for data.
    componentDidMount = () => {
        this.time = setInterval(() => this.tick(),1000)
    }

    //4. Whenevar Previonvs state or Props is Updatad then it is calld .
    componentDidUpdate = (prevProps, prevState) => {
        if(prevState.time !== this.state.time){
            console.log("componentDidUpdate");
        }
    }

    //5. Whenevar we move to another component then it is called. it resources. 
    componentWillUnmount =() => {
        clearInterval(this.time);
    }

    //2. Disply on the scren .whenever sate value changed render method is called
    render() {
        return (
            <div>
                <p>{this.state.time.toLocaleTimeString()}</p>
            </div>
        );
    }
}

export default Time;