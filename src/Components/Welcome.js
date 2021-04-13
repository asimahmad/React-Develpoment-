import React, { Component} from 'react'

// class Welcome extends Component{
//     render(){
//         return (
//             <div>
//                 <h1>Class Component: Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
//                 {this.props.children}
//             </div>
//         )
//     }
// }

class Welcome extends Component{
        render(){
            const {name, heroName} = this.props
            //const {state1, state2} = this.state
            return (
                <div>
                    <h1>Class Component: Welcome {name} a.k.a {heroName}</h1>
                </div>
            )
        }
    }

export default Welcome