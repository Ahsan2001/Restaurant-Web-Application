import React from 'react';
import { documentTitle } from '../utils/title';

const Signup = () => {

    // page title 
    documentTitle("Register")

    return (
    <section className={styles.login_page}>
        <div class="container">
        <div class="flex flex-row">
              <div class="basis-1/4">
                    <div className={styles.left_inner_content}>
                        <h2>Join with us and create  your  <span>Account</span></h2>
                    </div>
                    <img src="./Saly-1.png" alt="left side image"  />
                </div>
                <div className="col-md-7 px-md-0">
                    <form action="" className={styles.right_inner_content}>
                        <h5>Create Account</h5>
                        <div className={styles.input_field}>
                            <input type="email" name="email"  placeholder="Email" />
                            {/* <i className={styles.fa-solid fa-envelope}></i> */}
                        </div>
                        <div className={styles.input_field}>
                            <input type="text" name="text"  placeholder="Username" />
                            {/* <i className={styles.fa-solid fa-user}></i> */}
                        </div>
                        <div className={styles.input_field}>
                            <input type="password" name="password"  placeholder="Password" />
                            {/* <i className={styles.fa-solid fa-lock"  ></i> */}
                            <span className={styles.show_password} >Show password</span>
                        </div>
                        <p className={styles.click_here}>Already have an account?, <a href="login.html">click here.</a>  </p>

                        <button type="submit" className={styles.login_btn}>Create Account</button>

                    </form>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Signup