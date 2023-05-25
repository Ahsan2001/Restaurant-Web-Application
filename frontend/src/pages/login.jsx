import React, { useState } from 'react';
import salyImg from "/Saly-1.png"
import fb from "/facebook.png"
import google from "/google-logo.png"
import {documentTitle} from '../utils/title';
import styles from "../stylesheets/auth.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faLock } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { HandleRequest } from '../components';

const Login = () => {

  // page title 
  documentTitle("Login");

  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loader, SetLoader] = useState(false);
  
  const handleChange = (setState) => (e) => {
      setState(e.target.value);
  }

  const handleForm =  (e) => {
      e.preventDefault();
      // SetLoader(true)
      window.alert(`
          Email: ${email} 
          Password: ${password}
      `);

      handleChange(SetEmail(""));
      handleChange(SetPassword(""));
      // SetLoader(false);
  }



  const TogglePassword = () => {
      if (showPassword === true) {
          setShowPassword(false)
      } else {
          setShowPassword(true)
      }
  }

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
          <div className="w-full lg:w-7/12">
            <form onSubmit={handleForm} className={`${styles.right_inner_content} p-24`}>
              <h5 className="text-center lg:text-left">Login</h5>
              <div className={styles.input_field}>
                <input type="email" placeholder="Email" value={email} onChange={handleChange(SetEmail)} required />
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className={styles.input_field}>
                <input type={showPassword ? `text` : `password`}  placeholder="Password" value={password} onChange={handleChange(SetPassword)} required />
                <FontAwesomeIcon icon={faLock} />
                <span className={styles.show_password} onClick={TogglePassword}>{showPassword ? 'Hide Password' : 'Show Password'}</span>
              </div>

              <div className={styles.google_facebook_btns}>
                  <span>OR</span>
                <div className={styles.main_wrap}>
                  <button><img src={google} alt="google icon"/> Sign in Google</button>
                  <button><img src={fb} alt="fb icon" /> Sign in Facebook</button>
                </div>
              </div>

              <p className={styles.click_here}>
                Don’t you have an account? <Link to="/signup">Click here.</Link>
              </p>
              <button type="submit" className={`${styles.login_btn} w-full`}>
                {loader ? <HandleRequest /> : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login