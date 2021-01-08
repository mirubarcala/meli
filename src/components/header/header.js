import React, { useState, useRef, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { ReactComponent as Search } from '../../img/search.svg'
import logo from '../../img/logo.png'

import './header.scss'

const Header = (props) => {

    const inputSearchRef = useRef();

    const query = new URLSearchParams(props.location.search);
    const search = query.get('search');

    let initValue = search || '';

    const [inputSearch, setInputSearch] = useState('');
    
    useEffect(() => {
        setInputSearch(initValue);
        inputSearchRef.current.focus();
    }, [setInputSearch, initValue]);

    const inputChangeHandler = (e) => {
        setInputSearch(e.target.value);
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        if(inputSearch) {
            props.history.push(`/items?search=${inputSearch}`);
        }
    }
    return (
        <div id="header">
            <img src={logo} alt="logo"/>
            <form onSubmit={formSubmitHandler}>
                <input
                    type="text"
                    placeholder="Nunca dejes de buscar"
                    onChange={inputChangeHandler}
                    value={inputSearch}
                    ref={inputSearchRef}
                />
                <button>
                    <Search/>
                </button>
            </form>
        </div>
    );
}

export default withRouter(Header);

/* import React, { Component } from 'react';
import logo from '../../img/logo.png'
import { ReactComponent as Search } from '../../img/search.svg'
import './header.scss'

export default class Header extends Component {
    render() {
        return (
            <div id="header">
                <img src={logo} alt="logo"/>
                <form>
                    <input 
                        type="text" 
                        placeholder="Nunca dejes de buscar" 
                        />
                    <button>
                        <Search/>
                    </button>
                </form>
            </div>
        )
    }
}
 */