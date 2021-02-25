// import React, { useState, useContext } from 'react';
// // import AuthService from '../Services/AuthService';
// // import Message from '../Components/Message';
// // import { AuthContext } from '../Context/AuthContext';
// // import e from 'express';

// const Login = props => {
//     const [user, setUser] = useState({
//         username: "",
//         password: "",
//     })
//     const [message, setMessage] = useState(null);
//     // const authContext = useContext(AuthContext);

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         AuthService.login(user)
//             .then(data => {
//                 const { isAuthenticated, user, message } = data;
//                 if (isAuthenticated) {
//                     authContext.setUser(user);
//                     authContext.setIsAuthenticated(isAuthenticated);
//                 } else {
//                     setMessage(message);
//                 }
//             })


//     }

//     const handleInputChange = (event) => {
//         event.preventDefault();
//         setUser({
//             ...user,
//             [event.target.name]: event.target.value
//         })
//     }

//     return (
//         <div className="container d-flex justify-content-center">
//             <form className="col-12 col-sm-12 col-md-4 mt-3" onSubmit={handleSubmit} style={{"backgroundColor": "white"}}>
//                 <h1>Sign In</h1>
//                 <div className="mb-3">
//                     <label className="form-label">Name</label>
//                     <input onChange={handleInputChange} name="username" type="username" className="form-control" id="name" placeholder="Enter Username" />
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Party Size</label>
//                     <input onChange={handleInputChange} name="password" type="password" className="form-control" id="partySize" placeholder="Enter Password" />
//                 </div>
//                 <button type="submit" className="btn btn-dark">Log In</button>
//             </form>
//         </div>
//     )
// }

// export default Login;