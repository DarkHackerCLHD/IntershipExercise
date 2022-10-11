import React from 'react';
import logo from './logo-white.png';




export default class HeaderPage extends React.Component {
  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
  }
  componentDidMount() {
    window.addEventListener(' scroll ', this.handleScroll())
  }
  componentWillUnmount() {
    window.removeEventListener(' scroll ', this.handleScroll())
  }
  handleScroll() {
    document.addEventListener("scroll", function (e) {
      // Change header background
      changeHeader()
    })

    function changeHeader() {
      let mainHeader = document.getElementById("main-header")
      if (mainHeader) {
        if (window.scrollY > 0) {
          if (!mainHeader.classList.contains("scroll")) {
            mainHeader.classList.add("scroll")
          }
        } else {
          mainHeader.classList.remove("scroll")
        }
      }
    }
  }
  render() {

    return (
      <div className="main-header" id="main-header">
        <a href="http://localhost:3000/" className="logo"><img src={logo} alt="" /></a>
        <ul>
          <li><a href="http://localhost:3000/">Home</a></li>
          <li><a onClick={this.props.renderLogin} href="#">Login</a></li>
          <li><a href="#" id="link-change-language">日本</a></li>
          <li><button id="btn-menu" className="btn-menu"></button></li>
        </ul>
      </div>
    );
  }
}
