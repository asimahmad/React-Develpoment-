import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button  style={{backgroundColor: "lightblue", borderRadius:"10px"}} onClick={()=> props.greetHandler('Child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
