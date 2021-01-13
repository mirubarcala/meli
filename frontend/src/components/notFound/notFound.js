import React from 'react';
import '../../index.scss';
import { ReactComponent as SearchOff } from '../../img/search-off.svg'

const NotFound = () => {
    return (
        <div id="notFound">
            <div>
                <SearchOff/>
            </div>
            <div>
                <h1>No hay publicaciones que coincidan con tu busqueda </h1>
            </div>

        </div>
    )
}

export default NotFound