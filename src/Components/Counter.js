import { object } from 'prop-types'
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
        // this.setState({
        //     count: this.state.count +1
        // }, () =>{ console.log('Callback value:' + this.state.count)})
        // console.log(this.state.count)


        this.setState((prevState, props) => ({
            count: prevState.count +1
        }))
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

// Always make use of setState and never modify the state directly.

// Code has to be executed after the state has been updated? Place that code in the call back function which is the second
// argument to the setState method.

// When you have to update the state based on the pevious state value, pass in a function as an argument instead of
// the regular object.