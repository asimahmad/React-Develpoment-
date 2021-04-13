import React from 'react'

const Hello = () =>{
    // return (          // using jsx 
    //     <div>
    //         <h1>
    //             Hello Asim
    //         </h1>
    //     </div>
    // )

    return React.createElement('div', {id: 'hello_div', className: 'hello_class'}, React.createElement('h1', null, 'Hello Asim')) // without jsx and here second parameter is attributres of first parameter.
}


export default Hello