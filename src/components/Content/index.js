import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Link, useParams} from "react-router-dom";
import BackeryItems from "../Dashboard/dummy.json"
import Cakes from "../cake.json"
import Brownies from "../brownies.json"
import Icecream from "../icecream.json"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: "20px"
    },

    container: {
        margin: "20px"
    },
    link: {
        textDecoration: "none!important",
        background: "red"
        // color
    }
}));

export default function SubContent(props) {
    const classes = useStyles();
    let {name} = useParams()
    const [content, setContent] = useState([]);
    let result = []
    console.log("params----->", name)

    useEffect(() => {
        result = BackeryItems.filter((item) => item.name === name)
        setContent(result)
        // console.log("result is here----->", result[0].data)
        // console.log("name......>", name)

        if (name === "Cakes") {
            setContent(Cakes)
        }

        if (name === "Brownies") {
            setContent(Brownies)
        }

        if (name === "IceCream") {
            setContent(Icecream)
        }

    }, [name]);

    return (
        <div className={
            classes.root
        }>
            <Grid container
                spacing={3}>
                <Grid container item
                    xs={12}
                    spacing={3}>
                    {
                    content.map((key) => {
                        {
                            console.log("images is here...>", key.image)
                        }
                        return (
                            <Grid item
                                xs={12}
                                md={3}
                                sm={4}>
                                <Link to={
                                        {pathname: "/content/:name/dialog"}
                                    }
                                    className={
                                        classes.link
                                }>
                                    <Card className={
                                        classes.root
                                    }>
                                        <CardActionArea>

                                            <img src={
                                                    key.image
                                                }
                                                height="300px"
                                                width="100%"
                                                alt="Image"/>
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    {
                                                    key.title
                                                } </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    <b>₹{
                                                        key.price
                                                    }</b>
                                                    <del>₹{
                                                        key.mainprice
                                                    } </del>&nbsp;{
                                                    key.discount
                                                }% off
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Link>
                            </Grid>
                        )
                    })
                } </Grid>
            </Grid>
        </div>
    );
}
