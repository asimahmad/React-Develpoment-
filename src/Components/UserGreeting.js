import React, { Component } from 'react'

class userGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    
    render() {
        if(this.state.isLoggedIn){
        return (
            <div>
                Welcome Asim
            </div>
        )}
        else{
            return(
                <div>Welcome Guest</div>
            )
        }
    }
}

export default userGreeting
