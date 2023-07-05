import React from "react"
import { useState, useEffect } from "react"
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
                                        <img src = {`${fetch.image}`} alt= {`${fetch.title}`} height='200px' width='200px'/>
                                        {fetch.title}<br/>
                                        {fetch.price}<br/>
                                        {fetch.description}
                                    </ListItem>
                                    <br/><Divider/>
                                </List>
                            )
                        })}
            </div>
        }
        </>
    )

};

export default APIcall;