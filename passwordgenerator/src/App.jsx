import { useCallback, useEffect, useState,useRef } from 'react'

function App() {
  // we use usestate which will be change according to changes we perform  // THESE ARE THE HOOKS 
  const [length , setlength] = useState(8) // this is used to print length in the password one 
  const [numberAllowed , setNumberAllowes] = useState(false) // this is for the length checkbox which was created i the password generator
  const [charAllowed , setCharAllowed ] = useState(false)  // this is for the character checkbox
  const [password , setPassword] = useState("")

  // use ref hook

  const passwordRef = useRef(null)

  // -------------------------------------------------  use of useCallback hook here ---------------------------

  // this we have used to write the content inside the given password bar
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="~!#$%&{}[]<>()-_"

    for(let i=0;i<=length;i++)
      {
        let char  = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
      }
      setPassword(pass)
      
  },[length,numberAllowed,charAllowed,setPassword])

  // this we used to copy the characters written over their-----------------
  const copyPasswordToClipboard = useCallback(()=>{
    // to copy on the clipboard heree in the react we have 
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)

  },[password])

  
  // -----------------------------------------------------use of useEfect hooks here ------------------------------
  useEffect(()=>{
      passwordGenerator()
  },[length, numberAllowed, charAllowed,passwordGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto px-4 py-4 my-8 text-orange-500 bg-gray-800 rounded'>
     <h1 className='text-white text-center my-3'>password</h1>
      <div className='flex shadow raunded-lg overflow-hidden mb-4'>
       <input 
       type="text"
       value={password}
       className='outline-none w-full py-1 px-3 rounded'
       placeholder='password'
       readOnly
       ref={passwordRef}
       />
       <button 
       onClick={copyPasswordToClipboard}
       className='outline-none bg-blue-800 text-white rounded px-3 py-0.5 shrink-0'>copy</button>
      </div>
            {/*------------------ second line from here -------------------*/}
      <div className='flex text-sm gap-x-2 '>
        <div className='flex item-center gap-x-1'>

          {/* this is for  length part */}
         <input 
         type="range" 
         min={8}
         max={100} 
         value={length}
         className='cursor-pointer'
         onChange={(e)=>{setlength(e.target.value)}}
         />
         <label >length: {length}</label>
         </div>
         {/* this is for the checkbox of length part */}
         <div className='flex item-center gap-x-1'>
         <input 
         type="checkbox" 
         defaultChecked={numberAllowed}
        id='numberInput'
         onChange={()=>{
          setNumberAllowes((prev)=> !prev)
        }}
         />
         <label htmlFor="numberInput">Numbers</label>
         </div>

         {/* this is for the checkbox which allows charactors */}
         <div className='flex item-center gap-x-1'>
         <input 
         type="checkbox" 
         defaultChecked={charAllowed}
        id='charInput'
         onChange={()=>{
          setCharAllowed((prev)=> !prev)
        }}
         />
         <label htmlFor="charInput">character</label>
         </div>

     </div>

    </div>
 
    </>
  )
}
  


export default App
