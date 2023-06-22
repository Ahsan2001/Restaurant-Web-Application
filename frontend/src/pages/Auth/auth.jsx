import styles from "./auth.module.css"

  // show password function

export const TogglePassword = ({ showPassword, setShowPassword }) => {
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    }
      
    return (
      <span className={styles.show_password} onClick={togglePasswordVisibility}>
        {showPassword ? 'Hide Password' : 'Show Password'}
      </span>
    )
}
  