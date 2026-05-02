import React from "react";
import './../styles/info.css'
import Medolesflag from './../assets/Country/flag.png'
import Medolesmap from './../assets/Country/map.png'
import { Typography, Card, CardContent, CardMedia, Divider } from "@mui/material";

function Info(){

    return(
        <>
            <div className="InfoPage">
                <div className="content">
                        {/*INFO CARD*/}
                        <Card sx={{maxWidth: 350}} className="InfoCard">
                            {/* Title */}
                            <CardContent>
                                <Typography variant="h6" fontWeight={700}>Most Serene Republic of Medoles</Typography>
                                <Typography variant="h6"><i>Sérénissime république de Médoles</i> (French)</Typography>
                            </CardContent>
                            {/* Flag */}
                            <CardMedia component="img" height="250" image={Medolesflag} sx={{objectFit: "contain"}}/>
                            <Typography variant="body2" sx={{textAlign: "center"}}><i>Flag of Medoles</i></Typography>
                            {/* Map */}
                            <CardMedia component="img" height="250" image={Medolesmap} sx={{objectFit: "contain"}}/>
                            <Typography variant="body2" sx={{textAlign: "center"}}><i>Map of Medoles</i></Typography>

                            <Divider/>
                            {/* General info */}
                            <Typography variant="h6" sx={{textAlign: "center"}}>General Information</Typography>
                            <Divider/>
                            <div>
                                <Typography variant="body1"><b>Government: </b>Presidential Constitutional Democracy</Typography>
                                <Typography variant="body1"><b>President: </b>Maytix</Typography>
                                <Typography variant="body1"><b>Capital: </b>N/A</Typography>
                                <Typography variant="body1"><b>Language(s): </b>English &centerdot; French</Typography>
                                <Typography variant="body1"><b>Religion: </b>N/A</Typography>
                                <Typography variant="body1"><b>currency: </b>N/A</Typography>
                            </div>

                            <Divider/>
                            {/* Geography*/}
                            <Typography variant="h6" sx={{textAlign: "center"}}>Geography</Typography>
                            <Divider/>
                            <div>
                                <Typography variant="body1"><b>Area: </b>0.25km&sup2;</Typography>
                                <Typography variant="body1"><b>Timezone: </b>UTC-4 (Summer) & UTC-5 (Winter)</Typography>
                            </div>

                            <Divider/>
                            {/* History*/}
                            <Typography variant="h6" sx={{textAlign: "center"}}>History</Typography>
                            <Divider/>
                            <div>
                                <Typography variant="body1"><b>Independence </b>from Canada</Typography>
                                <Typography variant="body1"><b>Founded: </b>24th of January 2024</Typography>
                            </div>

                            <Divider/>
                            {/* Demography*/}
                            <Typography variant="h6" sx={{textAlign: "center"}}>Demography</Typography>
                            <Divider/>
                            <div>
                                <Typography variant="body1"><b>Demonym(s): </b>Medolite</Typography>
                                <Typography variant="body1"><b>Population: </b>63 (2025)</Typography>
                            </div>
                        </Card>

                        {/*TEXT BODY*/}
                        <div>
                            {/* Title */}
                            <Typography variant="h4">Most Serene Republic of Medoles</Typography>
                            <Divider/>

                            {/* Main */}
                            <Typography>
                                Medoles (/mɛˈdoʊlz/ MEH-DOHLS), officially the Most Serene Republic of Medoles, is a sovereign nation in North America and an enclave inside Canada which is considered by most to be a micronation. Medoles is a peninsula surrounded by Charleston Lake, at the heart of the Frontenac Axis region. It has a land area of approximately 0.25 square kilometers and a population of 30 as of 2025.
                                <br/><br/>
                                Founded on 24 January 2024, Medoles takes its name from Medoles Point, one of the key geographical features of the area. The name might have derived from the word medole, defined as soft and juicy essence of a plant. It likely relates to the soft nature of the soil at Medoles Point. It came into existence through its 3 founders: TheArtistTree, X-Man & Helium.
                            </Typography>
                            <br/>
                            {/* History */}
                            <Typography variant="h5">History</Typography>
                            <Divider/>
                            <Typography>
                                Before European settlements, Native American villages occupied the area that is now Medoles, most recently inhabited by the Iroquois, Algonquins and the Mississaugas. Following the arrival of the Europeans, they were involved in the fur trade, especially with the French, who eventually created settlements as early as 1670. Following the conclusion of the Seven Years' War, also known as the French and Indian War in 1763. The area was transferred to Great Britain as part of the province of Quebec, which would eventually become the dominion of Canada. Charleston Lake is part of what used to be Grenville County. It united with Leeds County to form the United Counties of Leeds and Grenville, Ontario, in 1850.
                                <br/><br/>
                                Discussions for the emergence of a sovereign Medolite state began to take shape in January 2024, with the founding members of TheArtistTree, X-Man and Helium. The following months forged the core identity and building blocks of Medoles, including the governmental structure. In June 2024, they opened their doors to citizenship, hosting their first elections in the same month under the banner of the Most Serene Republic of Medoles. After the electoral structuring of the government, the following months were relatively quiet until December 2024, when they established their first foreign exchanges and initiated the activities of the parliament. In March 2025, a short-lived and failed coup attempted by Steve Zelhas to impose foreign influence on Medoles and put in doubt its autonomy, known as the "Zeion Revolt" or the "2025 March Revolt".
                            </Typography>
                            <br/>

                            {/* Politics & government */}
                            <Typography variant="h5">Politics and government</Typography>
                            <Divider/>
                            <Typography>
                                <b>President</b><br/>
                                As a presidential constitutional democracy, the Most Serene Republic of Medoles has the President as its head of state and government. The President leads the executive branch and is tasked to enact and enforce passed legislation and laws. Furthermore, they represent Medoles in its foreign affairs and administer the police department to ensure the micronation's security and integrity. The President is an elected position with a two-month term and no term limits.
                                <br/><br/>
                                <b>Senate</b><br/>
                                The Senate is the political body that leads the legislative branch. It was created by the new constitution enacted on 26 January 2025 and is composed of three or more Senators. These Senators are tasked with considering legislation to be proposed to the Parliament. Senators are elected by the populace for month-long, staggered terms.
                                <br/><br/>
                                <b>Parliament</b><br/>
                                The Parliament is the second legislative body composed of all Medoles citizens, acting closely to a direct democracy. Their main task is to vote to pass or reject legislation proposed by the Senate. Legislation passed by the Parliament with 50%, or 75% in the case of Constitutional amendments, will then be enacted and enforced by the President.
                                <br/><br/>
                                <b>Chief Justice</b><br/>
                                The Chief Justice leads the judicial branch of the Medolite government. As such, they have the judicial power to interpret the Constitution, the laws and treaties passed by the Parliament, and handle judicial trials of the court where they assess and protect the rights of individuals. The Chief Justice is nominated by the President and appointed by the Senate. Their term lasts until they resign or are removed by the Senate.
                            </Typography>
                            <br/>

                            {/* Geo */}
                            <Typography variant="h5">Geography</Typography>
                            <Divider/>
                            <Typography>
                                Medoles is an enclave surrounded by Canada in North America, within the United Counties of Leeds and Grenville in Ontario, and approximately 14 kilometres from the Saint-Lawrence River. The micronation is located in the Frontenac Axis region, an extension of the Canadian Shield, notable for the exposed Precambrian rocks, allowing distinct fauna and flora to flourish. The area is surrounded by the Charleston Lake in the West, East and North, which acts as a prime fishing zone for Medolites. Outside of the islands populating the lakes like Why Island, Because Island and Lion Island as part of Medoles, the mainland has a few named geographical features: Medoles Point and Buckhorn Point, both named in March 1968.
                            </Typography>
                            <br/>

                            {/* Symbols */}
                            <Typography variant="h5">Symbols</Typography>
                            <Divider/>
                            <Typography>
                                <ul>
                                    <li>
                                        <b>National flower:</b> The national flower of Medoles is the herb-robert (Geranium robertianum), a species of cranesbill that is widespread throughout the northern hemisphere and native to North America.
                                    </li>
                                    <li>
                                        <b>National animal:</b> The national animal of Medoles is the red fox (Vulpes Vulpes), a species of vulpes local to the northern hemisphere of which Medoles is a part.
                                    </li>
                                </ul>
                            </Typography>
                        </div>
                </div>
            </div>
        </>
    );
};

export default Info;

