import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){
        super(props)
        this.state ={
            count: 0
        }
    }
    
    increment(){
        //this.state.count = this.state.count +1; won't work in rendering, never modify the state directly use setState
        this.setState({
            count: this.state.count +1
        }, () =>{ console.log('Callback value:' + this.state.count)})
        console.log(this.state.count)
    }


    incrementFive(){  // will go in one single go (group in one and updated value does not carry over)
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()

    }

    render() {
        return (
            <div>
              Count - {this.state.count} <br/>
              <button onClick= {() => this.incrementFive()}>Increment</button> 
            </div>
        )
    }
}

export default Counter
