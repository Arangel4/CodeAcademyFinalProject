import React, { Component } from 'react';
import UserDashboard from './User/UserDashboard';
import CreateUserAccount from './User/CreateUserAccount';
import ResetPassword from './User/ResetPassword';
import CreateGuestAccount from './Guest/CreateGuestAccount';
import { Button, TextField, Typography, Container, CssBaseline, Avatar, FormControlLabel, Checkbox, Grid, Box, } from '@material-ui/core';
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            text: ""
        }
    }
    toggle = (e) => {
        e.preventDefault();
        this.setState({
            loggedIn: !this.state.loggedIn
        });
    }

    render() {
        return (
            this.state.loggedIn ? <UserDashboard /> : (
                <Container component="main" maxWidth="xs">
                <CssBaseline />
                    <div className="containerStyle">
                        <Avatar />
                        <br />
                        <Typography component="h1" variant="h5">
                        Sign in
                        </Typography>
                        <form className="formStyle" noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <div className="submitStyle">
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    onClick={this.toggle}>
                                Sign In
                                </Button>
                            </div>
                                <Grid container>
                                    <Grid item xs>
                                        <Link to="/reset-password" variant="body2">Forgot password?</Link>
                                    </Grid>
                            
                                    <Grid item xs>
                                        <Link to="/create-user-account" variant="body2">Create Account</Link> 
                                    </Grid>
                            
                                    <Grid item>
                                        <Link to="/guest-login" variant="body2">Guest Login</Link>
                                    </Grid>
                                </Grid>
                            </form>
                    </div>
                        <Box mt={8}>
                        </Box>
                </Container>
            )
        );
    };
}
export default Login;