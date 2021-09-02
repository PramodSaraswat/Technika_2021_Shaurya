import "./login.css";
import Link from "react-router-dom/es/Link";
import * as React from "react";

export default class Login extends React.Component  {
    constructor(props){
        super(props);
        this.state = {
            email : "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);

    }

    handleChange(event) {
        console.log(event.target.value)

        this.setState({email: event.target.value});
        localStorage.setItem("email", event.target.value);
    }

    handleChange2(event) {
        console.log(event.target.value)

        this.setState({password: event.target.value});
        localStorage.setItem("password", event.target.value);
    }

    render(){
        const {email, password} =this.state;
        return (
            <div className="login">
                <span className="loginTitle">Login</span>
                <form className="loginForm">
                    <label>Email</label>
                    <input className="loginInput" id="email" type="text" value={email} onChange={this.handleChange} placeholder="Enter your email..." />
                    <label>Password</label>
                    <input className="loginInput" id="pass" type="password" value={password} onChange={this.handleChange2} placeholder="Enter your password..." />
                    <button className="loginButton" onClick={() => window.location.reload(false)}>
                        <Link to="/" style={{ color: '#FFF' , textDecoration: 'none'}}>
                            Login
                        </Link>

                    </button>
                </form>
                <button className="loginRegisterButton" >
                    <Link to="/register" style={{ color: '#FFF' , textDecoration: 'none'}}>
                        Register
                    </Link>
                </button>
            </div>
        );
    }

}
