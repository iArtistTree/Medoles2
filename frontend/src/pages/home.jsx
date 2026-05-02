import React from "react";
import { Button, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import {Link} from 'react-router-dom';

import './../styles/home.css'
import forestImg from "./../assets/Pages/Home/forest.jpg";
import forestImg2 from "./../assets/Pages/Home/forest2.jpg";
import forestImg3 from "./../assets/Pages/Home/forest3.jpg";
import communityimg from "./../assets/Pages/Home/communityimg.jpg";
import eventimg from "./../assets/Pages/Home/eventimg.png";
import jobimg from "./../assets/Pages/Home/jobimg.png";
import youtubeIcon from "./../assets/Socials/Youtube.png";
import discordIcon from "./../assets/Socials/Discord.png";
import twitterIcon from "./../assets/Socials/Twitter.png";
import countryFlag from "./../assets/Country/flag.png";

function Home(){
    
    return(
        <>
            {/* Thumbnail */}
            <div className="thumbnail">
                <img src={forestImg} alt="forest"/>
                <div className="sectionText">
                    <Typography variant="h1" sx={{fontSize: "8.5rem"}}>
                        Welcome to <br/>
                        <span style={{fontSize: "12rem", fontWeight: 700}}>
                            Medoles
                        </span> <br/>
                    </Typography>
                    <Typography variant="body1" sx={{fontSize: "2.5rem"}}>
                        A friendly northern micronation filled with
                        environmental wonders.
                    </Typography>

                    {/* Socials (WIP)*/}
                    <div style={{display: "flex", gap: "10px"}}>
                        <Button variant="contained" href="https://discord.gg/2e5U6FQFVf" sx={{backgroundColor: "#5865F2"}} startIcon={<img src={discordIcon} style={{ width: "20px", height: "20px", objectFit: "contain", filter: "brightness(0) invert(1)"}}/>}>
                            <Typography sx={{color: "white"}}>Join us on Discord</Typography>
                        </Button>
                        
                        <Button variant="contained" href="https://www.youtube.com/@Medoles" sx={{backgroundColor: "#FF0000"}} startIcon={<img src={youtubeIcon} style={{ width: "20px", height: "20px", objectFit: "contain", filter: "brightness(0) invert(1)"}}/>}>
                            <Typography sx={{color: "white"}}>Youtube</Typography>
                        </Button>

                        <Button variant="contained" href="https://x.com/MedolesGov" sx={{backgroundColor: "#1D9BF0"}} startIcon={<img src={twitterIcon} style={{ width: "20px", height: "20px", objectFit: "contain", filter: "brightness(0) invert(1)"}}/>}>
                            <Typography sx={{color: "white"}}>Twitter</Typography>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Cards */}
            <div className="cards">
                <div className="content" style={{display: "flex"}}>
                    <Card sx={{width: "30%", textAlign: "center", backgroundColor: "var(--color-primary)", color: "white", borderRadius: "5%"}}>
                        <CardMedia 
                            component="img"
                            height="250"
                            image={jobimg}
                            alt="Paperwork"
                        />
                        <CardContent>
                            <Typography fontWeight={700} variant="h5">GOVERNMENT POSITIONS</Typography>
                            <Typography variant="body1">Positions in the government are available for all citizens</Typography>
                        </CardContent>
                    </Card>

                    <Card sx={{width: "30%", textAlign: "center", backgroundColor: "var(--color-primary)", color: "white", borderRadius: "5%"}}>
                        <CardMedia 
                            component="img"
                            height="250"
                            image={communityimg}
                            alt="Discord icon"
                        />
                        <CardContent>
                            <Typography fontWeight={700} variant="h5">COMMUNITY</Typography>
                            <Typography variant="body1">Hangout and meet new people of all backgrounds</Typography>
                        </CardContent>
                    </Card>

                    <Card sx={{width: "30%", textAlign: "center", backgroundColor: "var(--color-primary)", color: "white", borderRadius: "5%"}}>
                        <CardMedia 
                            component="img"
                            height="250"
                            image={eventimg}
                            alt="Logo of the BPO"
                            sx={{backgroundColor: "blanchedAlmond"}}
                        />
                        <CardContent>
                            <Typography fontWeight={700} variant="h5">JOBS & EVENTS</Typography>
                            <Typography variant="body1">Create opportunities through jobs or events</Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* History */}
            <div className="history">
                <div className="content" style={{display: "flex"}}>
                    <div className="historyImages">
                        <img src={forestImg} alt="forest"/>
                        <img src={forestImg2} alt="forest"/>
                        <img src={forestImg3} alt="forest"/>
                    </div>

                    <div>
                        <Typography variant="h3" fontWeight={700}>Our history</Typography>
                        <br/>
                        <Typography variant="body1">We are a micronation located in Canada with a rich environment founded on the 24th of January 2024.</Typography>
                        <Link to="/info">
                            <Button variant="contained" sx={{backgroundColor: "var(--color-primary)", color: "white"}}>
                                Learn more
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Application */}
            <div className="application">
                <img src={forestImg} style={{opacity: 0.2, width: "100%", height: "100%", objectFit: "cover", position: "absolute"}} alt="forest"/>
                <div style={{display: "flex", alignItems: "center",  justifyContent: "center",gap: "5rem", width: "80%"}}>
                    <div className="applicationText">
                        <Typography variant="h5" sx={{fontSize: "3.5rem", fontWeight: 700}}>
                            Become a citizen
                            today!
                        </Typography>
                        <Button variant="contained" href="https://discord.gg/2e5U6FQFVf" sx={{backgroundColor: "#5865F2", width: "250px", height: "50px"}} startIcon={<img src={discordIcon} style={{ width: "35px", height: "35px", objectFit: "contain", filter: "brightness(0) invert(1)"}}/>}>
                                <Typography sx={{color: "white"}}>Apply here</Typography>
                        </Button>
                    </div>
                    <img src={countryFlag} style={{width: "300px", height: "200px", zIndex: 1}}/>
                </div>
            </div>

        </>
    )
}

export default Home;