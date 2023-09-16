import React, { useState } from "react";

interface RegisterProps {
  setCurrentForm: (value: string) => void;
}

export const Register: React.FC<RegisterProps> = (props) => {

  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(email);
    console.log(name);
    console.log(userName);
    console.log(password);
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-item">
          <label htmlFor="email">Email</label>
          <br />
          <input type="email" placeholder="name@email.com" id="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>
        <div className="form-item">
          <label htmlFor="name">Name</label>
          <br />
          <input type="text" placeholder="John Doe" id="name" name="name" onChange={(e) => setName(e.target.value)} value={name} />
        </div>
        <div className="form-item">
          <label htmlFor="userName">User Name</label>
          <br />
          <input type="text" placeholder="JohnDoee" id="username" name="userName" onChange={(e) => setUserName(e.target.value)} value={userName} />
        </div>
        <div className="form-item">
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" placeholder="*******" id="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} />
        </div>
        <button type="submit">Register</button>
      </form>
      <button className="link-btn" onClick={() => props.setCurrentForm('login')}>Have an account? Login Here.</button>
    </div>
  )
}