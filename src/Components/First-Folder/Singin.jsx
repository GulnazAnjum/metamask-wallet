// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Singin.css";
// export const SignIn = () => {
//   let history =useNavigate();
//   const countinue =()=>{
//       history("/password")
//   }
//  const [values, setValues,] = useState({
//      email: "",
//     password: "",
//    });
//   const handlChange = (event) => {
//     setValues({
//       ...values,
//       [event.target.name]: event.target.value,
//     });
//   };
//   const handleformsubmit = (event) => {
//     event.preventDefault();
//   };
//   const onSubmit=(data)=>console.log(data)
//   return (
//     <div className="Main-Container">
//       {/* header content code start here */}
//       <div className="Header-Container">
//         <div className="Logo">
//           <img className="Loogo" src="./images/trodex7.png" alt="Random Image" />
//         </div>
//         <div className="Right-Button">
//           <button>
//             <span className="Green-Circle"></span> Ethereum Mainnet
//           </button>
//         </div>
//       </div>
//       {/* header content code end here */}
//       <div className="SignIn-Form">
//         <form>
//           <h1>Sign In</h1>
//           <br />
//           <div className="Email-input">
//             <i className="fa fa-envelope Mail-Icon "></i>
//             <input
//               type="email"
//               placeholder="hello@example.com"
//               name="email"
//               value={values.email}
//               onChange={handlChange}
            
//             />
//           </div>
//           <div className="Password-input">
//             <i className="fa fa-lock Password-Icon"></i>
//             <input
//               type="password"
//               placeholder="Password"
//               name="password"
//               value={values.password}
//               onChange={handlChange}
              
//             />
//           </div>
//           <div className="Button-Section">
//             <button className="Form-Button" onClick={()=>countinue()}>
//               CONTINUE
//             </button>
//             {/* <button className="Form-Button" onClick={handleformsubmit}>
//               CONTINUE
//             </button> */}
           
//             <p>Or sign in with a familiar service</p>
//             <i className="fa fa-facebook-official Facebook-Icon"></i>
//             <i className="fa fa-twitter Twitter-Icon"></i>
//             <i className="fa fa-google Gmail-Icon"></i>
//             <i className="fa fa-instagram Instagram-Icon"></i>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };
// export default SignIn;

import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import "./Singin.css";

export const Singin = () => {
  let history =useNavigate();
   const countinue =()=>{
       history("/password")
     }
  const defval={
    email:"",
    password:""
}

const Validationschema=yup.object().shape({
    email:yup.string().required("Please Enter your Email"),
    password:yup.string().required("*Password Feild is Required")
})

const handleSubmit=(values)=>{
 console.log("values",values)
}
  return (
    <div className="Main-Container">
      {/* { header content code start here  */}
      <div className="Header-Container">
        <div className="Logo">
          <img src="./images/trodex7.png" className="Logo.jpg" alt="Random Image" />
        </div>
        <div className="Right-Button">
          <button>
            <span className="Green-Circle"></span> Ethereum Mainnet
          </button>
        </div>
      </div>
      {/* header content code end here */}
      <div className="SignIn-Form">
      
        <Formik initialValues={defval} 
            validationSchema={Validationschema}
            onSubmit={handleSubmit}>
          <Form>
          <h1>Sign In</h1>
          <br />

            <div className="Email-input">
              <i className="fa fa-envelope Mail-Icon "></i>
              <Field type="text" name="email" placeholder="enter your mail" />
            </div>
            <p style={{ color: "red" }}>
                <ErrorMessage name="email" />
              </p>

            <div className="Password-input">
              <i className="fa fa-lock Password-Icon"></i>
              <Field
                type="text"
                name="password"
                placeholder="enter your password"
              />
              
            </div>
            <p style={{ color: "red" }}>
                <ErrorMessage name="password" />
              </p>
            {/* <button className="Form-Button" type="submit">
              CONTINUE
            </button> */}
            <button className="Form-Button" type="submit" onClick={()=>countinue()}>
               CONTINUE
             </button>
            <div className="Button-Section">
            <p>Or sign in with a familiar service</p>
            <i className="fa fa-facebook-official Facebook-Icon"></i>
            <i className="fa fa-twitter Twitter-Icon"></i>
            <i className="fa fa-google Gmail-Icon"></i>
            <i className="fa fa-instagram Instagram-Icon"></i>
          </div> 
          </Form>
        
        </Formik>
         
      </div>
    </div>
  );
};
export default Singin;
