// import './login.css';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     if (email && name && password) {
//       // Check if the email ends with @gmail.com
//       if (!email.endsWith('@gmail.com')) {
//         setError('Email must end with @gmail.com');
//         return;
//       }
//       // If validation passes, proceed with login
//       localStorage.setItem('user', JSON.stringify({ email, name, password }));
//       navigate(`/todo?name=${encodeURIComponent(name)}`);
//     } else {
//       setError('All fields are required');
//     }
//   };

//   return (
//     <>
//       <h1>Welcome</h1>
//       <div className='flex-center'>
//         <div className='login-page'>
//           <h2>Login</h2>
//           <div className='sectionForm'>
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)} />
//             <input
//               type="text"
//               placeholder="Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)} />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)} />
//             <button onClick={handleLogin}>Login</button>
//             {error && <div className='error-message'>{error}</div>}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Login;

import './login.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const isValidEmail = (email) => {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    if (email && name && password) {
      if (!isValidEmail(email)) {
        setError('Please enter a valid email address');
        return;
      }
      // Proceed with login
      localStorage.setItem('user', JSON.stringify({ email, name, password }));
      navigate(`/todo?name=${encodeURIComponent(name)}`);
    } else {
      setError('All fields are required');
    }
  };

  return (
    <>
      <h1>Welcome</h1>
      <div className='flex-center'>
        <div className='login-page'>
          <h2>Login</h2>
          <div className='sectionForm'>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)} />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
            {error && <div className='error-message'>{error}</div>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

