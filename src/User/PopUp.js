import React, { Component } from "react";
import { Button, CssBaseline, TextField, Grid, Box, Typography, Container } from '@material-ui/core';

export default class PopUp extends Component {
  handleClick = () => {
    this.props.toggle();
  };

  render() {
    return (
        <div className="modal">
            <div className="modal_content">
            <span className="close" onClick={this.handleClick}>
                &times;
            </span>
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
            </div>
        </div>
    );
  }
}
