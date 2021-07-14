import { NavLink, useHistory } from 'react-router-dom';

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'lightgrey',
    textDecoration: 'none',
    color: 'white',
    borderRadius: '0 px',


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
                        to="/profile"
                        exact
                        style={link}
                        activeStyle={{
                            background: 'grey'
                        }}
                    >My Profile</NavLink>

                    {props.userInfo.token ? null : <NavLink
                        to="/login"
                        exact
                        style={link}
                        activeStyle={{
                            background: 'grey'
                        }}
                    >Login</NavLink>}
                    {props.userInfo.token ? <button style={link} onClick={logout}>Logout</button> : null}
                </nav>
            </span>
        </div>
    )
}

export default Navbar;