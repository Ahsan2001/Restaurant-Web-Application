import React from 'react';
import salyImg from "/Saly-1.png"
import {documentTitle} from '../utils/title';
import styles from "../stylesheets/auth.module.css"

const Login = () => {

  // page title 
  documentTitle("Login");


  // function showPassword() {
  //   var passwordField = document.getElementById("password");
  //           var passwordToggle = document.getElementById("passwordToggle");
  
  //       if (passwordField.type === "password") {
  //         passwordField.type = "text";
  //         passwordToggle.textContent = "Hide password";
  //       } else {
  //         passwordField.type = "password";
  //        passwordToggle.textContent = "Show password";
  //       }
  // }

  return (
    <section className={styles.login_page}>
      <div class="container">
          <div class="flex flex-row">
              <div class="flex-4">
                  <div className={styles.left_inner_content}>
                    <h2>Welcome Back! <br />  Login to your <span>Account</span></h2>
                    <img src={salyImg} alt="left side image" />
                  </div>
              </div>
              <div class="flex-6">
                  <form action="" className={styles.right_inner_content}>
                      <h5>Login</h5>
                      <div className={styles.input_field}>
                          <input type="email" name="email"  placeholder="Email" />
                          {/* <i className={styles.fa-solid fa-envelope}></i> */}
                      </div>
                      <div className={styles.input_field}>
                          <input type="password" name="password" id="password" placeholder="Password" />
                          {/* <i className={styles.fa-solid fa-lock"  ></i> */}
                          <span className={styles.show_password}>Show password</span>
                      </div>
                      <p className={styles.click_here}>Don’t You have account, <a href="/signup">click here.</a>  </p>
                      <button type="submit" className={styles.login_btn}>Login</button>
                  </form>
              </div>
          </div>
      </div>
    </section>
  )
}

export default Login