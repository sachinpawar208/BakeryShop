import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Cake from "../../assets/images/cake4.jfif"
import Brownies from "../../assets/images/brownie2.jfif"
import icecream from "../../assets/images/ice5.jfif"
import {Link} from "react-router-dom";

export default function Dashboard() {
    const classes = useStyles();
    // console.log("Dummy data----->",BackeryItems);
    const data = [
        {
            "Id": 1,
            "Title": "Cakes",
            "Desc": "  Choose from an array of our delectable cakes, an indulgence that is absolutely worthy of it. ",
            "Url": Cake
        }, {
            "Id": 2,
            "Title": "Brownies",
            "Desc": "Gooey & fudgy on the inside and amazingly delicious all over! Our melt-in-the-mouth Brownies will give you serious dessert goals. ",
            "Url": Brownies
        }, {
            "Id": 3,
            "Title": "IceCream",
            "Desc": " Premium variety of ice creams from gourmet chocolate to velvety smooth filter coffee to chunks of alphonso mango and lots of love!",
            "Url": icecream
        },
    ]

    function FormRow() {
        return (
            <React.Fragment> {
                data.length > 0 ? data.map((key) => {
                    return (
                        <Grid item
                            xs={12}
                            md={4}
                            sm={6}>

                            <Card className={
                                    classes.root
                                }
                                // onClick={()=>{console.log("key----->",key)}}
                            >
                                <Link className={
                                        classes.menuLink
                                    }
                                    to={
                                        {pathname: `/content/${
                                                key.Title
                                            }`}
                                }>
                                    <CardActionArea>
                                        <img src={
                                                key.Url
                                            }
                                            alt="cake"
                                            height="300px"
                                            width="100%"/>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {
                                                key.Title
                                            } </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {
                                                key.Desc
                                            } </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Link>
                            </Card>

                        </Grid>
                    )
                }) : null
            }
                <div className={
                    classes.root
                }>
                    <h2>ORDER DESSERT ONLINE | DESSERT DELIVERY NEAR ME FROM SWEET TRUTH</h2><br/>
                    <p>
                        What’s the first thing that comes to your mind when you think of Desserts? Sweet treats, happiness, delight, yummy, awesomeness, cheesecakes, 
                                                ice creams, pastries, good vibes and so much more we are sure, isn't it? And that’s exactly what they are, the cumulative collection of all things good, 
                                                packaged into a delicious, pretty looking treat for everyone! And over the years the popularity of Desserts has grown from being a simple, light, 
                                                “the last course of a meal” dish to a highly complex, incredibly varied, absolutely indispensable part of popular culture and human life.
                    </p>
                    <p>
                        All you have to do is close your eyes, think about food and we are pretty sure that one of the first images that will come into your head will be that of sweet desserts - lots of beautiful, 
                                                delicious, colorful, delectable, tasty looking creations of sweet goodness ready to be devoured by you! No matter if it is from a place you found on a google 
                                                ‘dessert places near me’ or from a legendary dessert house or an online pastry delivery company, good sweet desserts are sure to incite a positive response in you!                        
                                                Sweet desserts are also sometimes considered as a ‘drug’ because there are so many people around the world who are addicted to it, so much so that if they don’t have their sweet fix for the day they start getting gloomy and in some cases even depressed. 
                                                It is no wonder that some of the best online pastries are often called ‘Sinful Treats’ or ‘Sweet Sins’! But don’t worry it is still not illegal to indulge in a sweet dessert every now and then.
                    </p>
                </div>

            </React.Fragment>
        );
    }

    return (
        <div className={
            classes.root
        }>
            <Grid container
                spacing={3}>
                <Grid container item
                    xs={12}
                    spacing={3}>
                    <FormRow/>
                </Grid>
            </Grid>
        </div>
    );
}


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: "20px"
    },

    image: {
        width: "100%",
        height: "300px"
    },
    menuLink: {
        textDecoration: "none!important",
        color: "black !important"
    }
}));
