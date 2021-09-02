import "./write.css";
import * as React from "react";




export default class Write extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        titleText : "",
          titleContent: "",
          count: 0
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);

      this.handleAddOne = this.handleAddOne.bind(this);

  }
  componentDidMount(){
      const stringCount = localStorage.getItem("counter");
      const count = parseInt(stringCount, 10);

      if (!isNaN(count)) {
          this.setState(() => ({ count }));
      }
  }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem("counter", this.state.count);
        }
    }

    handleAddOne() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            };
        });
    }

    handleChange(event) {
    console.log(event.target.value)

        this.setState({titleContent: event.target.value});
        localStorage.setItem("content"+this.state.count, event.target.value);
    }

    handleChange2(event) {
        console.log(event.target.value)

        this.setState({titleText: event.target.value});
        localStorage.setItem("title"+this.state.count, event.target.value);
    }


    render(){
        const {titleText,titleContent} = this.state;
        let count = localStorage.getItem("counter");

        let posts=[]
        for(let i=0;i<count;i++){
            const title = localStorage.getItem("title"+(i))
            const content = localStorage.getItem("content"+(i))
            console.log(title,content)
            posts.push(
                <div className="card">
                    <h2>{title}</h2>
                    <p>{content}</p>
                </div>
            )
        }
        return (
            <div className="write">
                <img
                    className="writeImg"
                    src="https://wallpaperhook.com/wp-content/uploads/2020/11/The-Big-Bang-Theory-Wallpapers-1-From-WallpaperHook.com-For-Free.jpg"
                    alt=""
                />
                <form className="writeForm">
                    <div className="writeFormGroup">
                        <input
                            className="writeInput"
                            placeholder="Title"
                            type="text"
                            id="title"
                            value={titleText}
                           onChange={this.handleChange2}
                            autoFocus={true}
                        />
                    </div>
                    <div className="writeFormGroup">
          <textarea
              className="writeInput writeText"
              placeholder="Tell your story..."
              type="text"
              value={titleContent}
              onChange={this.handleChange}
              id="contentText"
              autoFocus={true}
          />
                    </div>
                    <button className="writeSubmit" type="submit" onClick={this.handleAddOne}>
                        Publish
                    </button>
                </form>
                <div className="row">
                    <div className="leftcolumn">
                        {posts}
                    </div>
                </div>
            </div>
        );
    }

}
