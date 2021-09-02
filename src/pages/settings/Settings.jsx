import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import * as React from "react";
import Link from "react-router-dom/es/Link";

export default class Settings extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email : "",
            password: "",
            userId: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.removeLogin = this.removeLogin.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);

    }

    removeLogin() {
        localStorage.removeItem("email")
        localStorage.removeItem("password")
        window.location.reload(true);

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
          <div className="settings">
              <div className="settingsWrapper">
                  <div className="settingsTitle">
                      <span className="settingsTitleUpdate">Update Your Account</span>
                      <span className="settingsTitleDelete" onClick={this.removeLogin}>Delete Account</span>
                  </div>
                  <form className="settingsForm">
                      <label>Username</label>
                      <input type="text"  value={this.state.userId} onChange={this.handleChange3} placeholder="Name" name="name" />
                      <label>Email</label>
                      <input type="email" placeholder="shaurya@gmail.com" value={this.state.email} onChange={this.handleChange} name="email" />
                      <label>Password</label>
                      <input type="password" placeholder="Password"  value={this.state.password} onChange={this.handleChange2} name="password" />
                      <button className="settingsSubmitButton"  onClick={() => window.location.reload(false)}>
                          <Link to="/" style={{ color: '#FFF' , textDecoration: 'none'}}>
                              Update
                          </Link>
                      </button>
                  </form>
              </div>
          </div>
      );
  }

}
