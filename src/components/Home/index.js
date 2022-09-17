import {Component} from 'react'

import About from '../About'

import Services from '../Services'

import Videos from '../Videos'

import ReactSlick from '../ReactSlick'

import Popup from '../Popup'

import Reviews from '../Reviews'

import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="bottom-section">
          <img
            className="pic"
            alt="pic"
            src="https://tinypic.host/images/2022/09/17/WhatsApp-Image-2022-09-17-at-4.15.33-PM.jpg"
          />
          <div className="profile">
            <h1 className="name">Akhil Chakravarthy</h1>
            <h1 className="role">CEO / Managing Director</h1>
            <h1 className="company">Techno Soft Solutions</h1>
            <div>
              <img
                className="app-logo"
                src="https://tinypic.host/images/2022/09/17/WhatsApp-Image-2022-09-17-at-5.09.12-PM.jpg"
              />
              <img
                className="app-logo"
                src="https://tinypic.host/images/2022/09/17/WhatsApp-Image-2022-09-17-at-4.59.44-PM.jpg"
              />
              <img
                className="app-logo"
                src="https://tinypic.host/images/2022/09/17/WhatsApp-Image-2022-09-17-at-4.59.44-PM-1.jpg"
              />
              <img
                className="app-logo"
                src="https://tinypic.host/images/2022/09/17/WhatsApp-Image-2022-09-17-at-5.04.45-PM.jpg"
              />
              <img
                className="app-logo"
                src="https://tinypic.host/images/2022/09/17/WhatsApp-Image-2022-09-17-at-5.03.55-PM.jpg"
              />
            </div>
          </div>
        </div>
        <div className="social-media">
          <img
            className="social"
            src="https://tinypic.host/images/2022/09/17/WhatsApp-Image-2022-09-17-at-5.19.24-PM.jpg"
          />
          <img
            className="social"
            src="https://tinypic.host/images/2022/09/17/WhatsApp-Image-2022-09-17-at-5.19.24-PM-1.jpg"
          />
          <img
            className="social"
            src="https://tinypic.host/images/2022/09/17/WhatsApp-Image-2022-09-17-at-5.19.23-PM.jpg"
          />
          <img
            className="social"
            src="https://tinypic.host/images/2022/09/17/WhatsApp-Image-2022-09-17-at-5.19.22-PM.jpg"
          />
          <Popup />
        </div>
        <About />
        <Services />
        <div className="portfolio-container">
          <p>Portfolio</p>
          <p>
            Lorem Ipsum is simply dummy text of the parinting and type settig
            industry. Lorem Ipsum has been the industry's standard dummy te ever
            since the 1500s.
          </p>
          <div className="portfolio">
            <img
              alt="logo"
              className="logo-5"
              src="https://tinypic.host/images/2022/09/17/WhatsApp-Image-2022-09-17-at-4.15.33-PM-1.jpg"
            />
            <img
              alt="logo"
              className="png"
              src="https://tinypic.host/images/2022/09/17/WhatsApp-Image-2022-09-17-at-4.15.32-PM.jpg"
            />

            <img
              alt="logo"
              className="logo-5"
              src="https://tinypic.host/images/2022/09/17/WhatsApp-Image-2022-09-17-at-4.15.32-PM-1.jpg"
            />

            <img
              alt="logo"
              className="logo-5"
              src="https://tinypic.host/images/2022/09/17/WhatsApp-Image-2022-09-17-at-4.15.31-PM.jpg"
            />

            <img
              alt="logo"
              className="logo-5"
              src="https://tinypic.host/images/2022/09/17/WhatsApp-Image-2022-09-17-at-4.15.32-PM-2.jpg"
            />
          </div>
        </div>
        <Videos />
        <h1>Clients</h1>
        <p>
          Lorem Ipsum is simply dummy text of the parinting and type settig
          industry. Lorem Ipsum has been the industry's standard dummy te ever
          since the 1500s.
        </p>
        <ReactSlick />
        <Reviews />
      </div>
    )
  }
}

export default Home
