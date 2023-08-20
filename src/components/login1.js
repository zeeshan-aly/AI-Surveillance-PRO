// import React, { useState } from 'react';
// import firebase from "firebase/app";
// import { useHistory } from 'react-router-dom';

// const LoginPage1 = () => {
//     const history = useHistory();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleEmailChange = (e) => {
//         setEmail(e.target.value);
//     };
//     function handleClicksub(){
//         history.push("/systemcheck")
//     }
//     const handlePasswordChange = (e) => {
//         setPassword(e.target.value);
//     };

//     const handleLogin = (e) => {
//         e.preventDefault();

//         // Perform validation and login logic here
//         if (!email || !password) {
//             alert('Please enter both email and password.');
//             return;
//         }

//         // Replace the code inside this block with your own login logic
//         // Here's an example using Firebase Auth

//         sessionStorage.setItem("checkname",email);        
//         sessionStorage.setItem("checkemail",password); 
//         console.log(email,password);


//         // firebase
//         //     .auth()
//         //     .signInWithEmailAndPassword(email, password)
//         //     .then((userCredential) => {
//         //         // Login successful, do something (e.g., redirect to dashboard)
//         //         console.log('Login successful');
//         //     })
//         //     .catch((error) => {
//         //         // Login failed, handle the error (e.g., display error message)
//         //         console.log('Login error:', error.message);
//         //     });
//     };

//     return (
//         <div className="container">
//             <h2>Login Page</h2>
//             <form onSubmit={handleLogin}>
//                 <div className="form-group">
//                     <label htmlFor="email">Email:</label>
//                     <input
//                         type="email"
//                         id="email"
//                         value={email}
//                         onChange={handleEmailChange}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="password">Password:</label>
//                     <input
//                         type="password"
//                         id="password"
//                         value={password}
//                         onChange={handlePasswordChange}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <button onClick={handleClicksub} type="submit">Login</button>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default LoginPage1;

// import React from 'react';

// const LoginPage1 = () => {
//     return (
//         <div>
//             {/* Render your HTML file here */}
//             {/* <iframe src="index.html" title="Login Page 1" width="100%" height="100%"></iframe> */}

//         </div>
//     );
// };

// export default LoginPage1;

// import React from 'react';
// import { useHistory } from 'react-router-dom';

// var name = "Syed Zeeshan";
// var email = "zee@gmail.com"

// const SimpleForm = () => {
//     const history = useHistory();
//     function handleClick() {
//         history.push("/systemcheck")
//     }
//     const handleSubmit = (event) => {
//         event.preventDefault();

//         name = document.getElementById('name').value;
//         email = document.getElementById('email').value;
//         const message = document.getElementById('message').value;

//         console.log('Name:', name);
//         console.log('Email:', email);
//         console.log('Message:', message);



//         document.getElementById('myForm').reset();
//         var name1 = sessionStorage.getItem("checkname");
//         console.log(name1);
//     };

//     return (
//         <>
//             <form id="myForm" onSubmit={handleSubmit}>
//                 <label htmlFor="name">Name:</label>
//                 <input type="text" id="name" name="name" required /><br /><br />

//                 <label htmlFor="email">Email:</label>
//                 <input type="email" id="email" name="email" required /><br /><br />

//                 <label htmlFor="message">Message:</label>
//                 <textarea id="message" name="message" rows="4" cols="30" required></textarea><br /><br />

//                 <input type="submit" value="Submit" onClick={handleClick} />
//             </form>
//         </>
//     );
// };

// sessionStorage.setItem("checkname", name);
// sessionStorage.setItem("checkemail", email);
// var a = 34
// console.log(a);
// export default SimpleForm;

import { constraints } from '@tensorflow/tfjs';
import React from 'react';
import { useHistory } from 'react-router-dom';


const SimpleForm = () => {
    const history = useHistory();
    const handleSubmit = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        //const message = event.target.message.value;

        // const formData = {
        //     name: name,
        //     email: email,
        //     message: message
        // };

        // sessionStorage.setItem('formData', JSON.stringify(formData));
        sessionStorage.setItem("checkname", name);
        sessionStorage.setItem("checkemail",email);

        // var name1 = sessionStorage.getItem("checkname");
        // console.log(name1)

        // Optional: Clear the form fields
        event.target.reset();
        history.push("/systemcheck")
    };

    return (
        <div className="App-header1">
        <h1 style={{ color: 'white' }}>Sign In</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name" style={{ color: 'white' }}>Name:</label>
            <input type="text" id="name" name="name" required /><br /><br />

            <label htmlFor="email" style={{ color: 'white' }}>Email:</label>
            <input type="email" id="email" name="email" required /><br /><br />

            {/* <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" cols="30" required></textarea><br /><br /> */}

            <input type="submit" value="Submit" class = "center-block"/>
        </form>
        </div>
    );
};

export default SimpleForm;

