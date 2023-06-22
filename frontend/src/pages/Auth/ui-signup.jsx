// import libraries 
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from "react-redux";

// import microservices 
import { documentTitle,PopUpMsg } from '../../utils';
import { SpinnerLoader } from '../../components';
import { signupSchema } from '../../schemas';
import { TogglePassword } from './auth';
import { getUser } from "../../redux/actions/getUser"
 

// import assets 
import styles from "./auth.module.css";
import fb from "/facebook.png"
import salyImg from "/Saly-1.png"
import google from "/google-logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser, faUserSecret } from '@fortawesome/free-solid-svg-icons'

const Signup = () => {

  // page title 
  documentTitle("Register")

  const [showPassword, setShowPassword] = useState(false);

  const { data,loading, error } = useSelector(s => s);
  const dispatch = useDispatch();

  console.log(loading , "before loading");


  const initialValues = {
    name: "",
    email: "",
    password: "",
    role: ""
  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signupSchema,
    onSubmit: (values, action) => {
      console.log(values, "values")
      dispatch(getUser(values));
      // action.resetForm()
    }
  })

  console.log(data , "data   datadatadatadatadata")
  console.log(loading , "after loading");



  return (
    <section className={`${styles.login_page} h-screen flex justify-center items-center`}>
      <div className="container">
        <div className="flex flex-col lg:flex-row content-center">
          <div className="w-full lg:w-5/12 relative">
            <div className={styles.left_inner_content}>
              <h2 className="text-center lg:text-left"> Join with us and <br /> create your  <span>Account</span></h2>
            </div>
            <div className={styles.inner_image}>
              <img src={salyImg} alt="left side image" className="mx-auto" />
            </div>
          </div>
          <div className={`${styles.right_sections} w-full lg:w-7/12`}>
            <form onSubmit={handleSubmit}
              className={`${styles.right_inner_content} p-24`}>
              <h5 className="text-center lg:text-left">Create Account </h5>

              <div className={styles.input_field}>
                <input type="email" placeholder="Email" name="email"
                  value={values.email} onChange={handleChange}
                  onBlur={handleBlur}
                />
                <FontAwesomeIcon icon={faEnvelope} />
                {errors.email && touched.email ? <p>{errors.email}</p> : null}
              </div>



              <div className={styles.input_field}>
                <input type="text" placeholder="Username" name="name"
                  value={values.name} onChange={handleChange}
                  onBlur={handleBlur} />
                <FontAwesomeIcon icon={faUser} />
                {errors.name && touched.name ? <p>{errors.name}</p> : null}
              </div>

              <div className={styles.input_field}>
                <select value={values.role}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="role">
                  <option hidden value="">Select User Type</option>
                  <option value="Admin">Admin</option>
                  <option value="Regular User">Regular User</option>
                </select>
                <FontAwesomeIcon icon={faUserSecret} />
                {errors.role && touched.role ? <p>{errors.role}</p> : null}
              </div>

              <div className={styles.input_field}>
                <input type={showPassword ? `text` : `password`}
                  placeholder="Password" name="password"
                  onBlur={handleBlur}
                  value={values.password} onChange={handleChange} />
                <FontAwesomeIcon icon={faLock} />
                <TogglePassword showPassword={showPassword} setShowPassword={setShowPassword} />
                {errors.password && touched.password ? <p style={{position: "absolute", bottom: "0"}}>{errors.password}</p> : null}
              </div>

              <div className={styles.google_facebook_btns}>
                <span>OR</span>
                <div className={styles.main_wrap}>
                  <button onClick={() => PopUpMsg("Google SignIn Feature Not completed")}><img src={google} alt="google icon" /> Sign in Google</button>
                  <button onClick={() => PopUpMsg("Facebook SignIn Feature Not completed")}><img src={fb} alt="fb icon" /> Sign in Facebook</button>
                </div>
              </div>


              <p className={styles.click_here}>
                Already have an account? <Link to="/login">Click here.</Link>
              </p>
              <button type="submit" className={`${styles.login_btn} w-full`}>
                {loading ? (  <SpinnerLoader /> ) : error ? ( <h1> Error here </h1> ) :  "Sign Up" }
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup