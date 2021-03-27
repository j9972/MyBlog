import React, { useState } from 'react';
//import AppRouter from 'components/Router'

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");

  const toggleAccount = () => setNewAccount((prev) => !prev);
  const onChange = (event) => {
    const {target: {name, value}} = event;
    if(name === "email") {
        setEmail(value);
    } else if( name === "password") {
        setPassword(value);
    }
    console.log(event.target.name); 
  }

  const onSubmit = async(e) => {
    e.preventDefault();
  }  

  return (
    <>
      <form className="container" onSubmit={onSubmit} >
        <input name="email" type="text" placeholder="Email" className="authInput" required value={email} onChange={onChange}/>
        <input name="password" type="password" placeholder="Password" className="authInput" required value={password} onChange={onChange}/>
        <input type="submit" value="Log In" required />
        {error && <span className="authError">{error}</span>}
      </form>
      <span onClick={toggleAccount} className="authSwitch"></span>
    </>
  );
}

export default App;
