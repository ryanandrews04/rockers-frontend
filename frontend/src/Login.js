import { useHistory } from "react-router-dom";
import { useEffect } from "react"

function Login(props) {


    const history = useHistory()

    const loginHandler = (e) => {
        e.preventDefault();
        props.login(e)
    }



    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={loginHandler}>
                <label>Username</label>
                <input name="username" type="text" />
                <label>Password</label>
                <input name="password" type="password" />
                <input type="submit" />

            </form>
            {props.userInfo.token ? <h3>Successful login!</h3> : null}
            {props.userInfo.token ? null : <h3>Not a rocker yet? <a href="http://localhost:3001/signup">Register Here</a></h3>}
        </div>
    )

}


export default Login