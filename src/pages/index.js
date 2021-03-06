import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';

import heroImage from '../assets/images/hero.png';
import pic2 from '../assets/images/about-me-pic.png';
import Gallery from '../components/Gallery';


const img_set_1 = [
  {
    src: require('../assets/images/gallery/fulls/01.png'),
    thumbnail: require('../assets/images/gallery/fulls/01.png'),
    title: 'Landing Page',
    desc: 'Landing Page for ecommerce website',
    full: true,
  },
  {
    src: require('../assets/images/gallery/fulls/02.png'),
    thumbnail: require('../assets/images/gallery/fulls/02.png'),
    title: 'Product Page',
    desc: 'Landing Page for ecommerce website',
    full: true,
  },
  {
    src: require('../assets/images/gallery/fulls/03.png'),
    thumbnail: require('../assets/images/gallery/fulls/03.png'),
    title: 'Admin Page ',
    desc: 'Admin Page  for ecommerce website',
    full: true,
  },
];
const img_set_2 = [
  {
    src: require('../assets/images/gallery/fulls/07.png'),
    thumbnail: require('../assets/images/gallery/fulls/07.png'),
    title: 'Any Curiosity',
    desc: 'Be one with the curiosity',
    full: true,
  },
  {
    src: require('../assets/images/gallery/fulls/08.png'),
    thumbnail: require('../assets/images/gallery/fulls/08.png'),
    title: 'Any source of enlightenment',
    desc: 'Be one with the soul',
    full: true,
  },
];
const img_set_3 = [
  {
    src: require('../assets/images/gallery/fulls/09.jpeg'),
    thumbnail: require('../assets/images/gallery/fulls/09.jpeg'),
    title: 'Landing Page',
    desc: 'Landing Page',
    full: true,
  },
  {
    src: require('../assets/images/gallery/fulls/10.jpeg'),
    thumbnail: require('../assets/images/gallery/fulls/10.jpeg'),
    title: 'Sample news page',
    desc: 'Sample news page',
    full: true,
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
          I am a sophomore at <strong>Texas A&M University at Qatar</strong>. My major is  
          <strong><i> Electrical Engineer and Computer Science</i></strong>. 
          I am very passionate about programming. I have a wide array of skills, including web designing, 
          prototyping, and full-stack app development. 
          </p>
          <p>
          My aim is to become an <b>entrepreneur</b> and help people and create a program
          that will make their lives easier. In this day and age, there are so many ideas, 
          but to make that a reality is complicated. I want to be a part of a dream which 
          will revolutionize how people live on this earth. 
          <strong> I want to transform ideas to realities. </strong>
          </p>
          <span className="image main">
            <img src={pic2} alt="" />
          </span>
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
              also specifying the quantity of each item. 
              </p>
              <p>
              They can then enter their address and choose Stripe 
              to handle the payment processing.
              </p>
              <a href="https://github.com/Roshan-Thomas/Django-Ecommerce-Website" className="icon fa-github" target="_blank" rel="noreferrer"> 
                <b> Link to Github Repository</b>
              </a>
            </header>
            <div className="content">
              <p><strong>Click on the images to enlarge them</strong></p>
              {/* TODO: Rezise the images to fit in thumbnail views */}
              <Gallery images={img_set_1} />
              <br></br>
              <p>Check out the github repo to see more screenshots</p>
              <a href="https://github.com/Roshan-Thomas/Django-Ecommerce-Website" className="icon fa-github" target="_blank" rel="noreferrer"> 
                <b> Link to Github Repository</b>
              </a>
            </div>
          </section>
          <hr></hr>
          <section>
            <header>
              <h3>Weather App (Vue.js)</h3>
              <p>
              The app is a weather application, which shows the temperature of different cities and 
              countries around the world. Depending on the temperature, the background image changes 
              from cold to hot. This gives a visual aid to the user. 
              </p>
              <p>
              For this project, I used the 
              OpenWeatherMap API, to find the live weather forcast.
              </p>
              <a href="https://github.com/Roshan-Thomas/vue-weather-app" className="icon fa-github" target="_blank" rel="noreferrer"> 
                <b> Link to Github Repository</b>
              </a>
            </header>
            <div className="content">
              <div className="gallery">
                <p><strong>Click on the images to enlarge them</strong></p>
                {/* TODO: Rezise the images to fit in thumbnail views */}
                <Gallery images={img_set_2} />
                <a href="https://github.com/Roshan-Thomas/vue-weather-app" className="icon fa-github" target="_blank" rel="noreferrer"> 
                  <b> Link to Github Repository</b>
                </a>
              </div>
            </div>
          </section>
          <hr></hr>
          <section>
            <header>
              <h3>Voice Controlled News Reader (React.js)</h3>
              <p>
              The app allows you to read the news from anywhere on the internet, from multiple 
              newspapers. The most important feature about the app is that you dont even have 
              to touch the mouse to get the news.
              </p>
              <p>
              Everything is activated by voice, and Alan the AI will deliver the latest news, 
              delivers news based on different categories, delives news based on different 
              topics and gives the headlines from the top newspapers in the world.
              </p>
              <a href="https://github.com/Roshan-Thomas/React-Voice-Controlled-News-Reader" className="icon fa-github" target="_blank" rel="noreferrer"> 
                <b> Link to Github Repository</b>
              </a>
            </header>
            <div className="content">
              <div className="gallery">
                <p><strong>Click on the images to enlarge them</strong></p>
                {/* TODO: Rezise the images to fit in thumbnail views */}
                <Gallery images={img_set_3} />
                <a href="https://github.com/Roshan-Thomas/React-Voice-Controlled-News-Reader" className="icon fa-github" target="_blank" rel="noreferrer"> 
                  <b> Link to Github Repository</b>
                </a>
              </div>
            </div>
          </section>

        </div>
      </section>

      {/* <section>
        <ContactForm />
        <SideFooter />
      </section> */}

      <Footer />
    </div>
  </Layout>
);

export default IndexPage;
