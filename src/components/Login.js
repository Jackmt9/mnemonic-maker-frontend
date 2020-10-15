import React from "react";
export default function SignIn(){
        const [username, setUsername] = React.useState("");
        const [password, setPassword] = React.useState("");
        
        
    return (
      <div>
        <form>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="text"
              name="password"
              value={password}
              onChange={e=>setPassword(e.target.value)}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
}
