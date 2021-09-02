import Post from "../post/Post";
import "./posts.css";
import {Link} from "react-router-dom";

export default function Posts() {
  return (
      <div className="posts">
          <div className="post">
              <img
                  className="postImg"
                  src="https://static.stacker.com/s3fs-public/styles/sar_screen_maximum_large/s3/2017-11/episodes.jpg"
                  alt=""
              />
              <div className="postInfo">

        <span className="postTitle">
              Featured Article
        </span>
                  <hr />
                  <span className="postDate">1 hour ago</span>
              </div>
              <p className="postDesc">
                  Robert Wolcott is a brilliant but reclusive topologist, noted for Wolcott's Theorem,
                  who has made great strides in his work on nonlinear time while ignoring the rest of the world.
                  Sheldon Cooper has corresponded with him over his string theory research,
                  so he has invited Sheldon to his cabin in the middle of nowhere to discuss his own breakthrough.
                  Dr. Wolcott has a new mathematical approach that would help Sheldon conceptualize the dimensions in
                  string theory; the math is saying time has multiple dimensions, the same as space. How this works in the context
                  of a singularity involves non-abelian group theory. He doesn't see where string theory fits into this,
                  and surmises that is where they can be of help to each other.
              </p>
          </div>
          <div className="post">
              <img
                  className="postImg"
                  src="https://www.denofgeek.com/wp-content/uploads/2019/05/bbt_large.jpg?resize=768%2C432"
                  alt=""
              />
              <div className="postInfo">

        <span className="postTitle">
The Big Bang Theory: The Complete Sixth Season DVD        </span>
                  <hr />
              </div>
              <p className="postDesc">
                  Whether on or above Earth, hilarity is outrageously universal in TV's most popular comedy
                  featuring four forward-thinking but socially backward geniuses. Fun discoveries multiply:
                  Leonard learns jealousy is bad for a relationship (with Penny) but science is good for seduction (of Penny)
                  . Howard finds life in the International Space Station life is no escape from terrestrial
                  turmoil between his mom and his new wife Bernadette. Raj meets someone special who may be a good match,
                  if he can keep her from fleeing mid-date. And then there's Sheldon.
                  He learns what not to say after facing harassment charges or competing for tenure
                  at work and how Dungeons & Dragons can be the icebreaker his relationship with Amy needs.
                  For those who need laughter with scientific regularity,
                  this 24-episode Season Six set of The Big Bang Theory will rock your cosmos.
              </p>
          </div>
          <div className="post">
              <img
                  className="postImg"
                  src="https://i.ytimg.com/vi/z9mUFSexdlE/maxresdefault.jpg"
                  alt=""
              />
              <div className="postInfo">

        <span className="postTitle">
The Deception Verification       </span>
                  <hr />
              </div>
              <p className="postDesc">
                  Sheldon and Penny share intimate secrets while Leonard is away at sea,
                  later, Sheldon’s feelings are crushed when Leonard returns.
                  Meanwhile, Raj gets consoled about his ex-girlfriend and Wolowitz’s relationship
                  with his mother causes an unusual threat to his masculinity,
                  on a special one hour of the seventh season premiere of THE BIG BANG THEORY Thursday,
                  Sept. 26 (8:00 – 9:01 PM, ET/PT) on the CBS Television Network. Regina King returns as Mrs. Davis,
                  the University’s Director of Employee Relations, and Kevin Sussman returns as Stuart, the comic book store owner.
              </p>
          </div>
      {/*<Post img="https://www.denofgeek.com/wp-content/uploads/2019/05/bbt_large.jpg?resize=768%2C432"/>*/}
      {/*<Post img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx3NhYxnDbm7fvj-iEEHe7vRuBfVur7zZRyg&usqp=CAU"/>*/}
        {/*<Post img="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781608876136/the-big-bang-theory-the-poster-collection-9781608876136_hr.jpg"/>*/}
        {/*<Post img="https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/The_Big_Bang_Theory_Season_7.jpg/220px-The_Big_Bang_Theory_Season_7.jpg"/>*/}
        {/*<Post img="https://cdn.vox-cdn.com/thumbor/oM4yJSfQCApCRV3VgrS-JOvi468=/0x0:3000x2234/1200x800/filters:focal(1260x877:1740x1357)/cdn.vox-cdn.com/uploads/chorus_image/image/65262220/112448_0785b2.0.jpg"/>*/}
        {/*<Post img="https://i.ytimg.com/vi/z9mUFSexdlE/maxresdefault.jpg"/>*/}
        {/*<Post img="https://hotcorn-cdn.s3.amazonaws.com/wp-content/uploads/sites/5/2018/06/13120105/The-Big-Bang.jpg"/>*/}
    </div>
  );
}
