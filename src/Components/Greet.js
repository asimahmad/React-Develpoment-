import React from 'react'

// function Greet(props){
//     return <h1>Hello Asim</h1>
// }

// const Greet = props => {
//     console.log(props)
//     return (
//         <div>
//     <h1>Hello {props.name} a.k.a {props.heroName}</h1>
//     {props.children}
//     </div>
//     )
// }


// destructuring the props and state in parameters
// const Greet = ({name, heroName}) => {
//     return (
//         <div>
//     <h1>Hello {name} a.k.a {heroName}</h1>
//     </div>
//     )
// }


// destructure it in function body.
const Greet = props => {
    console.log(props)
    const {name, heroName} = props
    return (
        <div>
    <h1>Hello {name} a.k.a {heroName}</h1>
    {props.children}
    </div>
    )
}
//export const Greet = () => <h1>Hello Asim</h1> // without default export

export default Greet