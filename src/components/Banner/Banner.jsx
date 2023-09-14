import { useEffect, useState } from 'react';
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../constants/constants';
import { PlayArrow, InfoOutlined } from '@mui/icons-material'
import './Banner.css'
const Banner = () => {
    const [movie, setMovie] = useState()
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
            const index = Math.floor(Math.random() * response.data.results.length);
            // console.log(response.data.results[index]);
            setMovie(response.data.results[index])
        }).catch((err) => {
            alert(err);
        })
    }, []);

    return (
        <div
            style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ''})` }}
            className="banner">
            <div className="content">
                <h1 className="title">{movie ? movie.name || movie.title : ''}</h1>
                <h1 className="description">{movie ? movie.overview : ''}</h1>
                <div className="banner_buttons">
                    <button className="button play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="button info">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner;
