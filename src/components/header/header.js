import React, { Component } from 'react';
import logo from '../../img/logo.png'
import { ReactComponent as Search } from '../../img/search.svg'
import './header.scss'

export default class Header extends Component {
    render() {
        return (
            <div id="header">
                <img src={logo} alt="logo"/>
                <form>
                    <input type="text" placeholder="Nunca dejes de buscar" />
                    <button>
                        <Search/>
                    </button>
                </form>
            </div>
        )
    }
}
