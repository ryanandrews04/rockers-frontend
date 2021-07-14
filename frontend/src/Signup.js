import { useHistory } from 'react-router-dom'

function Signup() {

    let signup = (e) => {
        e.preventDefault()

        fetch("http://localhost:3000/api/v1/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: e.target[0].value,
                password: e.target[1].value
            })
        })
            .then(res => res.json())
            .then(console.log)
    }

    const history = useHistory()

    const signupHandler = (e) => {
        e.preventDefault()
        signup(e)
        history.push('/login')
    }


    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={(e) => signupHandler(e)}>
                <label>Username</label>
                <input name="username" type="text" />
                <label>Password</label>
                <input name="password" type="password" />
                <input type="submit" />
            </form>
        </div>)

}

export default Signup