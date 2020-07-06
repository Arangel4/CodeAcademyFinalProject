import React, { Component } from 'react';
import { Avatar, Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container } from '@material-ui/core';

class CreateGuestAccount extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className="containerStyle">
                <Avatar>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className="formStyle" noValidate>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                        />
                    </Grid>

                    <br />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className="submitStyle">
                        Create Guest Account
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                        <Link href="/" variant="body2">
                            Already have an account? Sign in
                        </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
                <Box mt={5}>
                </Box>
            </Container>
        );
    }
}
export default CreateGuestAccount;