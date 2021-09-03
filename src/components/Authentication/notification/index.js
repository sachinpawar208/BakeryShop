import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({

    text: {
        color: "green",
        opacity: "0.8",
        fontSize: "3rem",
        fontWeight: 600,
        textAlign: "center",
        marginTop: "40vh"
    },
    subtext: {
        color: "green",
        opacity: "0.8",
        fontSize: "2rem",
        fontWeight: 600,
        textAlign: "center"
    },
    btn: {
        display: "block",
        marginRight: "auto",
        marginLeft: "auto"
    }
}));


export default function OrderPlacePage() {
    const classes = useStyles();
    return (
        <div>

            <p className={
                classes.text
            }>
                Your Order Is Placed Successfully !
            </p>
            <p className={
                classes.subtext
            }>Thank you !</p>
            <Link to={
                {pathname: "/dashboard"}
            }>
                <Button variant="contained" color="primary"
                    className={
                        classes.btn
                }>
                    close
                </Button>
            </Link>
        </div>
    );
}
