import React from "react";
import useFetch from "./../components/fetchhook";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import './../styles/article.css'

function Article(){
    const params = useParams();
    const [data] = useFetch("/articleList.json") 

    //Conditional rendering
    if(!data) return <p>Loading...</p>

    //Get the article
    const article = data.find((a) => a.id == params.id)

    if(!article){
        //Article does not exist yet
        return(
        <>
            <h1>Article</h1>
            <p>This is no article {params.id}</p>
        </>
    )}

    //Convert string into HTML (mainly for the article's content)
    const articleContent = new DOMParser().parseFromString(article.content, "text/html")

    //Article exist
    return(
    <>
        <div className="article">
            <div className="content" style={{paddingBottom: "5rem"}}>
                <img src={`/ArticleThumbs/article${params.id}.png`} className="articlethumb" />
                <Typography className="articlethumbdesc"><i>{article.thumbdesc}</i></Typography>
                <Typography variant="h3">{article.title}</Typography>
                <Typography variant="body1"><i><b>Author(s): </b>{article.author}</i></Typography>
                <Typography variant="body1"><i>{article.date}</i></Typography>
                <Typography dangerouslySetInnerHTML={{__html: articleContent.body.innerHTML}}/>
            </div>
        </div>
    </>        
    )
}

export default Article;
