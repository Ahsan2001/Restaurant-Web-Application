import React from 'react';
import styles from "./styles.module.css"
import Grid from '@mui/material/Grid';
import { Button, Container } from '@mui/material';

const About = () => {
  return (
    <section className={styles.about_section}>
        <Container>
            <Grid container>
                <Grid item lg={6} md={4} sm={12} xs={12}>
                    <div className={styles.inner_image}>
                        <img src="./about-us.png" alt="about-us" /> 
                    </div>
                </Grid>
                <Grid item lg={6} md={8} sm={12} xs={12}>
                    <div className={styles.inner_content}> 
                        <h4>About us</h4>
                        <h3>We Are Tasty</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quam possimus rerum cumque magnam voluptatibus ex culpa ullam suscipit. Doloribus.</p>
                        <Button
                            color="primary"
                            disabled={false}
                            size="large"
                            variant="outlined"
                        >Ahsan Shaikh
                        </Button>

                    </div>
                </Grid>
            </Grid>
        </Container>
    </section>
  )
}

export default About