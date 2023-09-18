import React, { useState } from "react";

interface RegisterProps {
  setCurrentForm: (value: string) => void;
}

export const Register: React.FC<RegisterProps> = (props) => {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(email);
    console.log(password);
  }

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-item">
          <label htmlFor="email">Email</label>
          <br />
          <input type="email" placeholder="name@email.com" id="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
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