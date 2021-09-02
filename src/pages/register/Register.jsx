import "./register.css"
import Link from "react-router-dom/es/Link";
import * as React from "react";

export default class Register extends  React.Component{
    constructor(props){
        super(props);
        this.state = {
            email : "",
            password: "",
            userId: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);

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

    handleChange3(event) {
        console.log(event.target.value)

        this.setState({userId: event.target.value});
        localStorage.setItem("user", event.target.value);
    }

    render(){
        return (

            <div className="register">
                <span className="registerTitle">Register</span>
                <form className="registerForm">
                    <label>Username</label>
                    <input className="registerInput" value={this.state.userId} onChange={this.handleChange3} type="text" placeholder="Enter your username..." />
                    <label>Email</label>
                    <input className="registerInput" value={this.state.email} onChange={this.handleChange} type="text" placeholder="Enter your email..." />
                    <label>Password</label>
                    <input className="registerInput" value={this.state.password} onChange={this.handleChange2} type="password" placeholder="Enter your password..." />
                    <button className="registerButton" onClick={() => window.location.reload(false)}>
                        <Link to="/" style={{ color: '#FFF' , textDecoration: 'none'}}>
                            Register
                        </Link>
                    </button>
                </form>
                <button className="registerLoginButton">
                    <Link to="/login" style={{ color: '#FFF' , textDecoration: 'none'}}>
                        Login
                    </Link>
                </button>
            </div>
        );
    }

}
