import React from "react"
import { useState, useEffect } from "react"
// import Box from "@mui/system";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CircularProgress from '@mui/material/CircularProgress';
import { Divider } from "@mui/material";

const APIcall = () => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const getData = () => {
        setLoading(true)
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        // .then(json=>console.log(json))
        .then(data=>{
            setData(data);
            setLoading(false)
        });
    };
    useEffect(() => {
        getData();
    }, [])

    return (
        <>
        {loading? (<CircularProgress/>):
            <div className="container">
                        {data.map((fetch) => {
                            return(
                                <List className="HeadersList" key={fetch.number}>
                                    <ListItem disablePadding>
                                        {fetch.title}<br/>
                                        {fetch.image}<br/>
                                        {fetch.price}<br/>
                                    </ListItem>
                                    <br/> <Divider/>
                                </List>
                            )
                        })}
            </div>
        }
        </>
    )

};

export default APIcall;