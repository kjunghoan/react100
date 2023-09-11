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
    <>
      <h1>Login component</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="name@email.com"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="********"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit">Log In</button>
      </form>
      <button onClick={() => props.setCurrentForm('register')}>Don't have an account? Register Here.</button>
    </>
  )
}