import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SideFooter from '../components/SideFooter';

import heroImage from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import Gallery from '../components/Gallery';
import ContactForm from '../components/ContactForm';
import { Link } from 'gatsby';

const img_set_1 = [
  {
    src: require('../assets/images/gallery/fulls/01.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/01.jpg'),
    title: 'Great Sky',
    desc: 'Be one with the Universe',
    full: true,
  },
  {
    src: require('../assets/images/gallery/fulls/02.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/02.jpg'),
    title: 'High Mountains',
    desc: 'Be one with the mountains',
  },
  {
    src: require('../assets/images/gallery/fulls/03.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/03.jpg'),
    title: 'Any time ',
    desc: 'Be one with the time',
  },
  {
    src: require('../assets/images/gallery/fulls/04.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/04.jpg'),
    title: 'Any source of light',
    desc: 'Be one with the light',
    full: true,
  },
];
const img_set_2 = [
  {
    src: require('../assets/images/gallery/fulls/05.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/05.jpg'),
    title: 'Any Curiosity',
    desc: 'Be one with the curiosity',
    full: true,
  },
  {
    src: require('../assets/images/gallery/fulls/06.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/06.jpg'),
    title: 'Any source of enlightenment',
    desc: 'Be one with the soul',
  },
  {
    src: require('../assets/images/gallery/fulls/07.jpg'),
    thumbnail: require('../assets/images/gallery/thumbs/07.jpg'),
    title: 'Be in present',
    desc: 'Be one with the present',
  },
];

const IndexPage = () => (
  <Layout>
    <div id="wrapper">
      <section className="intro">
        <Header />
        <div className="content">
          <span className="image fill" data-position="center">
            <img src={heroImage} alt="" />
          </span>
        </div>
      </section>

      <section id="first">
        <header>
          <h2>About Me</h2>
        </header>
        <div className="content">
          <p>
            <strong>Lorem ipsum dolor</strong> sit amet consectetur adipiscing
            elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos. Etiam
            tristique libero eu nibh porttitor amet fermentum. Nullam venenatis
            erat id vehicula ultrices sed ultricies condimentum. Magna sed etiam
            consequat, et lorem adipiscing sed nulla. Volutpat nisl et tempus et
            dolor libero, feugiat magna tempus, sed et lorem adipiscing.
          </p>
          <span className="image main">
            <img src={pic2} alt="" />
          </span>
        </div>
      </section>

      <section>
        <header>
          <h2>My Skills</h2>
        </header>
        <div className="content">
          <p>
            <strong>Etiam tristique libero</strong> eu nibh porttitor amet
            fermentum. Nullam venenatis erat id vehicula ultrices sed ultricies
            condimentum.
          </p>
          <ul className="feature-icons">
            <li className="icon fa-laptop">Python</li>
            <li className="icon fa-bolt">C++</li>
            <li className="icon fa-signal">Django</li>
            <li className="icon fa-gear">Vue</li>
            <li className="icon fa-address-card">React</li>
            <li className="icon fa-code">Azure</li>
          </ul>
          <p>
            Vehicula ultrices sed ultricies condimentum. Magna sed etiam
            consequat, et lorem adipiscing sed nulla. Volutpat nisl et tempus et
            dolor libero, feugiat magna tempus, sed et lorem adipiscing.
          </p>
        </div>
      </section>

      <section>
        <header>
          <h2>My Projects</h2>
        </header>
        <div className="content">
          <section>
            <header>
              <h3>Django E-commerce Website</h3>
              <p>
              The website displays products. Users can add and remove products to/from their cart while 
              also specifying the quantity of each item. They can then enter their address and choose Stripe 
              to handle the payment processing.
              <FontAwesomeIcon icon={['fab', 'fa-react']} size="7x" />
              </p>
              <a href="https://github.com/Roshan-Thomas/Django-Ecommerce-Website">Link to Github Repository</a>
              {/* TODO: Add github icon to the link */}
            </header>
            <div className="content">
              <Gallery images={img_set_1} />
            </div>
          </section>

          <section>
            <header>
              <h3>Weather App (Vue.js)</h3>
              <p>
              The app is a weather application, which shows the temperature of different cities and 
              countries around the world. Depending on the temperature, the background image changes 
              from cold to hot. This gives a visual aid to the user. For this project, I used the 
              OpenWeatherMap API, to find the live weather forcast.
              </p>
              <a href="https://github.com/Roshan-Thomas/vue-weather-app">Link to Github Repository</a>
              {/* TODO: Add github icon to the link */}
            </header>
            <div className="content">
              <div className="gallery">
                <Gallery images={img_set_2} />
              </div>
            </div>
          </section>

        </div>
      </section>

      <section>
        <ContactForm />
        <SideFooter />
      </section>

      <Footer />
    </div>
  </Layout>
);

export default IndexPage;
