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
    <>
      <h1>register component</h1>
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
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="John Doe"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label htmlFor="userName">User Name</label>
        <input
          type="text"
          placeholder="JohnDoee"
          id="username"
          name="userName"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="*******"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit">Register</button>
      </form>
      <button onClick={() => props.setCurrentForm('login')}>Have an account? Login Here.</button>
    </>
  )
}