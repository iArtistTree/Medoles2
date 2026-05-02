import { Routes, Route, Link} from 'react-router-dom';

//Pages
import HomePage from '../pages/home.jsx';
import InfoPage from '../pages/info.jsx';
import NewsPage from '../pages/news.jsx';
import ArticlePage from '../pages/article.jsx';
import NotFoundPage from '../pages/notfound.jsx';
import ApplicationPage from '../pages/application.jsx';
import './../styles/nav.css'
import Medolesflag from './../assets/country/flag.png'
import { Typography, Button, IconButton } from '@mui/material';
import { Home, Info, Newspaper, Person, Brightness4 } from '@mui/icons-material';
import { useContext } from 'react';
import { ThemeContext } from './../context/ThemeContext.jsx';

function RouteComponent(){
    const {darkTheme, setDarkTheme} = useContext(ThemeContext)
    const HandleTheme = () => {
        
    }

    return(
        <>
            <nav className='navbar'>
                {/*Logo + title*/}
                <img src={Medolesflag} className='logo'/>
                <div className='title'>
                    <Typography variant='h3' fontWeight={700}>Medoles</Typography>
                </div>

                {/*Links*/}
                <ul>
                    <li>
                        <Link to="/">
                            <Typography variant='h4'><Home/> Home</Typography>
                        </Link>
                    </li>
                    <li>
                        <Link to="/info">
                            <Typography variant='h4'><Info/> Info</Typography>
                        </Link>
                    </li>
                    <li>
                        <Link to="/news">
                            <Typography variant='h4'><Newspaper/> News</Typography>
                        </Link>
                    </li>
                </ul>
                
                {/*Become citizen button*/}
                <div>
                    <IconButton sx={{color: 'white'}} onClick={() => setDarkTheme(!darkTheme)}><Brightness4/></IconButton>
                </div>
                <div className='citizenButton'>
                    <Link to="/application">
                        <Button variant="contained" sx={{backgroundColor: "white", color: "var(--color-primary)"}} startIcon={<Person/>}>Become a citizen today</Button>
                    </Link>
                </div>
            </nav>
            <Routes>
                <Route path= "/" element = {<HomePage/>}/>
                <Route path="/info" element = {<InfoPage/>}/>
                <Route path="/news" element = {<NewsPage/>}/>
                <Route path="/article/:id" element = {<ArticlePage/>}/>
                <Route path="/application" element={<ApplicationPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </>
    )
}

export default RouteComponent;