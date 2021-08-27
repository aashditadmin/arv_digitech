import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import React, { useEffect } from 'react'

import ProductCard from './ProductCard';
import SearchProduct from './SearchProduct';
import useFetch from './useFetch';




const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});



export default function CategotyTable() {

    var data = useFetch(`http://localhost:8000/category`);




    const classes = useStyles();
    const mystyle =
    {
        marginTop: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    }

    const tabmin = {
        minWidth: '140px'
    }
    const pad = {
        padding: ' 0 35px',
        boxShadow: 'none'
    }

    return (
        <>
            <div className="" style={mystyle}>
                <div className="card">
                    <div className="table">
                        <TableContainer component={Paper} style={pad}>
                            <Table className={classes.table} aria-label="simple table"  >
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={tabmin}>Category</TableCell>
                                        <TableCell style={tabmin}>Product Name</TableCell>
                                        <TableCell style={tabmin}>Website</TableCell>
                                        <TableCell >Offers</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data.map((row) => (
                                        <TableRow key={row.id}>

                                            <TableCell >{row.categoryName}</TableCell>
                                            <TableCell >{row.productName}</TableCell>
                                            <TableCell >{row.website}</TableCell>
                                            <TableCell >{row.desc}</TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
                {/* Product Card section  */}
                <ProductCard />

                <SearchProduct />
            </div>

        </>
    );
}
