import React, { useState } from "react"

interface LoginProps {
  setCurrentForm: (value: string) => void;
}

export const Login: React.FC<LoginProps> = (props) => {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void = (e) => {
    e.preventDefault();
    console.log(`Submitted email: ${email}`)
    console.log(`Submitted password: ${password}`)
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-item">
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            placeholder="name@email.com"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-item">
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            placeholder="********"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button type="submit">Log In</button>
      </form>
      <button className="link-btn" onClick={() => props.setCurrentForm('register')}>Don't have an account? Register Here.</button>
    </div>
  )
}