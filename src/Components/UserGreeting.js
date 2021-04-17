import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    
    render() {
        // using if-else statements
    //     if(this.state.isLoggedIn){
    //     return (
    //         <div>
    //             Welcome Asim
    //         </div>
    //     )}
    //     else{
    //         return(
    //             <div>Welcome Guest</div>
    //         )
    //     }
    // }

    // using js variables: element approach

    // let message
    // if(this.state.isLoggedIn){
    //     message = <div>Hello Asim</div>
    // }
    // else{
    //     message = <div>Hello Guest</div>
    // }
    // return <div>{message}</div>


    // using conditional operator  // make use of it most of the time.

        return (
        this.state.isLoggedIn ?
        <div>Welcome Asim</div>:
        <div>Welcome Guest</div>
        )


        // using short cuirciut   // good if have something to show when condition is true and nothing when condition is false.

        return this.state.isLoggedIn && <div>Welcome Asim</div>

}

export default UserGreeting
