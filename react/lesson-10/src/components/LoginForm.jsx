import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isLogin && password !== confirmPassword) {
      alert("Lösenorden matchar inte");
    }

    const mode = isLogin ? "Login" : "Register";
    console.log(`${mode} submitted:`, { email, password });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>{isLogin ? "Logga in" : "Skapa konto"}</h2>

        <label>
          E-post
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>

        <label>
          Lösenord
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>

        {!isLogin && (
          <label>
            Bekräfta lösenord
            <input
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
            />
          </label>
        )}

        <button type="submit">{isLogin ? "Logga in" : "Registrera"}</button>

        <p className="toggle-text">
          {isLogin ? "Har du inget konto?" : "Har du redan ett konto?"}
          <button
            type="button"
            className="toggle-button"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Registrera dig här" : "Logga in här"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
