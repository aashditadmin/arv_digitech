import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Container from '@material-ui/core/Container';
import Cetegory from './CategotyTable'
import Footer from './Footer';
import PieChart from './PieChart';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    }
}));



export default function Home() {
    const classes = useStyles();
    var cars;



    return (
        <div className={classes.root}>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <PieChart />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Cetegory value={cars} />

                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </div>
    )
}
