// import libraries 
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';

// import microservices 
import { documentTitle, PopUpMsg } from '../../utils';
import { SpinnerLoader, Toast } from '../../components';
import { signupSchema } from '../../schemas';


// import assets 
import styles from "./auth.module.css";
import fb from "/facebook.png"
import salyImg from "/Saly-1.png"
import google from "/google-logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { RegisterUser } from '../../redux/actions/registerUser';



  // show password function

  

const Signup = () => {

  // page title 
  documentTitle("Register")

  // page state
  const [showPassword, setShowPassword] = useState(false);

  // redux state
  const { data, loading, error } = useSelector(state => state.getUser);
  const dispatch = useDispatch();


  const initialValues = {
    name: "",
    email: "",
    password: "",
  }




  // Onsubmit FormIk library Function 
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signupSchema,
    onSubmit:  async (values, action) => {
      dispatch(RegisterUser(values));
      action.resetForm()
    }
  })


  // Navigate into Login page
  const navigate = useNavigate();
  if (data.status === 201) {
    toast.success(data.message);
    navigate("/login");
  }




  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }







  return (
    <>
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

              <form onSubmit={handleSubmit} className={`${styles.right_inner_content} p-24`}>

                <h5 className="text-center lg:text-left">Create Account </h5>

                <div className={styles.input_field}>
                  <input type="email" placeholder="Email" name="email"
                    value={values.email} onChange={handleChange} autoComplete="off"
                    onBlur={handleBlur}
                  />
                  <FontAwesomeIcon icon={faEnvelope} />
                  {errors.email && touched.email ? <p>{errors.email}</p> : null}
                </div>

                <div className={styles.input_field}>
                  <input type="text" placeholder="Username" name="name"
                    value={values.name} onChange={handleChange} autoComplete="off"
                    onBlur={handleBlur} />
                  <FontAwesomeIcon icon={faUser} />
                  {errors.name && touched.name ? <p>{errors.name}</p> : null}
                </div>

                <div className={styles.input_field}>
                  <input type={showPassword ? `text` : `password`}
                    placeholder="Password" name="password"
                    onBlur={handleBlur} autoComplete="off"
                    value={values.password} onChange={handleChange} />
                  <FontAwesomeIcon icon={faLock} />
                  <span className={styles.show_password} onClick={togglePasswordVisibility}>
                    {showPassword ? 'Hide Password' : 'Show Password'}
                  </span>
                  {errors.password && touched.password ? <p style={{ position: "absolute", bottom: "0" }}>{errors.password}</p> : null}
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
                  {loading ? (<SpinnerLoader />) : "Sign Up"}
                </button>

              </form>

            </div>
          </div>
        </div>
      </section>

      <Toast />
    </>
  )
}

export default Signup