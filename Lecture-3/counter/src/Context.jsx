import React, { createContext, useContext } from 'react'


const ContextWrapper = createContext();
function Context() {
    console.log("context")
    const message ="Hi this a context message"
  return (
    <div>
        <h1>Context Example</h1>
        <ContextWrapper.Provider value={message}>
            <GrandParent/>
        </ContextWrapper.Provider>
    </div>
  )
}


function GrandParent(){
    

    return(
    <>
        <h1>Grand Parent</h1>
        
        <Parent/>
    </>
    )
}



function Parent(){
    return(
    <>
        <h1>Parent</h1>
        <Child/>
    </>
    )
}


function Child(){
    const message = useContext(ContextWrapper);
    return(
    <>
        <h1>Child</h1>
        <h1>{message}</h1>
    </>
    )
}
export default Context;