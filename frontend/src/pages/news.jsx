import React from "react";
import useFetch from "./../components/fetchhook";
import { Link } from "react-router-dom"; 
import { colors, Typography } from '@mui/material';
import './../styles/news.css'

function News(){
    const [data] = useFetch("/articleList.json") 

    return(
        <>
            <div className="NewsPage">
                <div className="content" style={{display: "block"}}>
                    <Typography variant="h4">News</Typography>
                    <ul className="ArticleListing">
                        {data &&
                        data.map((article) => {
                            return(
                                <li key={article.id}>
                                    <Typography variant="h5"><Link key={article.id} to={`/article/${article.id}`}>Issue #{article.id}: {article.title}</Link></Typography>
                                    <Typography variant="body1">{article.content.split(".")[0]}</Typography> {/*Only grabbing the first sentence*/}
                                </li>
                            )
                        }
                    )}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default News;
