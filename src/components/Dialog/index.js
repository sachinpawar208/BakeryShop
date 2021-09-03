import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Link} from "react-router-dom";

export default function UserDialog() {
    return (
        <div>
            <Dialog open={true}

                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">
                    {"Perform following Action"}</DialogTitle>
                <DialogContent style={
                    {minWidth: "300px"}
                }>
                    <DialogContentText id="alert-dialog-description">
                        <Link to={
                            {pathname: "/dashboard"}
                        }>
                            <Button variant="contained" color="primary"
                                style={
                                    {width: "100%"}
                            }>
                                Add to cart
                            </Button>
                        </Link><br/><br/>
                        <Link to={
                            {pathname: "/sucess"}
                        }>
                            <Button variant="contained" color="secondary"
                                style={
                                    {width: "100%"}
                            }>
                                Proceed to pay
                            </Button>
                        </Link>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
}
