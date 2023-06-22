import * as Yup from "yup";

export const signupSchema = Yup.object({
    name: Yup.string().min(3).max(30).required("Please enter your username"),
    email: Yup.string().email().required("Please enter your email"),
    role: Yup.string().required("Please enter your role"),
    password: Yup.string().min(6, 'Password must be at least 6 characters long')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z\d!@#$%^&*()]+$/,
      'Password not strong enough'
    )
    .required('Please enter your password'),
    // confirm_password: Yup.string().required().oneOf([Yup.ref.password, null], "Password must match")
})