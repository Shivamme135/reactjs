import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  // this is a hook function which are used for change  in the ui
     let [counter , setCounter] = useState(15)
    //  setcounter is the functionn , name is not fixed of function

    

    let disableButton = ()=>{  // this is the function we use to disable the button  
      button.disabled = true;
    }

   const addValue = ()=>{
     if(counter >= 0 && counter <20)
     {
        setCounter(counter+1)
        // enableButton();
     }
     else{
          disableButton();
     }
   }
  //  this is on clicking remove one
   const removeValue = ()=>{
    if(counter > 0 && counter <=20)
    {
      setCounter(counter - 1);
      //  enableButton();
    }
    else{
         disableButton();
    }
    
    
   }
  return (
    <>
     <h1>chai aur react</h1>

     <h2>counter value: {counter}</h2>

     <button onClick={addValue}>
      add value {counter}</button> 

     <br />

     <button onClick={removeValue}>
      remove value {counter}</button>
     <p> footer : {counter}</p>
    </>
  )
}

export default App
