import React from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

export default function SignIn() {
  return (
    <>
      <body
        style={{
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundImage: "url(https://images.pexels.com/photos/219101/pexels-photo-219101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          backgroundSize:"cover",
          backgroundPosition:"center"

        }}
      >
        <div
          style={{
            width: "420px",
            background: "transparent",
            border:"2px solid rgba(255,255,255,.2)",
            color:"#fff",
            borderRadius:"10px",
            padding:"30px"
          }}
          className="wrapper"
        >
          <form action="">
            <h1
              style={{
                textAlign: "center",
                fontSize: "3rem",
                fontWeight: "800",
                color: "#fff",
                height: "auto", // Adjusted height to "auto"
              }}
            >
              Login
            </h1>

            <div
              style={{
                position: "relative",
                width: "100%",
                height: "50px",
                margin: "30px 0",
              }}
              className="input-box"
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  style={{
                    width: "100%",
                    height: "45px",
                    background: "transparent",
                    outline: "none",
                    border: "2px solid rgba(255, 255, 255, .2)",
                    borderRadius: "40px",
                    fontSize: "16px",
                    color: "#fff",
                    padding: "20px 45px 20px 20px",
                  }}
                  type="text"
                  placeholder="Username"
                  required
                />
                <FaUser className="icon" />
              </div>
            </div>

            <div
              style={{
                position: "relative",
                width: "100%",
                height: "50px",
              }}
              className="input-box"
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  style={{
                    width: "100%",
                    height: "45px",
                    background: "transparent",
            
                    outline: "none",
                    border: "2px solid rgba(255, 255, 255, .2)",
                    borderRadius: "40px",
                    fontSize: "16px",
                    color: "#fff",
                    padding: "20px 45px 20px 20px",
                  }}
                  type="text"
                  placeholder="Password"
                  required
                />
                <FaLock className="icon" />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "14.5px",
                color:"#fff",
                marginBottom:"14px"
                
              }}
              className="remember-forgot"
            ><label>
                <input style={{
                  accentColor:"#fff",
                  marginRight:"4px"
                  }}type="checkbox" />
                Remember me
              </label>
              <a style={{
                textDecoration:"none",
                ':hover':{
                  textDecoration:"underline"
                }
              
              }} href="#">forgot password</a>
            </div>

            <button style={{
              width:"100%",
              height:"45px",
              background:"#fff",
              border:"none",
              outline:"none",
              borderRadius:"40px",
              boxShadow:"0 0 10px rgba(0,0,0, .1)",
              cursor:"pointer",
              fontSize:"16px",
              color:"#333",
              fontWeight:"700"
            }} type="submit">Login</button>

            <div style={{
              fontSize:"14.5px",
              textAlign:"center",
              marginTop:"20px",
              color:"#fff"
            }} className="register-link">
              <p>
                Don't have an account? <a style={{color:"#fff", textDecoration:"none", fontWeight:"600", ':hover':{textDecoration:"underline"}}} href="#">Register Now</a>
              </p>
            </div>
          </form>
        </div>
      </body>
    </>
  );
}
