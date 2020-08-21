import React from 'react'
import { Link } from 'react-router-dom';

const AlbumItem = ({ id, image, title, artist, match }) => {
    return (
        <div className="db center mw5 grow dim  br5" style={{ margin: "8px" }}>

            <Link to={`${match.url}/${id}`}>
                <img src={image} alt="album cover" />
            </Link>

            <dl className="mt2 f6 lh-copy">
                <dt className="clip">Title</dt>
                <dd className="ml0 fw9 white"><Link className="ml0 fw9 white" to={`${match.url}/${id}`}>{title}</Link> <br />
                    <dd className="gray">{artist}</dd>
                </dd>
            </dl>

        </div >
    )
}

export default AlbumItem;