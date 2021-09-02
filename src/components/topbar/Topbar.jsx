import { Link } from "react-router-dom";
import "./topbar.css";
export function removeLogin() {
    localStorage.removeItem("email")
    localStorage.removeItem("password")
    window.location.reload(true);

}
export default function Topbar() {
  const email = localStorage.getItem("email");
  let user;
  if(email!=null){
       user = true;
  }else {
       user = false;
  }
    return (
    <div className="top">

      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" style={{ color: '#FFF' , textDecoration: 'none'}} to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem dropdown">
              <div className="link dropbtn">
                  CHARACTERS
              </div>
                  <div className="dropdown-content">
                      <Link className="link" to="/single/sheldon">
                          SHELDON
                      </Link>
                      <Link className="link" to="/single/leonard">
                          LEONARD
                      </Link>
                      <Link className="link" to="/single/raj">
                          RAJ
                      </Link>
                      <Link className="link" to="/single/howard">
                          HOWARD
                      </Link>
                      <Link className="link" to="/single/penny">
                          PENNY
                      </Link>
                      <Link className="link" to="/single/amy">
                          AMY
                      </Link>
                      <Link className="link" to="/single/bernadette">
                          BERNADETTE
                      </Link>
                  </div>

          </li>
          <li className="topListItem">
              <Link className="link" to="/merch" style={{ color: '#FFF' , textDecoration: 'none'}}>
                  MERCHANDISE
              </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write" style={{ color: '#FFF' , textDecoration: 'none'}}>
              BLOG
            </Link>
          </li>

        </ul>
      </div>
      <div className="topRight">
        {user &&
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://www.vhv.rs/dpng/d/505-5058560_person-placeholder-image-free-hd-png-download.png"
              alt=""
            />
          </Link>
        }
          {!user &&
          <li className="topListItem">
              <Link  to="/login" style={{ color: '#FFF' , textDecoration: 'none'}}>
                  LOGIN
              </Link>
          </li>
          }


          {user &&
          <li className="topListItem" onClick={removeLogin}>LOGOUT</li>
          }
      </div>
    </div>
  );
}
