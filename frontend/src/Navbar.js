import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'lightgrey',
    textDecoration: 'none',
    color: 'white',
    borderRadius: '0 px',

}


class Navbar extends React.Component {

    render() {
        return (
            <div className={"navBar"}>
                <span>
                    <h1 className="mainHeader">Rockers</h1>
                    <nav>

                        <NavLink
                            to="/home"
                            exact
                            style={link}
                            activeStyle={{
                                background: 'grey'
                            }}
                        >Home</NavLink>

                        <NavLink
                            to="/tuner"
                            exact
                            style={link}
                            activeStyle={{
                                background: 'grey'
                            }}
                        >Tuner</NavLink>

                        <NavLink
                            to="/login"
                            exact
                            style={link}
                            activeStyle={{
                                background: 'grey'
                            }}
                        >Login</NavLink>
                    </nav>
                </span>
            </div>
        )
    }
}
export default Navbar;