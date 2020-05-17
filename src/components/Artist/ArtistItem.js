import React from 'react'
import { Link } from 'react-router-dom';

const ArtistItem = ({ id, image, artist, match }) => {
    return (
        <div className="db center mw5 grow dim br5 pa2">

            <Link to={`${match.url}/${id}`}>
                <img src={image} alt="album cover" />
            </Link>

            <dl className="mt2 f6 lh-copy">
                <dt className="clip">Title</dt>
                <dd className="ml0 fw9 white"> {artist} </dd>
            </dl>

        </div >
    )
}

export default ArtistItem;