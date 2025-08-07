// import React, { useContext } from "react";
// import { AuthContext } from "./AuthContext";
// import { EcomContext } from "./UseContext";
// import { instance } from "../axiosConfig";
// import "./Header.css"; 

// export const Header = () => {
//   const { user, setUser } = useContext(AuthContext);
//   const { cart, wishlist } = useContext(EcomContext);

//   const handleLogout = async () => {
//     try {
//       await instance.post("/user/logout", null, {
//         withCredentials: true,
//       });
//       setUser(null);
//       alert("Logout successful");
//       window.location.href = "/loginform";
//     } catch (error) {
//       console.error("Logout failed:", error);
//     }
//   };

//   const handleReloadNavigate = (path) => {
//     window.location.href = path;
//   };

//   return (
//     <header className="header">
//       <div className="logo">
//         <span
//           onClick={() => handleReloadNavigate("/home")}
//           style={{
//             cursor: "pointer",
//             color: "white",
//             fontSize: "1.5rem",
//             fontWeight: "bold",
//           }}
//         >
//             🛍️ MyShop
//         </span>
//       </div>

//       <nav className="nav-links">
//         <span onClick={() => handleReloadNavigate("/home")} style={{ cursor: "pointer" }}>
//           Home
//         </span>


//          <span onClick={() => handleReloadNavigate("/admin")} style={{ cursor: "pointer" }}>
//         +
//         </span>

//         {/* Wishlist */}
//         <span
//           className="nav-item-with-indicator"
//           onClick={() => handleReloadNavigate("/wishlist")}
//           style={{ cursor: "pointer" }}
//         >
//           Wishlist ({wishlist.length})
//           {wishlist.length > 0 && (
//             <div className="live-dot wishlist-dot">
//               <div className="dot-pulse"></div>
//             </div>
//           )}
//         </span>

//         {/* Cart */}
//         <span
//           className="nav-item-with-indicator"
//           onClick={() => handleReloadNavigate("/cart")}
//           style={{ cursor: "pointer" }}
//         >
//           Cart ({cart.length})
//           {cart.length > 0 && (
//             <div className="live-dot cart-dot">
//               <div className="dot-pulse"></div>
//             </div>
//           )}
//         </span>

//         {/* Welcome & Logout/Login */}
//         {user ? (
//           <>
//             <span className="welcome-msg">
//               <span className="hello">Welcome</span>
//               <span className="username">{user.name}</span>
//             </span>
//             <button onClick={handleLogout}>Logout</button>
//           </>
//         ) : (
//           <span onClick={() => handleReloadNavigate("/loginform")} style={{ cursor: "pointer" }}>
//             Login
//           </span>
//         )}
//       </nav>
//     </header>
//   );
// };


import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { EcomContext } from "./UseContext";
import { instance } from "../axiosConfig";
import "./Header.css";

export const Header = () => {
  const { user, setUser } = useContext(AuthContext);
  const { cart, wishlist } = useContext(EcomContext);

  const handleLogout = async () => {
    try {
      await instance.post("/user/logout", null, {
        withCredentials: true,
      });
      setUser(null);
      alert("Logout successful");
      window.location.href = "/loginform";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <Link
          to="/home"
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          🛍️ MyShop
        </Link>
      </div>

      <nav className="nav-links">
        <Link to="/home" style={{ textDecoration: "none", color: "inherit" }}>
          Home
        </Link>

          {user?.role === "admin" && (
          <Link to="/admin" style={{ textDecoration: "none", color: "inherit" }}>
            +
          </Link>
        )}

      

       
        <Link to="/wishlist" className="nav-item-with-indicator" style={{ textDecoration: "none", color: "inherit" }}>
          Wishlist ({wishlist.length})
          {wishlist.length > 0 && (
            <div className="live-dot wishlist-dot">
              <div className="dot-pulse"></div>
            </div>
          )}
        </Link>
    
    
        <Link to="/cart" className="nav-item-with-indicator" style={{ textDecoration: "none", color: "inherit" }}>
          Cart ({cart.length})
          {cart.length > 0 && (
            <div className="live-dot cart-dot">
              <div className="dot-pulse"></div>
            </div>
          )}
        </Link>

      
        {user ? (
          <>
            <span className="welcome-msg">
              <span className="hello">Welcome</span>
              <span className="username">{user.name}</span>
            </span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/loginform" style={{ textDecoration: "none", color: "inherit" }}>
            Login
          </Link>
        )}
      </nav>
    </header>
  );
};
