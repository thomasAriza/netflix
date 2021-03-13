import React, {useState,useEffect} from 'react'
import "./Banner.css"
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddIcon from '@material-ui/icons/Add';
import axios from "../API/axios"
import requests from "../API/Request"
import MenuIcon from '@material-ui/icons/Menu';
import {IconButton } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const Banner = () => {

    const [movie, setmovie] = useState([])
    
    useEffect(() => {
        async function fetchdata() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setmovie(request.data.results[Math.floor(Math.random()*request.data.results.length-1)])
            return request
        }

        fetchdata()
    }, [])

    console.log(movie)

    const onMouseEnter = (e) => {
        e.target.style.backgroundColor="white"
        e.target.style.color="black"
    }

    const onMouseLeave = (e) => {
        e.target.style.backgroundColor="gray"
        e.target.style.color="white"
    }

    return (
        <div className="banner" style={{backgroundImage:`url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`}}>
            <div className="header">
                <div className="header_left">
                    <IconButton><MenuIcon className="icon"/></IconButton>
                    <img alt="" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"/> 
                </div>
                <IconButton><MoreHorizIcon className="icon"/></IconButton>
                
            </div>
            {/* <img alt="" src={"https://image.tmdb.org/t/p/original"+movie.backdrop_path}/> */}
            <div className="movie_infos">
                <h2>{movie.original_name}</h2>

                <div className="button">
                    <button onMouseEnter={(e)=>onMouseEnter(e)} onMouseLeave={(e)=>onMouseLeave(e)}><PlayArrowIcon/>Lecture</button>
                    <button onMouseEnter={(e)=>onMouseEnter(e)} onMouseLeave={(e)=>onMouseLeave(e)}><AddIcon/>Ma liste</button>
                </div>
                
                <h>{movie.overview}</h>
                
            </div>
            <div className="fadeBottom"/>
        </div>
    )
}

export default Banner
