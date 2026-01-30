
import './App.css'

function App() {
  

  return (
    <>
    <div id='calculator'>
      <input  id='display'   type="text" />
      <div id='buttons-container'>
        <button className='button'>7</button>
        <button className='button'>8</button>
        <button className='button'>9</button>
        <button className='button operator'>/</button>
        <button className='button'>4</button>
        <button className='button'>5</button>
        <button className='button'>6</button>
        <button className='button operator'>*</button>
        <button className='button'>1</button>
        <button className='button'>2</button>
        <button className='button'>3</button>
        <button className='button operator'>-</button>
        <button className='button'>0</button>
        <button className='button'>.</button>
        <button className='button' id='equal-to'>=</button>
        <button className='button operator'>+</button>  
      </div>

    </div>
      
    </>
  )
}

export default App
