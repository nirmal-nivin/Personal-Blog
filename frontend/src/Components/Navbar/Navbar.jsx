import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../Config/firebase";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const navigate = useNavigate();

  const [log, setLog] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setLog(true);
        console.log("User Logged In");
      } else {
        setLog(false);
        console.log("User Logged Out");
      }
    });
  }, []);

  const logout = ()=>
    {
      signOut(auth);
    }

  return (
    <div className="flex items-center justify-between py-5">
      <h2 className="text-3xl font-bold">Blogger</h2>
      <div className="flex items-center">
        <Link className="list-none px-5" to={"/home"}>
          Home
        </Link>
        <Link className="list-none px-5" to={"/blogs"}>
          Blog
        </Link>
        <Link className="list-none px-5" to={"/contact"}>
          Contact
        </Link>

        {log ? (
          <button className="button-style hidden md:block" onClick={logout}>Logout</button>
        ) : (
          <button
            className="button-style hidden md:block"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
