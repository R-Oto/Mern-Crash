import React, { useState, useEffect } from 'react'

const App = () => {

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  async function register(){
    fetch("http://localhost:5000", {
      body: JSON.stringify({
        name,
        email,
        password,
      })
    })
  }

  return (
    <div>
      <form onSubmit={register}>
        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='first name' />
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='email' />
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='password' />
        <input type="submit" value="register" />
      </form>
    </div>
  )
}

export default App;