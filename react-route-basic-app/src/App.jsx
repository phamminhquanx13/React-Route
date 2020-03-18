import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
class App extends React.Component {
//exact giups route hoat dong khi URL trinh duyet phu hop voi gia tri thuoc tinh path cua no
//<Link> to tuong duong the <A>href trong html
//Khi bạn muốn lấy một số thông tin ở trên URL thì bạn có thể dùng đối tượng match để lấy dữ liệu về. Tại cấu hình Router ta chỉ cần truyền thêm đối tượng match vào component mà cần sử dụng đối tượng match
  render()  {
    return  (
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">CD</Link>
            </li>
            <li>
              <Link to="/contact">CT</Link>
            </li>
            <li>
              <Link to="/shop">Sh</Link>
            </li>
          </ul>
          <hr />
          <div className="main-route-place">
            <Route exact path="/" component={Home} /> 
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
            <Route path="/contact" component={Contact}/>
            <Route path="/shop/" component={Shop}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
class Home extends React.Component {
 
  render()  {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
}
class About  extends React.Component {
  render() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }
}
class Shop extends React.Component{
  render(){
    return(
      <div>Shop</div>
    )
  }
}
class Contact extends React.Component{
  render(){
    return(
      <div>
         <h2>Contact</h2>
         <ul>
           <li>
             <Link to={`${this.props.match.url}/Q1`}>Contact1</Link>
           </li>
           <li>
             <Link to={`${this.props.match.url}/Q2`}>Contact2</Link>
           </li>
         </ul>
         <div className="secondary-route-place">
          <Route
            path={`${this.props.match.url}/:topicId`}
            component={Contact1} />
          <Route
            exact
            path={this.props.match.url}
            render={() =>
              <h3>
                select Contact
              </h3>
            }
            />
        </div>
      </div>
    );
  }
}

class Contact1 extends React.Component {
  render()  {
    return (
      <div>
        <h3>
          {this.props.match.params.topicId}
        </h3>
      </div>
    );
  }
}
class Topics extends React.Component {
  render( ) {
    return (
      <div>
        <h2>CD</h2>
        <ul>
          <li>
            <Link to={`${this.props.match.url}/A`}>
              Learn with React
            </Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/B`}>Components</Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/sta-po`}>
              Props v. State
            </Link>
          </li>
        </ul>
        <div className="secondary-route-place">
          <Route
            path={`${this.props.match.url}/:topicId`}
            component={Topic} />
          <Route
            exact
            path={this.props.match.url}
            render={() =>
              <h3>
                select CD
              </h3>
            }
            />
        </div>
      </div>
    );
  }
}
class Topic extends React.Component {
  render()  {
    return (
      <div>
        <h3>
          {this.props.match.params.topicId}
        </h3>
      </div>
    );
  }
}

export default App;