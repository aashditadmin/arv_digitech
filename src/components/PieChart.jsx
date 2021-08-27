import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";

import Chart from "react-google-charts";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 300 + theme.spacing(3) * 2,
        flexGrow: 1
    }
}));



function ValueLabelComponent(props) {
    const { children, open, value } = props;

    return (
        <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}

ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.number.isRequired
};
// style={{
//     color: "white",
//     background: "#ff9900",
//     borderColor: " #ff9900",
//     boxShadow: " 1px 1px 10px 1px grey",
//     outline: 'none'
// }}
const PrettoSlider = withStyles({
    root: {
        color: "#d9b766",
        height: 8
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: "#fff",
        border: "2px solid currentColor",
        marginTop: -8,
        marginLeft: -12,
        "&:focus, &:hover, &$active": {
            boxShadow: "inherit"
        }
    },
    active: {},
    valueLabel: {
        left: "calc(-50% + 4px)"
    },
    track: {
        height: 8,
        borderRadius: 4
    },
    rail: {
        height: 8,
        borderRadius: 4
    }
})(Slider);

export default function PieChart() {
    const classes = useStyles();

    const [value1, setValue1] = useState(760);
    const [value2, setValue2] = useState(540);
    const [value3, setValue3] = useState(370);
    const handleSliderChange1 = (event, newValue) => {
        setValue1(newValue);
    };
    const handleSliderChange2 = (event, newValue) => {
        setValue2(newValue);
    };
    const handleSliderChange3 = (event, newValue) => {
        setValue3(newValue);
    };


    const handleInputChange1 = (event) => {
        setValue1(event.target.value === '' ? '' : Number(event.target.value));
    };
    const handleInputChange2 = (event) => {
        setValue2(event.target.value === '' ? '' : Number(event.target.value));
    };
    const handleInputChange3 = (event) => {
        setValue3(event.target.value === '' ? '' : Number(event.target.value));
    };

    const flex = {
        display: 'flex'
    }

    return (
        <div style={{
            marginTop: '40px',
        }}>
            <Grid container spacing={1}>
                <Grid className="card" item md={7} style={{
                    padding: '20px',
                    marginLeft: '2.5%',
                    marginRight: "2%"

                }}>
                    <div className="slider_wrapper" style={{ padding: '10px 0' }}>
                        <Typography gutterBottom>Travel</Typography>
                        <div className="slider">
                            <div style={flex}>

                                <div className="slider">
                                    <PrettoSlider
                                        min={100}
                                        step={10}
                                        max={1000}
                                        valueLabelDisplay="auto"
                                        aria-label="pretto slider"
                                        defaultValue={200}
                                        onChange={handleSliderChange1}
                                        value={typeof value1 === 'number' ? value1 : 0}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="inputField">
                            <input type="text"
                                className="form-control" style={{
                                    width: '100px'
                                }}
                                onChange={handleInputChange1}
                                value={value1}
                            />
                        </div>
                    </div>

                    <div className="slider_wrapper" style={{ padding: '10px 0' }}>
                        <Typography gutterBottom>Food</Typography>
                        <div className="slider">
                            <div className={classes.flex}>

                                <div className="slider">
                                    <PrettoSlider
                                        min={100}
                                        step={10}
                                        max={1000}
                                        valueLabelDisplay="auto"
                                        aria-label="pretto slider"
                                        defaultValue={200}
                                        onChange={handleSliderChange2}
                                        value={typeof value2 === 'number' ? value2 : 0}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="inputField">
                            <input type="text"
                                className="form-control" style={{
                                    width: '100px'
                                }}
                                onChange={handleInputChange2}
                                value={value2}
                            />
                        </div>
                    </div>

                    <div className="slider_wrapper" style={{ padding: '10px 0' }}>
                        <Typography gutterBottom>Movies</Typography>
                        <div className="slider">
                            <div className={classes.flex}>

                                <div className="slider">
                                    <PrettoSlider
                                        min={100}
                                        step={10}
                                        max={1000}
                                        valueLabelDisplay="auto"
                                        aria-label="pretto slider"
                                        defaultValue={200}
                                        onChange={handleSliderChange3}
                                        value={typeof value3 === 'number' ? value3 : 0}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="inputField">
                            <input type="text"
                                className="form-control" style={{
                                    width: '100px'
                                }}
                                onChange={handleInputChange3}
                                value={value3}
                            />
                        </div>
                    </div>

                    <div
                        style={{
                            float: "right",
                            paddingRight: '2.5%'

                        }}>
                        <button class="btn btn-sm btn-warning reCalc">Re-Calculate</button>
                    </div>
                </Grid>




                {/* Pie Chart */}
                <Grid item md={4} className="card">
                    <Chart
                        width={'100%'}
                        height={'100%'}
                        chartType="PieChart"

                        data={[
                            ['Type', '11'],
                            ['Rice', 300],
                            ['Wheat', 540],
                            ['Dal', 415],
                        ]}
                        options={{
                            legend: 'none',
                            pieHole: 0.5,

                            height: "100%",
                            width: "100%",
                            backgroundColor: 'transparent',
                            chartArea: {
                                height: "94%",
                                width: "94%"
                            }
                        }}

                        rootProps={{ 'data-testid': '3' }}
                    />
                </Grid>
            </Grid>
        </div >



    );
}
