import React from 'react'
import { Link } from 'react-router-dom';

const SearchItem = ({ id,
    image,
    title,
    artist,
    getTrackInfo,
    albumId,
    artistId, }) => {

    return (
        <div className="db center mw5 grow dim br5">

            <Link to={`/player/albums/${albumId}`}>
                <img src={image} alt="album cover" />
            </Link>

            <dl className="mt2 f6 lh-copy">
                <dt className="clip">Title</dt>
                <dd className="ml0 fw9 white"><Link className="ml0 fw9 white" to={`/player/albums/${albumId}`}>{title}</Link> <br />
                    <dd className="gray b">{artist}</dd>
                </dd>
            </dl>

        </div >
    )
}



export default SearchItem;