import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
 const [length,setLength] = useState(8);
 const [number,setNumber] = useState(false);
 const [char,setChar] = useState(false);
 const [pass,setPass] = useState("");

 //Useref hook
 const passref = useRef(null);

 const passGenerator = useCallback(() => {
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQURSTUVWXYZabcdefghijklmnopqurstuvwxyz"

  if (number) str += "0123456789";
  if (char) str += "!@#$%^&*{}[]~`";

  for(let i=1;i<=length;i++){
    let c = Math.floor(Math.random() * str.length+1);

    pass += str.charAt(c);
  }

  setPass(pass)
 }, [length,number,char,setPass])

 const copyPasstoClip = useCallback(() => {
  passref.current?.select()
  passref.current?.setSelectionRange(0, 50)
  window.navigator.clipboard.writeText(pass)
 },[pass])

useEffect(() => {
  passGenerator()
}, [length,number,char,passGenerator])

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-md px-4  py-3 my-8 text-orange-600 bg-gray-700'>

      <h1 className='text-white text-center mx-2 my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-3'>
        <input type='text' value={pass} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passref}/>
        <button onClick={copyPasstoClip} className='bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-2 py-2 shrink-0'>copy</button>
      </div>

      <div>
        <div className='flex flex-wrap justify-center text-sm gap-x-2'>
          <div className='flex items-center justify-between'>
            <input type='range' min={10} max={50} value={length} className='cursor-pointer' onChange={(e) => {setLength(e.target.value)}} />
            <label className='px-1'>Length: {length}</label>
          </div>

          <div className='flex items-center justify-between'>
            <input type='checkbox' defaultChecked={number} id='numberInput' onChange={() => setNumber((prev) => !prev)} />
            <label className='px-1'>Number</label>
          </div>

          <div className='flex items-center justify-between'>
            <input type='checkbox' defaultChecked={char} id='characterrInput' onChange={() => setChar((prev) => !prev)} />
            <label className='px-1'>Characters</label>
          </div>
        </div>
      </div>
     </div>
    </>
  )
}

export default App;
