const Login = (props) => {



    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={(e) => props.login(e)}>
                <label>Username</label>
                <input name="username" type="text" />
                <label>Password</label>
                <input name="password" type="password" />
                <input type="submit" />
            </form>
            <h3>Not a rocker yet? <a href="http://localhost:3001/signup">Register Here</a></h3>
        </div>
    )

}

export default Login