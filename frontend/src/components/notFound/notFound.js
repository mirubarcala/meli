import React from 'react';
import './notFound.scss';
import { ReactComponent as SearchOff } from '../../img/search-off.svg'

const NotFound = () => {
    return (
        <div id="notFound">
            <div>
                <SearchOff/>
            </div>
            <div>
                <h1>No hay publicaciones que coincidan con tu búsqueda. </h1>
                <ul>
                    <li>
                        Revisá la ortografía de la palabra.
                    </li>
                    <li>
                         Utilizá palabras más genéricas o menos palabras.
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default NotFound