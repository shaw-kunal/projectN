import { InfoOutlined, PlayArrow } from "@mui/icons-material"
import "./featured.scss"
import blood from "../../images/blood.png"
const Featured = ({ type }) => {
    return (
        <div className="featured">
            {
                type && (
                    <div className="category">
                        <span>{type === 'movie' ? "Movies" : "Series"}</span>
                        <select name="genre" id="genre">
                            <option>Genre</option>
                            <option value="action">Action</option>
                            <option value="adventure">Adventure</option>
                            <option value="animation">Animation</option>
                            <option value="comedy">Comedy</option>
                            <option value="drama">Drama</option>
                            <option value="fantasy">Fantasy</option>
                            <option value="horror">Horror</option>
                            <option value="mystery">Mystery</option>
                            <option value="romance">Romance</option>
                            <option value="science_fiction">Science Fiction</option>
                            <option value="thriller">Thriller</option>
                            <option value="western">Western</option>
                            <option value="web_series">Web Series</option>
                        </select>
                    </div>
                )
            }
            <img src="https://thumbs.dreamstime.com/z/woman-sitting-couch-cozy-room-watching-tv-dissatisfied-what-sees-screen-166236717.jpg?w=992" alt="" />
            <div className="info">
                <img src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABVo8VEpsn9S738q7DOEesFACztCJpvxnpIrpajVR5LM3hmHwsZVoHVXcdXtWjAdQ3xYmnk-J3h4heJQYBMv9Y_kyILuNO2AZy-394sDrch2S-VsamNrTmzKMTlAUbK7f_I-d9bCVie69PPapHdz7xTbfUYxJv00bDJaG6eKSd-xNntPr4QKh8A.png?r=1b2" alt="" />
                <span className="desc">
                An Interpol agent successfully tracks down the world's most wanted art thief with help from a rival thief. But nothing is as it seems as a series of double-crosses ensues.
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
                <img className="blood" src={blood} alt="" />
            </div>
        </div>
    )
}

export default Featured