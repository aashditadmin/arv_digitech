import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import ResultProduct from "./ResultProduct";


export default function SearchProduct() {

    const [option, setoption] = useState('')
    const handleOption = (event, value) => {
        if (value) {
            setoption(value.title.toLowerCase());
        }
    }


    return (
        <div className="card searchP">
            <div className="title">
                <h5>Enter Your Product</h5>
            </div>
            <Autocomplete
                id="searchbox"
                options={products}
                getOptionLabel={option => option.title}
                style={{
                    width: " 40vw",
                }}

                onChange={handleOption}

                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Enter your Product"
                        variant="outlined"
                    // onChange={handleSearch}
                    />
                )}
            />

            <ResultProduct data={option} />
        </div>
    );
}

const products = [{ title: "Wheat" }, { title: "RIce" }, { title: "Dal" }];
