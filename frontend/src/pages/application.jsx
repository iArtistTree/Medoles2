import { Typography, TextField, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../styles/application.css'

const API_URL = "https://medoles.onrender.com";

function Application(){
    const [data, setData] = useState([])
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")

    useEffect(() => {
        fetchApplicants();
    }, []);

    const fetchApplicants = async () => {
        try {
            const response = await axios.get(`${API_URL}/applicants`);
            setData(response.data);
        } catch(error) {
            console.log(error)
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            await axios.post(`${API_URL}/applicants`, {firstname, lastname, email});
            fetchApplicants();
            setFirstname('');
            setLastname('');
            setEmail('');
            console.log("Application successfully submitted!")
        } catch(error) {
            console.log(error)
        }
    }

    return(
        <>
            <div className="applicationPage">
                <div className="content" style={{marginTop:"50px"}}>
                <Typography variant="h4">Citizenship Application</Typography>

                <form onSubmit={handleSubmit}>
                    <div className="formArea">
                    <div style={{ display: "flex", gap: "1rem"}}>
                        <TextField fullWidth label="First Name" variant="outlined" sx={{marginBottom: "1rem"}} onChange={(e) => setFirstname(e.target.value)} value={firstname}/>
                        <TextField fullWidth label="Last Name" variant="outlined" onChange={(e) => setLastname(e.target.value)} value={lastname}/>
                    </div>
                    <TextField fullWidth label="Email" variant="outlined" type="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                    </div>
                
                    <Button variant="contained" sx={{backgroundColor: "var(--color-primary)", color: "white", marginBottom: "1rem"}} type="submit">Submit</Button>
                </form>
                    <Typography>There is currently: <b>{data.length}</b> applicants</Typography>
                </div>
            </div>
        </>
    );
};

export default Application;
