import React, { Component } from 'react';
import { Button, CssBaseline, TextField, Grid, Box, Typography, Container } from '@material-ui/core';

class ResetPassword extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className="containerStyle">
                <Typography className="textStyle" component="h7" variant="h5">
                    Enter your email to have a link sent to reset your password.
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
                        type="send"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className="submitStyle">
                        Send
                    </Button>
                </form>
            </div>
                <Box mt={5}>
                </Box>
            </Container>
        );
    }
}
export default ResetPassword;