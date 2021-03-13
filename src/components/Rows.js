import React, {useState,useEffect} from 'react'
import "./Rows.css"
import axios from "../API/axios"
import requests from "../API/Request"

const Rows = ({title,movieType}) => {

    const [movies, setmovies] = useState([])

    

    useEffect(() => {
        const tab = {
            "NetflixOriginals":requests.fetchNetflixOriginals,
            "RomanceMovies":requests.fetchRomanceMovies,
            "ComedyMovies":requests.fetchComedyMovies,
            "Documentaries":requests.fetchDocumentaries,
            "HorrorMovies":requests.fetchHorrorMovies,
            "Trending":requests.fetchTrending
        }
        async function fetchdata(){
            const request = await axios.get(tab[movieType])
            setmovies(request.data.results)
            return request
        }

        fetchdata()
    }, [])

    return (
        <div className="rows">
            <h>{title}</h>
            <div className="posters">
            {
                movies.map((movie)=>{
                    return(
                    <img alt="" src={"https://image.tmdb.org/t/p/original"+movie.poster_path}/>)
                })
            }
            </div>
            
        </div>
    )
}

export default Rows
