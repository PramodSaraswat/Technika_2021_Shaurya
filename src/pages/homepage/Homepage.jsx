import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";

export default function Homepage() {
  const location = useLocation();
    console.log(location);
  return (
    <>
      <Header />
        <div id="scroll" className="demo">
            <a href="#home"><span></span>skip to content</a>
        </div>
      <div className="home" id="home">
        <Posts />
          <div className="space">
          </div>
      </div>
    </>
  );
}
