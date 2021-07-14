import { NavLink, useHistory } from 'react-router-dom';

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: '#e2e2e2',
    textDecoration: 'none',
    color: 'black',
}


function Navbar(props) {

    const history = useHistory()

    const logout = (e) => {
        e.preventDefault()
        localStorage.clear()
        window.location.reload()
        history.push('/home')
    }


    return (
        <div className={"navBar"}>
            <span>
                <h1 className="mainHeader">Rockers</h1>
                <nav>

                    <NavLink
                        className={"navBarLink"}
                        to="/home"
                        exact
                        style={link}
                        activeStyle={{
                            background: 'grey'
                        }}
                    >Home</NavLink>

                    <NavLink
                        className={"navBarLink"}
                        to="/tuner"
                        exact
                        style={link}
                        activeStyle={{
                            background: 'grey'
                        }}
                    >Tuner</NavLink>

                    <NavLink
                        className={"navBarLink"}
                        to="/profile"
                        exact
                        style={link}
                        activeStyle={{
                            background: 'grey'
                        }}
                    >My Profile</NavLink>

                    {props.userInfo.token ? null : <NavLink
                        className={"navBarLink"}
                        to="/login"
                        exact
                        style={link}
                        activeStyle={{
                            background: 'grey'
                        }}
                    >Login</NavLink>}
                    {props.userInfo.token ? <NavLink className={"navBarLink"} to="/" exact style={link} onClick={logout} activeStyle={{ background: 'grey' }}>Logout</NavLink> : null}
                </nav>
            </span>
        </div>
    )
}

export default Navbar;