import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setCurrentUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then((users) => {
        const user = users.find(
          (u) => u.email === email && u.password === password
        );
        if (user) {
          setCurrentUser(user);
          localStorage.setItem("user", JSON.stringify(user));
          navigate("/");
        } else {
          setError("Invalid email or password.");
        }
      });
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h1>🎬 MoviePlus</h1>
        <h2>Sign In</h2>

        {error && <p className="login-error">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>

        <div className="login-hint">
          <p>Test accounts:</p>zzz
          <p>jay@movieplus.com / jay123</p>
          <p>millie@movieplus.com / millie123</p>
          <p>alex@movieplus.com / alex123</p>
        </div>
      </div>
    </div>
  );
}

export default Login;