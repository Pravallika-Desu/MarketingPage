import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeaderWithImage = () => {
  return (
    <div className="container-fluid" style={{ padding: 0 }}>
      {/* Section with Background Image and Heading */}
      <div 
        style={{ 
          position: 'relative', 
          textAlign: 'center', 
          overflow: 'hidden', 
          backgroundImage: 'url("./images/main.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',
          padding: '60px 20px',
          color: 'white',
        }}
      >
        <h1 className="slide-in" style={{ fontSize: '3rem', fontWeight: 'bold' }}>Digital Marketing</h1>
      </div>

      {/* New Section with Left Image and Right Description */}
      <div className="row" style={{ marginTop: '20px' }}>
        <div className="col-md-6">
          <img 
            src="https://trainingindelhi-17.webself.net/file/si1038063/Digital-marketing%20banner-fi15946681x500.png" 
            alt="Left Image" 
            style={{ width: '80%', height: 'auto' }}
          />
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <div style={{ textAlign: 'left' }}>
            <h2 style={{ fontSize: '1.5rem' }}>Digital Marketing</h2>
            <p style={{ fontSize: '1.25rem' }}>
              Digital Marketing is the strategic use of online channels and technologies to promote products and services. It encompasses various tactics, including search engine optimization (SEO), social media marketing, email campaigns, and content marketing, to effectively engage target audiences and drive conversions in a data-driven manner.
            </p>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div id="carouselExample" className="carousel slide" data-ride="carousel" style={{ marginTop: '40px', alignItems: 'center', position: 'relative' }}>
        {/* Custom control buttons */}
        <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev" style={{ position: 'absolute', top: '10px', left: '10px', color: 'purple', fontSize: '2rem' }}>
          &lt;
        </a>
        <a className="carousel-control-next" href="#carouselExample" role="button" data-slide="next" style={{ position: 'absolute', top: '10px', right: '10px', color: 'purple', fontSize: '2rem' }}>
          &gt;
        </a>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row g-0 align-items-center">
              <div className="col-md-6">
                <img src="./images/social.png" className="card-img" alt="Card 1" style={{ width: '80%', height: 'auto' }} />
              </div>
              <div className="col-md-6">
                <div className="card-body" style={{ textAlign: 'left', paddingLeft: '10px' }}>
                  <h5 className="card-title" style={{ fontSize: '1.5rem' }}>Social and E-Mail Marketing</h5>
                  <p className="card-text" style={{ fontSize: '1.25rem' }}>Social and Email Marketing leverages social media platforms and direct email communications to engage with target audiences, build brand awareness, and drive conversions. These channels offer cost-effective, data-driven strategies to reach customers effectively.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row g-0 align-items-center">
              <div className="col-md-6">
                <img src="./images/b2b.png" className="card-img" alt="Card 2" style={{ width: '80%', height: 'auto' }} />
              </div>
              <div className="col-md-6">
                <div className="card-body" style={{ textAlign: 'left', paddingLeft: '10px' }}>
                  <h5 className="card-title" style={{ fontSize: '1.5rem' }}>B2B Marketing</h5>
                  <p className="card-text" style={{ fontSize: '1.25rem' }}>B2B Marketing (Business-to-Business Marketing) focuses on promoting products or services from one business to another, rather than to individual consumers. This strategy involves building relationships and creating targeted marketing campaigns tailored to meet the needs of specific industries or organizations.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row g-0 align-items-center">
              <div className="col-md-6">
                <img src="./images/digital.png" className="card-img" alt="Card 3" style={{ width: '80%', height: 'auto' }} />
              </div>
              <div className="col-md-6">
                <div className="card-body" style={{ textAlign: 'left', paddingLeft: '10px' }}>
                  <h5 className="card-title" style={{ fontSize: '1.5rem' }}>Digital Marketing</h5>
                  <p className="card-text" style={{ fontSize: '1.25rem' }}>Digital Marketing encompasses a broad range of online marketing strategies aimed at promoting products or services through digital channels. It includes search engine optimization (SEO), social media marketing, content marketing, email campaigns, and online advertising, enabling businesses to grow.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive adjustments for smaller screens and animation styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .row {
            flex-direction: column; // Stack images and description in mobile view
          }
          .card {
            margin: 20px 0; // Add margin between cards for mobile
          }
        }

        /* Animation for text */
        .slide-in {
          animation: slideInFromTop 2s forwards;
          opacity: 0; /* Initial state for fade-in effect */
        }

        @keyframes slideInFromTop {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default HeaderWithImage;
