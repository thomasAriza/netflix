import React, {useState,useEffect} from 'react'
import "./Banner.css"
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddIcon from '@material-ui/icons/Add';
import axios from "../API/axios"
import requests from "../API/Request"
import MenuIcon from '@material-ui/icons/Menu';
import {IconButton } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Typewriter from "typewriter-effect"

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

    const write = (typewriter) => {
        typewriter
        .pasteString(movie.overview.slice(0,120))
        .typeString(movie.overview.slice(120,movie.overview.length-1))
        .start()
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
                <h2 className="original">{movie?.original_name}</h2>
                {/* <h2 className="bis">{movie.original_name}</h2> */}
                <div className="button">
                    <button><PlayArrowIcon/>Lecture</button>
                    <button><AddIcon/>Ma liste</button>
                </div>

                {movie.overview?
                    (<Typewriter
                    onInit={(typewriter)=>write(typewriter)}
                />):null}
                
            </div>
            <div className="fadeBottom"/>
        </div>
    )
}

export default Banner
