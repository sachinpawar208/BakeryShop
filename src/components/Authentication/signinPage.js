import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
const useStyles = makeStyles((theme) => ({
    "@global": {
        body: {
            backgroundColor: "#fffff"
        }
    },
    paper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "2px solid black",
        padding: "100px",
        background: "#F7F8F1"
    },
    form: {
        width: "100%", 
    },
    button: {
        width: "93%",
        margin: "0 auto",
        marginTop: "6%",
        // background: "#000000",
        marginLeft: "10px"
    },

    Input: {
        marginTop: "8%",
        backgroundColor: "#ffffff",
        borderRadius: "2px",
        height: "45px",
        marginLeft: "10px",
        paddingLeft: "10px",
        width: "93%",
        border: "1px solid #303F9F"
    },
    coverBackgroundContainer: {
        height: "95vh",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: "4%",
        paddingRight: "4%",
        paddingTop: "50px",
        position: "fixed",
        width: "95%",
        marginLeft: "-10px"

    },
    link: {
        color: "white",
        textDecoration: "none"

    }
}));

function SignIn() {

    const classes = useStyles();


    return (
        <div className={
            classes.coverBackgroundContainer
        }>
            <div>
                <Container component="main" maxWidth="sm"
                    style={
                        {marginTop: "-40px"}
                }>
                    <div className={
                        classes.paper
                    }>


                        <h1>SignIn</h1>

                        <form className={
                            classes.form
                        }>
                            <Input className={
                                    classes.Input
                                }
                                autoFocus
                                id="username"
                                name="username"
                                required
                                placeholder="Username"
                                type="text"
                                variant="outlined"
                                fullWidth/>
                            <Input className={
                                    classes.Input
                                }
                                id="password"
                                name="password"
                                required
                                placeholder="Password"
                                variant="outlined"
                                fullWidth
                                type="password"/>
                            <Grid container
                                style={
                                    {width: "93%"}
                            }>
                                <Grid item
                                    xs={6}
                                    style={
                                        {
                                            textAlign: "left",
                                            paddingTop: "8%",
                                            paddingLeft: "4%"
                                        }
                                }>
                                    <Link to={
                                            {pathname: "/signup"}
                                        }
                                        style={
                                            {
                                                textDecoration: "none",
                                                color: "#000000",
                                                border: "none"
                                            }
                                    }>
                                        Sign Up
                                    </Link>
                                </Grid>
                                <Grid item
                                    xs={6}
                                    style={
                                        {
                                            textAlign: "right",
                                            paddingTop: "8%"
                                        }
                                }>
                                    Forgot password?
                                </Grid>
                            </Grid>
                            <Link to={
                                    {pathname: "/dashboard"}
                                }
                                className={
                                    classes.link
                            }>
                                <Button type="submit"
                                    className={
                                        classes.button
                                    }
                                    variant="contained"
                                    color="primary">
                                    Login
                                </Button>
                            </Link>

                        </form>
                    </div>
                    <Box mt={8}></Box>
                </Container>
            </div>


        </div>
    );
}
export default SignIn;
