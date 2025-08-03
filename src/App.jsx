
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [user, setuser] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/user')
      .then(res => res.json())
      .then(data => setuser(data))
  }, [])

  const hendlefrom = (e) => {
    e.preventDefault()
    const fromdata = e.target
    const name = fromdata.name.value
    const email = fromdata.email.value
    const needdata = { name, email }
    console.log(needdata);
  }

  return (
    <>
      <h1>Empoloyes ase : {user.length}</h1>
      <form onSubmit={hendlefrom}>
        <input type="text" name='name' placeholder='Enter You Name' />
        <br />
        <input type="email" name='email' placeholder='Enter You Email' />
        <br /><br />
        <input type="submit" value='Notifi me' />
      </form>
      {
        user.map(data => <p>{data.email}: {data.name}---- {data.post}</p>)
      }
    </>
  )
}

export default App
