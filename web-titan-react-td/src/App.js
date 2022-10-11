import TopSlider from './components/TopSlider'
import './App.css';
import HeaderPage from './components/header';
import Box1 from './components/box1';
import SupSlider from './components/supslider';
import Box2 from './components/box2';
import Box3 from './components/box3';
import Box4 from './components/box4';
import Box5 from './components/box5';
import Footer from './components/footer';
import FooterCopy from './components/footercopy';
import Footerct from './components/footerct';
import Event from './components/event';
import Blog from './components/blog';
import React from 'react';
import LoginModal from './pages/login'
import Clientslider from './components/clientslider';
import Box6 from './components/box6';
import Box7 from './components/box7';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      renderPage: ''
    }

    this.renderLogin = this.renderLogin.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  renderLogin() {
    this.setState({ renderPage: 'login' })
  }

  handleCloseModal() {
    this.setState({ renderPage: '' })
  }

  render() {
    let { renderPage } = this.state
    return (
      <div className="App">
        <HeaderPage renderLogin={this.renderLogin} />
        <TopSlider />
        <Box1 />
        <SupSlider />
        <Box2 />
        <Box3 />
        <Clientslider/>
        <Box7/>
        <Box6/>
        <Box4 />
        <Event />
        <Blog />
        <Box5 />
        <Footer />
        <Footerct />
        <LoginModal renderLogin={renderPage === 'login'} handleCloseModal={this.handleCloseModal} />
        <FooterCopy />
      </div>
    );
  }
}

export default App;


