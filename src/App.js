import React, { useState, useEffect } from 'react';
import './App.css';

const COUNTERS = [
  { label: 'active buyers globally', count: 26000000 },
  { label: 'product inquiries daily', count: 400000 },
  { label: 'countries and regions represented', count: 200 },
];

const SLIDES = [
  {
    text: "Mr David runs a manufacturing company that works in this field of medical devices. With administrative and production across the country. With full respect for environment and several years' experience using IP systems that are conventional",
    image: "assets/slider-1.webp"
  },
  {
    text: "Lab Evolution is an import - export company of reagents and laboratory equipment established over a decade. Our company's team of experts (in the instrumentations and reagents market) carefully follows customers all over the world. Lab Evolution is able to offer all the most competitive and popular brands and the best quality products for your laboratory.",
    image: "assets/slider-2.webp"
  },
  {
    text: "Rupesh Kanna found himself in between jobs in 2016. He started a blog, and wrote about his past experience as a lab technician while sharing his knowledge on imaging techniques. Kanna wanted to see more diversity in the medical devices industry and specilised high-quality pigmented imaging process, so he decided to create his own product line",
    image: "assets/slider-3.webp"
  },
  {
    text: "LTA International Global Services LLC is a Florida-based export management company that sells top Medical device products from major US brands to importers and distributors around the globe. Founded in 1994 by Loyd, LTA's long-standing expertise in logistics and pricing has made it one of the most successful international trade businesses in the USA.",
    image: "https://1mdm.com/about/assets/slider-4.webp"
  }
];

const TABS = [
  {
    id: 'home',
    label: 'Custom storefront',
    title: 'Set up a store that showcases your brand',
    content: 'Differentiate yourself from the competition with a full store dedicated to your products- no coding or design skills necessary!',
    image: 'https://1mdm.com/about/assets/1mdm-product-1.png'
  },
  {
    id: 'profile',
    label: 'Advertising tools',
    title: 'Increase exposure by up to 120% with a suite of smart advertising tools.',
    content: 'Get your products placed in the right spots to be noticed by the exact audience you are targeting.',
    image: 'https://1mdm.com/about/assets/1mdm-product-image-4.png'
  },
  {
    id: 'messages',
    label: 'Data and analytics',
    title: 'Optimize your every move with in-depth data and customer insights',
    content: 'Improve performance with dashboards detailing product exposure, click volume, spend, average cost, store visits, and more.!',
    image: 'https://1mdm.com/about/assets/1mdm-product-2.png'
  },
  {
    id: 'settings',
    label: 'Customers support',
    title: 'Know you\'re supported throughout your journey',
    content: 'From onboarding help to online chats to local support during business hours and account optimization tips -- we\'re here for you',
    image: 'https://1mdm.com/about/assets/1mdm-product-3.png'
  }
];

function App() {
  const [counterValues, setCounterValues] = useState(COUNTERS.map(() => 0));
  const [activeTab, setActiveTab] = useState('home');
  const [currentSlide, setCurrentSlide] = useState(0);

  // Counter animation effect (React way)
  useEffect(() => {
    const duration = 6000;
    const startTime = Date.now();
    const startValues = COUNTERS.map(() => 0);
    const endValues = COUNTERS.map(c => c.count);
    let animationFrame;
    function animate() {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const newValues = endValues.map((end, i) => Math.floor(startValues[i] + (end - startValues[i]) * progress));
      setCounterValues(newValues);
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    }
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <div className="App">
      {/* Top Section */}
      <section className="top-section">
        <div className="container top-bar">
          <div className="left-bar">
            <span id="top-text">World's Largest Medical Equipment Market Place</span>
          </div>
          <div className="right-bar">
            <a href="https://1mdm.com/index.php?route=account/account"><span>My account |</span></a>
            <a href="contact.php"><span>Contact Us</span></a>
          </div>
        </div>
      </section>
      {/* Navigation */}
      <section className="menubar sticky-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
              <a href="https://1mdm.com/" target="_blank" rel="noopener noreferrer">
                <img className="logo" src="https://1mdm.com/about/assets/1mdm-168x58.png" alt="1MDM logo" />
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link" href="index.php">About Us</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="our-story.php">Our Story</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="seller.php">Sell on 1MDM</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="pricing.php">Pricing</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </section>
      {/* Banner Section */}
      <section className="banner-img">
        <div className="container banner">
          <div className="row align-items-center">
            <div className="col-md-6 banner-text">
              <h4>Sell on 1mdm.com</h4>
              <h1 id="heading">Reach millions of B2B buyers globally</h1>
              <div className="banner-btn">
                <a href="pricing.php">
                  <button id="header-banner-text" className="btn btn-danger">Start selling</button>
                </a>
                <a href="https://wa.me/+919820045154" target="_blank" rel="noopener noreferrer">
                  <button id="btn-header-line" className="btn btn-light">Chat with consultant</button>
                </a>
              </div>
            </div>
            <div className="col">
              <div className="float-end">
                {COUNTERS.map((counter, i) => (
                  <React.Fragment key={counter.label}>
                    <h3 className="counter">{counterValues[i].toLocaleString()}</h3>
                    <p>{counter.label}</p>
                    <br />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Banner Bottom Section */}
      <section>
        <div className="container banner-bottom">
          <h2 className="banner-heading">1mdm.com is a leading ecommerce platform that <br /> helps SMEs go global</h2>
          <br />
          <br />
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="ratio ratio-16x9">
                <iframe src="https://www.youtube.com/embed/TN7iJyc5Uks" title="YouTube video" allowFullScreen></iframe>
              </div>
              <br />
            </div>
            <div className="col">
              <p className="para">Connect with millions of business buyers from around the world.</p>
              <br />
              <p className="para">Get the tools and know-how to build a successful ecommerce presence for your business.</p>
              <br />
              <p className="para">Pocket more from each sale, with take rates as low as 0% in some cases.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Check Section */}
      <section className="check">
        <h1>Largest number of products & categories of <br />medical devices on a single place - 1mdm.com</h1>
        <br />
        <h5>Connect with buyers worldwide for your product & <br /> start selling now.</h5>
      </section>
      {/* Tabs Section */}
      <section className="tabs">
        <h2 style={{ color: '#a10005' }}>Grow your business with a suite of tools built for you</h2>
        <br /><br /><br />
        <div className="container">
          <div className="row tabs">
            <div className="col-2">
              <div className="list-group" id="list-tab" role="tablist">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    className={`list-group-item list-group-item-action${activeTab === tab.id ? ' active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <br /><br />
            </div>
            <div className="col-md-10">
              <div className="tab-content">
                {TABS.map((tab) => (
                  <div
                    key={tab.id}
                    className={`tab-pane fade${activeTab === tab.id ? ' show active' : ''}`}
                  >
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-md-6">
                          <h1>{tab.title}</h1>
                          <br />
                          <p>{tab.content}</p>
                        </div>
                        <div className="col-md-6">
                          <img src={tab.image} className="img-fluid" alt="1mdm-product" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Slider Section */}
      <section className="slider">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <h2 className="slider-heading">Success stories from 1mdm.com sellers</h2>
          <br /><br />
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container slider-content">
                <div className="row align-items-center">
                  <div className="col-md-5 slider-left">
                    <i className="bi bi-quote"></i>
                    <p className="para">{SLIDES[currentSlide].text}</p>
                  </div>
                  <div className="col-md-7 slider-right">
                    <img src={SLIDES[currentSlide].image} className="img-fluid" alt="1mdm-product" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" onClick={prevSlide}>
            <i className="bi bi-arrow-left-circle-fill"></i>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" onClick={nextSlide}>
            <i className="bi bi-arrow-right-circle-fill"></i>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      {/* Footer Banner */}
      <section className="footer-banner">
        <h2 className="footer-text">Ready to Grow Your Business?</h2>
        <div className="footer-btn">
          <a href="pricing.php">
            <button id="footer-btn-red" className="btn btn-light btn-lg" style={{ color: '#e60008' }}>Start selling</button>
          </a>
          <br />
          <a href="https://wa.me/+919820045154" target="_blank" rel="noopener noreferrer">
            <button style={{ color: '#ffffff' }} className="btn btn-outline-light btn-lg">Chat with consultant</button>
          </a>
          <br />
        </div>
      </section>
      {/* Footer Section */}
      <section className="footer-section">
        <div className="container footer">
          <div className="logo-section">
            <img className="logo" src="assets/logo-white.png" alt="1mdm" />
            <br />
            <p className="footer-link"><br />One Medical Devices<br /> Market Place</p>
          </div>
          <br />
          <div className="link-section">
            <h5>Platform</h5>
            <br />
            <a href="seller.php"><p className="footer-link">Sell on 1MDM </p></a>
            <a href="pricing.php"><p className="footer-link">Pricing </p></a>
            <a href="index.php"><p className="footer-link">About Us </p></a>
            <a href="our-story.php"><p className="footer-link">Our Story </p></a>
            <a href="https://superlabs.co/careers.php" target="_blank" rel="noopener noreferrer"><p className="footer-link">Careers </p></a>
            <a href="https://1mdm.com/index.php?route=extension/maza/blog/home"><p className="footer-link">Blog </p></a>
            <a href="https://1mdm.com/index.php?route=product/manufacturer"><p className="footer-link">Brands </p></a>
          </div>
          <div className="link-section">
            <h5>Press Room</h5>
            <br />
            <a href="press.php"><p className="footer-link">Images & B-roll</p></a>
            <br />
            <h5>Policies</h5>
            <br />
            <a href="https://1mdm.com/terms-of-service"><p className="footer-link">Terms of Service</p></a>
            <a href="https://1mdm.com/privacy-policy"><p className="footer-link">Privacy Policy </p></a>
            <a href="https://1mdm.com/delivery-information"><p className="footer-link">Delivery Information</p></a>
          </div>
          <br />
          <div className="contact-section">
            <h5>Reach Us</h5>
            <br />
            <a href="https://1mdm.com/corporate-information"><p className="footer-link">Corporate Information</p></a>
            <a href="contact.php"><p className="footer-link">Contact Us </p></a>
          </div>
          <br />
        </div>
      </section>
      {/* Floating Buttons */}
      <a id="float-icon-1" href="pricing.php" className="float-1">
        <p><i className="bi bi-cart-check"></i> Start Selling</p>
      </a>
      <a id="float-icon-1" href="https://wa.me/+919943005109" target="_blank" rel="noopener noreferrer" className="float">
        <p><i className="bi bi-headset"></i> Customer Service</p>
      </a>
      {/* Copyright */}
      <section className="copyright">
        <br />
        <p className="text-black">&copy; {new Date().getFullYear()} 1MDM ⚡ by <a href="https://www.superlabs.co" target="_blank" rel="noopener noreferrer">SuperLabs</a> </p>
      </section>
    </div>
  );
}

export default App;