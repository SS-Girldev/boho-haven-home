import glassBuildingsBg from "@/assets/glass-buildings-bg.jpg";

const Index = () => {
  return (
    <>
      <style>
        {`
          @keyframes backgroundZoom {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-100px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(100px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          .background-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url(${glassBuildingsBg});
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            background-repeat: no-repeat;
            opacity: 0.7;
            z-index: -1;
            animation: backgroundZoom 8s ease-in-out infinite;
          }
          
          .slide-in-left {
            animation: slideInLeft 0.8s ease-out;
          }
          
          .slide-in-right {
            animation: slideInRight 0.8s ease-out;
          }
          
          .section-container {
            width: 80%;
            margin: 40px auto;
            border-radius: 20px;
          }
          
          .footer-text {
            color: rgba(255, 255, 255, 0.8) !important;
            font-family: 'Georgia', serif;
          }
          
          .footer-heading {
            color: rgba(255, 255, 255, 0.9) !important;
            font-family: 'Georgia', serif;
            font-weight: 600;
          }
        `}
      </style>
      
      <div className="background-container"></div>
      
      <div style={{
        minHeight: '100vh',
        fontFamily: "'Inter', sans-serif",
        position: 'relative'
      }}>
        {/* Header */}
        <nav className="navbar navbar-expand-lg fixed-top" style={{
          background: 'rgba(52, 211, 153, 0.1)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(52, 211, 153, 0.2)',
          zIndex: 1000
        }}>
          <div className="container-fluid px-4">
            <a className="navbar-brand d-flex align-items-center" href="#" style={{
              color: '#065f46',
              fontWeight: 'bold',
              fontSize: '1.5rem'
            }}>
              <img src="/lovable-uploads/8e03d3f1-a556-4732-a40e-52d5d2766f20.png" alt="CBD Punjab" style={{
                height: '40px',
                marginRight: '10px'
              }} />
              CBD Punjab
            </a>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" style={{
              border: '1px solid rgba(52, 211, 153, 0.3)'
            }}>
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#" style={{ color: '#065f46', fontWeight: '500' }}>Properties</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" style={{ color: '#065f46', fontWeight: '500' }}>About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" style={{ color: '#065f46', fontWeight: '500' }}>Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" style={{ color: '#065f46', fontWeight: '500' }}>Contact</a>
                </li>
              </ul>
              
              <div className="d-flex align-items-center gap-3">
                <span style={{ color: '#065f46', fontSize: '0.9rem' }}>📞 +1 (555) 123-4567</span>
                <button className="btn" style={{
                  background: 'linear-gradient(135deg, #34d399, #10b981)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '25px',
                  padding: '8px 20px',
                  fontWeight: '500'
                }}>
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="d-flex align-items-center justify-content-center" style={{
          minHeight: '70vh',
          marginTop: '80px',
          padding: '60px 20px'
        }}>
          <div className="container text-center">
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              color: '#065f46',
              lineHeight: '1.2'
            }}>
              Find Your
              <span style={{ display: 'block', color: '#34d399' }}>Perfect Property</span>
            </h1>
            <p style={{
              fontSize: '1.2rem',
              marginBottom: '2rem',
              maxWidth: '600px',
              margin: '0 auto 2rem auto',
              color: '#047857',
              lineHeight: '1.6'
            }}>
              Discover exceptional properties in the most desirable locations. 
              Your dream property awaits with our curated collection of luxury real estate.
            </p>
            
            <div className="card" style={{
              background: 'rgba(52, 211, 153, 0.15)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(52, 211, 153, 0.3)',
              borderRadius: '20px',
              padding: '2rem',
              maxWidth: '800px',
              margin: '0 auto',
              boxShadow: '0 20px 40px rgba(52, 211, 153, 0.1)'
            }}>
              <div className="row g-3 align-items-end">
                <div className="col-md-3">
                  <label className="form-label" style={{ color: '#065f46', fontWeight: '600' }}>Location</label>
                  <input type="text" className="form-control" placeholder="City, area, or ZIP" style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    border: '1px solid rgba(52, 211, 153, 0.3)',
                    borderRadius: '10px'
                  }} />
                </div>
                <div className="col-md-3">
                  <label className="form-label" style={{ color: '#065f46', fontWeight: '600' }}>Property Type</label>
                  <select className="form-select" style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    border: '1px solid rgba(52, 211, 153, 0.3)',
                    borderRadius: '10px'
                  }}>
                    <option>All Types</option>
                    <option>House</option>
                    <option>Apartment</option>
                    <option>Commercial</option>
                    <option>Plot</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label className="form-label" style={{ color: '#065f46', fontWeight: '600' }}>Price Range</label>
                  <select className="form-select" style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    border: '1px solid rgba(52, 211, 153, 0.3)',
                    borderRadius: '10px'
                  }}>
                    <option>Any Price</option>
                    <option>₹50L - ₹1Cr</option>
                    <option>₹1Cr - ₹2Cr</option>
                    <option>₹2Cr+</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <button className="btn w-100" style={{
                    background: 'linear-gradient(135deg, #34d399, #10b981)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '10px',
                    padding: '12px',
                    fontWeight: '600'
                  }}>
                    🔍 Search Properties
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Property Slider Section */}
        <section className="section-container slide-in-left" style={{
          minHeight: '70vh',
          padding: '60px 40px',
          background: 'rgba(16, 185, 129, 0.1)',
          backdropFilter: 'blur(15px)',
          WebkitBackdropFilter: 'blur(15px)',
          border: '1px solid rgba(52, 211, 153, 0.2)'
        }}>
          <div className="container">
            <div className="text-center mb-5">
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: '#065f46',
                marginBottom: '1rem'
              }}>
                Featured Properties
              </h2>
              <p style={{ color: '#047857', fontSize: '1.1rem' }}>
                Discover our handpicked selection of premium properties
              </p>
            </div>
            
            <div className="row g-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="col-lg-4 col-md-6">
                  <div className="card h-100" style={{
                    background: 'rgba(255, 255, 255, 0.25)',
                    backdropFilter: 'blur(15px)',
                    WebkitBackdropFilter: 'blur(15px)',
                    border: '1px solid rgba(52, 211, 153, 0.3)',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}>
                    <img src={`/src/assets/property-${item}.jpg`} className="card-img-top" alt={`Property ${item}`} style={{
                      height: '250px',
                      objectFit: 'cover'
                    }} />
                    <div className="card-body">
                      <h5 className="card-title" style={{ color: '#065f46', fontWeight: 'bold' }}>
                        Luxury Villa {item}
                      </h5>
                      <p className="card-text" style={{ color: '#047857' }}>
                        📍 Prime Location, Punjab
                      </p>
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <span style={{ color: '#34d399', fontSize: '1.2rem', fontWeight: 'bold' }}>
                          ₹{item + 1}.5 Cr
                        </span>
                        <div style={{ color: '#047857', fontSize: '0.9rem' }}>
                          🛏️ 3 Beds • 🚿 2 Baths • 📐 2500 sq ft
                        </div>
                      </div>
                      <button className="btn w-100" style={{
                        background: 'linear-gradient(135deg, #34d399, #10b981)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '10px',
                        fontWeight: '500'
                      }}>
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Second Section - Services */}
        <section className="section-container slide-in-right" style={{
          minHeight: '70vh',
          padding: '60px 40px',
          background: 'rgba(6, 95, 70, 0.1)',
          backdropFilter: 'blur(15px)',
          WebkitBackdropFilter: 'blur(15px)',
          border: '1px solid rgba(52, 211, 153, 0.2)'
        }}>
          <div className="container">
            <div className="text-center mb-5">
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: '#065f46',
                marginBottom: '1rem'
              }}>
                Our Services
              </h2>
              <p style={{ color: '#047857', fontSize: '1.1rem' }}>
                Comprehensive real estate solutions tailored to your needs
              </p>
            </div>
            
            <div className="row g-4">
              {[
                { title: 'Property Sales', icon: '🏡', desc: 'Expert guidance for buying and selling properties' },
                { title: 'Investment Advisory', icon: '💼', desc: 'Strategic investment advice for maximum returns' },
                { title: 'Property Management', icon: '🔧', desc: 'Complete property management and maintenance services' },
                { title: 'Legal Assistance', icon: '⚖️', desc: 'Professional legal support for all transactions' }
              ].map((service, index) => (
                <div key={index} className="col-lg-6 col-md-6">
                  <div className="card h-100" style={{
                    background: 'rgba(255, 255, 255, 0.25)',
                    backdropFilter: 'blur(15px)',
                    WebkitBackdropFilter: 'blur(15px)',
                    border: '1px solid rgba(52, 211, 153, 0.3)',
                    borderRadius: '15px',
                    padding: '2rem',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}>
                    <div className="text-center">
                      <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{service.icon}</div>
                      <h5 style={{ color: '#065f46', fontWeight: 'bold', marginBottom: '1rem' }}>
                        {service.title}
                      </h5>
                      <p style={{ color: '#047857', fontSize: '1rem', lineHeight: '1.6' }}>
                        {service.desc}
                      </p>
                      <button className="btn mt-3" style={{
                        background: 'linear-gradient(135deg, #34d399, #10b981)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '10px',
                        padding: '10px 20px',
                        fontWeight: '500'
                      }}>
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="section-container" style={{
          minHeight: '70vh',
          padding: '60px 40px',
          background: 'rgba(6, 95, 70, 0.15)',
          backdropFilter: 'blur(15px)',
          WebkitBackdropFilter: 'blur(15px)',
          border: '1px solid rgba(52, 211, 153, 0.3)',
          marginTop: '40px'
        }}>
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-3 col-md-6">
                <div className="d-flex align-items-center mb-3">
                  <img src="/lovable-uploads/8e03d3f1-a556-4732-a40e-52d5d2766f20.png" alt="CBD Punjab" style={{
                    height: '40px',
                    marginRight: '10px'
                  }} />
                  <h5 className="footer-heading" style={{ margin: 0 }}>CBD Punjab</h5>
                </div>
                <p className="footer-text" style={{ marginBottom: '1rem' }}>
                  Your trusted partner in finding the perfect property. Excellence in real estate with a personal touch.
                </p>
                <div className="d-flex gap-2">
                  <a href="#" className="btn btn-sm" style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    color: 'rgba(255, 255, 255, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>📘</a>
                  <a href="#" className="btn btn-sm" style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    color: 'rgba(255, 255, 255, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>📷</a>
                  <a href="#" className="btn btn-sm" style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    color: 'rgba(255, 255, 255, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>🐦</a>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-6">
                <h6 className="footer-heading" style={{ marginBottom: '1rem' }}>Quick Links</h6>
                <ul className="list-unstyled">
                  <li><a href="#" className="footer-text" style={{ textDecoration: 'none', marginBottom: '0.5rem', display: 'block' }}>Home</a></li>
                  <li><a href="#" className="footer-text" style={{ textDecoration: 'none', marginBottom: '0.5rem', display: 'block' }}>Properties</a></li>
                  <li><a href="#" className="footer-text" style={{ textDecoration: 'none', marginBottom: '0.5rem', display: 'block' }}>About Us</a></li>
                  <li><a href="#" className="footer-text" style={{ textDecoration: 'none', marginBottom: '0.5rem', display: 'block' }}>Contact</a></li>
                </ul>
              </div>
              
              <div className="col-lg-3 col-md-6">
                <h6 className="footer-heading" style={{ marginBottom: '1rem' }}>Services</h6>
                <ul className="list-unstyled">
                  <li><a href="#" className="footer-text" style={{ textDecoration: 'none', marginBottom: '0.5rem', display: 'block' }}>Buy Property</a></li>
                  <li><a href="#" className="footer-text" style={{ textDecoration: 'none', marginBottom: '0.5rem', display: 'block' }}>Sell Property</a></li>
                  <li><a href="#" className="footer-text" style={{ textDecoration: 'none', marginBottom: '0.5rem', display: 'block' }}>Property Valuation</a></li>
                  <li><a href="#" className="footer-text" style={{ textDecoration: 'none', marginBottom: '0.5rem', display: 'block' }}>Investment Advice</a></li>
                </ul>
              </div>
              
              <div className="col-lg-3 col-md-6">
                <h6 className="footer-heading" style={{ marginBottom: '1rem' }}>Contact Info</h6>
                <div>
                  <p className="footer-text" style={{ marginBottom: '0.5rem' }}>📞 +91 98765 43210</p>
                  <p className="footer-text" style={{ marginBottom: '0.5rem' }}>✉️ info@cbdpunjab.com</p>
                  <p className="footer-text" style={{ marginBottom: '1rem' }}>📍 Sector 17, Chandigarh, Punjab</p>
                </div>
                
                <div className="input-group">
                  <input type="email" className="form-control" placeholder="Enter your email" style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '10px 0 0 10px'
                  }} />
                  <button className="btn" style={{
                    background: 'linear-gradient(135deg, #34d399, #10b981)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0 10px 10px 0'
                  }}>
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            
            <hr style={{ borderColor: 'rgba(255, 255, 255, 0.3)', margin: '2rem 0' }} />
            
            <div className="row align-items-center">
              <div className="col-md-6">
                <p className="footer-text" style={{ margin: 0 }}>
                  © 2024 CBD Punjab. All rights reserved.
                </p>
              </div>
              <div className="col-md-6 text-md-end">
                <a href="#" className="footer-text" style={{ textDecoration: 'none', marginRight: '1rem' }}>Privacy Policy</a>
                <a href="#" className="footer-text" style={{ textDecoration: 'none', marginRight: '1rem' }}>Terms of Service</a>
                <a href="#" className="footer-text" style={{ textDecoration: 'none' }}>Cookie Policy</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;