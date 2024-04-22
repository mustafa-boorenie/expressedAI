import { useState } from 'react'
import logo from '/designmdLogo.svg'
import './App.css'
import axios from 'axios';

function App() {

  const [input, setInput] = useState('');
  const [answer , setAnswer] = useState('');

  async function handleClick(e) {
    e.preventDefault();

    try {
      const data = await axios.post(`http://localhost:3000/${input}`);
      setAnswer(data.data);
      console.log(JSON.stringify(data));
    } catch (error) {
      console.log(JSON.stringify(error));
    }

  }

  return (
    <>
      <div className="links">
        <a href="https://designmd.online" target="_blank">
          <img src={logo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Test my assistant below!</h1>
      <div>
        <input className='text-box' type='text' placeholder="Ask me anything." onChange={(e) => setInput(e.target.value)}/>
      </div>
      <div>
        <button className='btn' onClick={(e) => handleClick(e)}> Ask.</button>
      </div>
      <div>
        {answer && <h2 className='answer'>{answer}</h2>}
      </div>
      <a href='https://designmd.online'>
      <p className="read-the-docs">
        Click to learn more.
      </p>
      </a>
    </>
  )
}

export default App
