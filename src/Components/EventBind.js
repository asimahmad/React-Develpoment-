import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }
        this.clickHandler = this.clickHandler.bind(this) // best approach 
    }
    // clickHandler(){
    //     this.setState({
    //         message: 'Goodbye!!'
    //     })
    //     console.log(this)
    // }

    clickHandler = () => {
        this.setState({
            message: 'Goodbye!!!!!!!!!!'
        })
    }
    
    render() {
        return (
            <div> {this.state.message}<br/>
                {/* <button onClick={this.clickHandler.bind(this)}>Click Bind</button> bind in the render method. */}
                {/* <button onClick={() => this.clickHandler()}>Click Arrow</button> // using arrow fxn in render method */}
                {/* <button onClick={this.clickHandler}>Click </button> Binding in contructor */}
                <button onClick={this.clickHandler}>Click </button>
            </div>
        )
    }
}

export default EventBind
