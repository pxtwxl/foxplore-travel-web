'use client';

import { useState, useRef, useEffect } from 'react';

export default function Home() {
  const [reviewsList, setReviewsList] = useState(initialReviews);
  const [activeReview, setActiveReview] = useState(0);
  const reviewSliderRef = useRef(null);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isTripModalOpen, setIsTripModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({ name: '', location: '', text: '', rating: 5 });
  const [tripForm, setTripForm] = useState({
    travelDate: '', 
    days: 1, 
    hotelCategory: '', 
    adults: 1, 
    children: 0,
    name: '', email: '', country: '', phone: '', preferences: ''
  });

  const handleTripSubmit = (e) => {
    e.preventDefault();
    alert('Thanks! Your enquiry has been sent. We will contact you soon.');
    setIsTripModalOpen(false);
    setTripForm({ travelDate: '', days: 1, hotelCategory: '', adults: 1, children: 0, name: '', email: '', country: '', phone: '', preferences: '' });
  };

  // Listen for header button event
  useEffect(() => {
    const handler = () => setIsTripModalOpen(true);
    window.addEventListener('openTripModal', handler);
    return () => window.removeEventListener('openTripModal', handler);
  }, []);

  // Auto-slide reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview((current) => (current + 1) % reviewsList.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviewsList.length]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const reviewToAdd = {
      ...newReview,
      id: Date.now(),
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&h=150&auto=format&fit=crop"
    };
    setReviewsList([reviewToAdd, ...reviewsList]);
    setIsReviewModalOpen(false);
    setNewReview({ name: '', location: '', text: '', rating: 5 });
  };

  const [isExpanded, setIsExpanded] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);

  const destinations = [
    { name: 'Rajasthan', tours: '120+', image: '/ind-rajasthan.png' },
    { name: 'Kerala', tours: '90+', image: '/ind-rajasthan.png' },
    { name: 'Ladakh', tours: '60+', image: '/ind-rajasthan.png' },
    { name: 'Varanasi', tours: '45+', image: '/ind-rajasthan.png' },
    { name: 'Goa', tours: '70+', image: '/ind-rajasthan.png' },
    { name: 'Rajasthan', tours: '120+', image: '/ind-rajasthan.png' },
    { name: 'Kerala', tours: '90+', image: '/ind-rajasthan.png' },
    { name: 'Ladakh', tours: '60+', image: '/ind-rajasthan.png' },
    { name: 'Varanasi', tours: '45+', image: '/ind-rajasthan.png' },
    { name: 'Goa', tours: '70+', image: '/ind-rajasthan.png' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (activeSlide + 1) % destinations.length;
      scrollToSlide(nextIndex);
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(timer);
  }, [activeSlide]);

  const handleScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll <= 0) return;
      const index = Math.round((scrollLeft / maxScroll) * (destinations.length - 1));
      setActiveSlide(index);
    }
  };

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth } = sliderRef.current;
      const cardWidth = scrollWidth / destinations.length;
      
      let targetScroll = scrollLeft + (direction === 'left' ? -cardWidth : cardWidth);
      
      sliderRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  const scrollToSlide = (index) => {
    if (sliderRef.current) {
      const { scrollWidth, clientWidth } = sliderRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const targetScroll = (index / (destinations.length - 1)) * maxScroll;
      sliderRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Experience the Extraordinary</h1>
          <p>Bespoke travel experiences tailored just for you</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="intro-section">
        <div className="container">
          <div className="intro-header">
            <span className="subtitle">TAILOR-MADE JOURNEYS ACROSS INDIA & WORLD</span>
            <h2 className="title">Private Tours Designed Around the Way You Travel</h2>
          </div>

          <div className="intro-content">
            <p>
              Travel feels different when it is designed around you. At <strong>Foxplore Travels</strong>, we create private, tailor-made journeys across India and Asia for travelers who want more than a standard holiday. From iconic routes and cultural discoveries to luxury escapes, family vacations, wildlife adventures, and spiritual journeys, every itinerary is carefully shaped around your interests, travel pace, and comfort. Our approach combines local expertise, thoughtful planning, and genuine hospitality, so your journey feels smooth, personal, and memorable from the moment you arrive.
            </p>
            
            <div className={`expandable-content ${isExpanded ? 'expanded' : ''}`}>
              <h3>Why Travelers Choose Foxplore Travels</h3>
              <p>
                The best travel brands do more than arrange hotels and transfers, they create confidence, ease, and a sense of connection. That is the philosophy behind every journey we design. We focus on what matters most to modern travelers: personalized planning, reliable service, honest guidance, and experiences that feel meaningful rather than rushed. From the first inquiry to the final day of your trip, our goal is to make travel feel effortless while still preserving the excitement of discovery.
              </p>
              <p>
                Our itineraries are never built as one-size-fits-all programs. Some travelers want a classic cultural route through <span className="highlight-text">Delhi, Agra, and Jaipur</span>, while others prefer a slower journey through <span className="highlight-text">Kerala</span>, a royal holiday in <span className="highlight-text">Rajasthan</span>, a nature-focused escape with <span className="highlight-text">wildlife safaris</span>, or a high-end private tour with handpicked stays and exclusive experiences. We shape every plan around those differences, which is why each trip feels more personal and more rewarding.
              </p>

              <h3>Travel Designed Around Experience, Not Just Sightseeing</h3>
              <p>
                Today's leading travel brands understand that travelers want more than a checklist of famous places. They want journeys with character, balance, and memorable moments. That is why we focus on building experiences that combine iconic highlights with deeper regional insight. You might watch the sunrise over the Taj Mahal, stay in a heritage palace, enjoy a private boat ride in the backwaters, explore local markets with a guide, unwind in the hills, or witness spiritual traditions that bring a destination to life in a more authentic way.
              </p>
              <p>
                This balance between comfort and discovery is what defines the Foxplore Travels experience. We believe a good itinerary should feel well-paced, not crowded. It should be inspiring, but also practical. It should include the landmarks you have dreamed about, while still leaving room for local encounters, rest, and flexibility. That is how a tour becomes a journey worth remembering.
              </p>

              <h3>Our Destinations</h3>
              <p>
                We specialize in some of the most inspiring destinations across South Asia and beyond. India remains at the heart of what we do, offering a remarkable mix of culture, heritage, wildlife, spirituality, mountains, beaches, and luxury experiences. Beyond India, travelers can explore the sacred landscapes of Nepal, the peaceful Himalayan kingdom of Bhutan, the coastal beauty and heritage of Sri Lanka, and other carefully selected destinations across Asia. Each destination is supported by local insight and practical planning, allowing travelers to explore with greater confidence and comfort.
              </p>
              <ul className="intro-list">
                <li><strong>India:</strong> Ideal for culture, heritage, luxury, wildlife, spiritual tours, and multi-region journeys.</li>
                <li><strong>Nepal:</strong> Perfect for Himalayan scenery, spiritual travel, and heritage-rich cultural experiences.</li>
                <li><strong>Bhutan:</strong> Known for monasteries, mountain landscapes, and peaceful, high-value travel experiences.</li>
                <li><strong>Sri Lanka:</strong> A blend of beaches, tea country, wildlife, history, and scenic road journeys.</li>
              </ul>

              <h3>What Makes Our Journeys Different</h3>
              <p>
                Great travel is built on detail. We pay attention to how your itinerary flows, how long you stay in each place, where you should slow down, and what kind of experiences will suit your travel style best. Families need flexibility and comfort. Couples may want privacy and romantic stays. Luxury travelers often value exclusivity, premium hotels, and curated experiences. First-time visitors may need guidance on routing and timing, while repeat travelers may prefer deeper, lesser-known experiences. Our planning reflects these differences at every stage.
              </p>
              <p>
                We also know that trust matters. Travelers want a company that understands the destination, gives honest recommendations, responds clearly, and supports them throughout the trip. That is why we place strong emphasis on local knowledge, transparent planning, and practical coordination. Behind every itinerary is a team committed to delivering journeys that feel polished, dependable, and personal.
              </p>

              <h3>Best for Every Travel Style</h3>
              <p>
                No two travelers explore the world in exactly the same way, which is why we offer a wide range of travel styles across our destinations. Some guests choose classic <span className="highlight-text">tour packages</span> that cover the essential highlights, while others prefer <span className="highlight-text">luxury tours</span>, <span className="highlight-text">family holidays</span>, <span className="highlight-text">honeymoon trips</span>, <span className="highlight-text">cultural journeys</span>, or <span className="highlight-text">adventure experiences</span>. Our role is to understand what kind of journey suits you best and then build it with care.
              </p>

              <h3>Simple Planning, Personal Service</h3>
              <p>
                Planning a major trip should feel exciting, not overwhelming. We make the process simpler by helping travelers refine their ideas, choose the right destinations, balance their time well, and build itineraries that match their budget and expectations. Whether you already know exactly where you want to go or are still deciding between several destinations, our team helps shape a plan that is realistic, smooth, and inspiring.
              </p>
              <ul className="intro-list">
                <li><strong>Tailor-made itineraries:</strong> Trips built around your dates, interests, and pace.</li>
                <li><strong>Carefully selected stays:</strong> Comfortable hotels and heritage properties chosen for value and experience.</li>
                <li><strong>Local expertise:</strong> Practical destination knowledge and regional insight.</li>
                <li><strong>Flexible travel styles:</strong> Options for luxury, family, cultural, wildlife, honeymoon, and spiritual travel.</li>
                <li><strong>Reliable support:</strong> Dedicated assistance before and during your journey.</li>
              </ul>

              <h3>A More Meaningful Way to Travel</h3>
              <p>
                The strongest international travel brands succeed because they make travelers feel understood. That is exactly what we aim to do at Foxplore Travels. We do not simply sell packages, we design journeys that reflect what matters to you. With destination expertise, personalized planning, and a clear focus on quality, we help travelers experience India and Asia in a way that feels richer, easier, and more personal. For those looking for a trusted travel partner and a journey built with care, Foxplore Travels offers a thoughtful way to explore the world.
              </p>
            </div>

            <button 
              className="read-more-btn" 
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          </div>
        </div>
      </section>

      <section className="explore-india-section">
        <div className="container">
          <div className="section-header centered">
            <span className="subtitle">EXPLORE INDIA</span>
            <h2 className="title">Top Destinations in India</h2>
            <p className="description">
              Discover India's most iconic journeys — from the Golden Triangle and Rajasthan to Kerala backwaters, Kashmir valleys, Ladakh adventures, and wildlife safaris.
            </p>
          </div>

          <div className="india-slider-wrapper">
            <button 
              className="slider-arrow prev" 
              onClick={() => scrollSlider('left')}
              aria-label="Previous"
            >
              <ChevronLeftIcon />
            </button>
            
            <div className="india-slider" ref={sliderRef} onScroll={handleScroll}>
              {destinations.map((dest, index) => (
                <div className="india-card" key={index}>
                  <img src={dest.image} alt={dest.name} />
                  <div className="card-content">
                    <h3>{dest.name}</h3>
                    <span>{dest.tours} tours</span>
                  </div>
                </div>
              ))}
            </div>

            <button 
              className="slider-arrow next" 
              onClick={() => scrollSlider('right')}
              aria-label="Next"
            >
              <ChevronRightIcon />
            </button>
          </div>

          <div className="slider-dots">
            {destinations.map((_, index) => (
              <span 
                key={index}
                className={`dot ${activeSlide === index ? 'active' : ''}`}
                onClick={() => scrollToSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>

      <section className="explore-asia-section">
        <div className="container">
          <div className="section-header centered">
            <span className="subtitle">EXPLORE ASIA</span>
            <h2 className="title">Top Destinations in Asia</h2>
            <p className="description">
              Explore handpicked destinations across Asia, including Nepal, Bhutan, Sri Lanka, Vietnam, Thailand, and beyond.
            </p>
            <div className="badge-count">
              <strong>7+</strong> Popular Asian destinations
            </div>
          </div>

          <div className="asia-bento-grid">
            <div className="bento-item nepal">
              <img src="https://images.unsplash.com/photo-1526402978125-f1d6df91cbac?q=80&w=800" alt="Nepal" />
              <div className="bento-overlay">
                <span className="view-tours">VIEW TOURS</span>
                <div className="bento-center">
                  <div className="pin-icon-bg">
                    <LocationPinIcon />
                  </div>
                  <h3>Nepal</h3>
                </div>
              </div>
            </div>

            <div className="bento-item bhutan">
              <img src="https://images.unsplash.com/photo-1526402978125-f1d6df91cbac?q=80&w=800" alt="Bhutan" />
              <div className="bento-overlay">
                <span className="view-tours">VIEW TOURS</span>
                <div className="bento-center">
                  <div className="pin-icon-bg">
                    <LocationPinIcon />
                  </div>
                  <h3>Bhutan</h3>
                </div>
              </div>
            </div>

            <div className="bento-item sri-lanka">
              <img src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=800" alt="Sri Lanka" />
              <div className="bento-overlay">
                <span className="view-tours">VIEW TOURS</span>
                <div className="bento-center">
                  <div className="pin-icon-bg">
                    <LocationPinIcon />
                  </div>
                  <h3>Sri Lanka</h3>
                </div>
              </div>
            </div>

            <div className="bento-item maldives">
              <img src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800" alt="Maldives" />
              <div className="bento-overlay">
                <span className="view-tours">VIEW TOURS</span>
                <div className="bento-center">
                  <div className="pin-icon-bg">
                    <LocationPinIcon />
                  </div>
                  <h3>Maldives</h3>
                </div>
              </div>
            </div>

            <div className="bento-item vietnam">
              <img src="https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800" alt="Vietnam" />
              <div className="bento-overlay">
                <span className="view-tours">VIEW TOURS</span>
                <div className="bento-center">
                  <div className="pin-icon-bg">
                    <LocationPinIcon />
                  </div>
                  <h3>Vietnam</h3>
                </div>
              </div>
            </div>

            <div className="bento-item cambodia">
              <img src="https://images.unsplash.com/photo-1500049242364-5f500807cdd7?q=80&w=800" alt="Cambodia" />
              <div className="bento-overlay">
                <span className="view-tours">VIEW TOURS</span>
                <div className="bento-center">
                  <div className="pin-icon-bg">
                    <LocationPinIcon />
                  </div>
                  <h3>Cambodia</h3>
                </div>
              </div>
            </div>

            <div className="bento-item thailand">
              <img src="https://images.unsplash.com/photo-1526402978125-f1d6df91cbac?q=80&w=800" alt="Thailand" />
              <div className="bento-overlay">
                <span className="view-tours">VIEW TOURS</span>
                <div className="bento-center">
                  <div className="pin-icon-bg">
                    <LocationPinIcon />
                  </div>
                  <h3>Thailand</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="center-btn-wrapper">
            <button className="view-all-btn blue">
              VIEW ALL ASIA TOURS →
            </button>
          </div>
        </div>
      </section>

      <section className="explore-experience-section">
        <div className="container">
          <div className="section-header">
            <div className="header-top">
              <div className="header-left">
                <span className="subtitle blue">EXPLORE BY EXPERIENCE</span>
                <h2 className="title">Experiences of India</h2>
                <p className="description">
                  Choose how you want to travel — from luxury escapes and cultural tours to wildlife safaris, spiritual journeys, and adventure-filled trips across India.
                </p>
              </div>
              <div className="header-right">
                <div className="badge-experience">
                  <strong>Top</strong> Travel Experiences
                </div>
              </div>
            </div>
          </div>

          <div className="experience-grid">
            {experiences.map((exp, index) => (
              <div className="experience-card" key={index}>
                <img src={exp.image} alt={exp.name} />
                <div className="experience-overlay">
                  <div className="experience-info">
                    <h3>{exp.name}</h3>
                    <span>Explore tours</span>
                  </div>
                  <div className="experience-pin">
                    <LocationPinIcon />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="reviews-section">
        <div className="container">
          <div className="section-header centered">
            <span className="subtitle blue">CLIENT REVIEWS</span>
            <h2 className="title">Voices of Our Travelers</h2>
            <p className="description">
              Our commitment to quality travel experiences is reflected in the stories and feedback of those who explore the world with us.
            </p>
          </div>

          <div className="review-slider-outer">
            <div 
              className="review-slider" 
              style={{ transform: `translateX(-${activeReview * 100}%)` }}
            >
              {reviewsList.map((rev, index) => (
                <div className="review-slide" key={index}>
                  <div className="review-card-wide split-layout">
                    <div className="review-left">
                      <img src={rev.avatar} alt={rev.name} />
                      <div className="author-info">
                        <h4>{rev.name}</h4>
                        <span>{rev.location}</span>
                      </div>
                    </div>
                    
                    <div className="review-right">
                      <div className="review-stars">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon key={i} color={i < rev.rating ? "#fbbf24" : "#e2e8f0"} />
                        ))}
                      </div>
                      <p className="review-text">"{rev.text}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="slider-dots reviews-dots">
              {reviewsList.map((_, index) => (
                <span 
                  key={index}
                  className={`dot ${activeReview === index ? 'active' : ''}`}
                  onClick={() => setActiveReview(index)}
                ></span>
              ))}
            </div>
          </div>

          <div className="center-btn-wrapper">
            <button className="drop-review-btn" onClick={() => setIsReviewModalOpen(true)}>
              Drop a Review
            </button>
          </div>
        </div>
      </section>

      {/* Review Modal */}
      {isReviewModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsReviewModalOpen(false)}>
          <div className="modal-content review-form-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsReviewModalOpen(false)}>×</button>
            <h3>Share Your Experience</h3>
            <p>We value your feedback and would love to hear about your journey.</p>
            
            <form onSubmit={handleReviewSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input 
                  type="text" required value={newReview.name}
                  onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                  placeholder="e.g. John Doe"
                />
              </div>
              <div className="form-group">
                <label>Location</label>
                <input 
                  type="text" required value={newReview.location}
                  onChange={(e) => setNewReview({...newReview, location: e.target.value})}
                  placeholder="e.g. New York, USA"
                />
              </div>
              <div className="form-group">
                <label>Rating</label>
                <div className="star-rating-input">
                  {[1,2,3,4,5].map(star => (
                    <button 
                      type="button" key={star}
                      onClick={() => setNewReview({...newReview, rating: star})}
                      className={newReview.rating >= star ? 'active' : ''}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>
              <div className="form-group">
                <label>Your Review</label>
                <textarea 
                  required rows="4" value={newReview.text}
                  onChange={(e) => setNewReview({...newReview, text: e.target.value})}
                  placeholder="Tell us about your trip..."
                ></textarea>
              </div>
              <button type="submit" className="submit-review-btn">Submit Review</button>
            </form>
          </div>
        </div>
      )}

      {/* Plan Your Trip Modal */}
      {isTripModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsTripModalOpen(false)}>
          <div className="trip-modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsTripModalOpen(false)}>&times;</button>
            <div className="trip-modal-header">
              <h3>Plan Your Trip</h3>
            </div>
            <div className="trip-modal-body">
              <form onSubmit={handleTripSubmit}>
                <div className="trip-form-row single">
                  <input
                    type="date"
                    placeholder="Date of Travel"
                    value={tripForm.travelDate}
                    onChange={e => setTripForm({...tripForm, travelDate: e.target.value})}
                  />
                </div>
                <div className="trip-form-row two-col">
                  <NumberCounter 
                    label="No. of Days" 
                    value={tripForm.days} 
                    onChange={(val) => setTripForm({...tripForm, days: Math.max(1, val)})} 
                  />
                  <select value={tripForm.hotelCategory} onChange={e => setTripForm({...tripForm, hotelCategory: e.target.value})}>
                    <option value="">Hotel Category</option>
                    <option value="3star">3 Star</option>
                    <option value="4star">4 Star</option>
                    <option value="5star">5 Star</option>
                    <option value="heritage">Heritage / Boutique</option>
                  </select>
                </div>
                <div className="trip-form-row two-col">
                  <NumberCounter 
                    label="Select Adults" 
                    value={tripForm.adults} 
                    onChange={(val) => setTripForm({...tripForm, adults: Math.max(1, val)})} 
                  />
                  <NumberCounter 
                    label="Select Children" 
                    value={tripForm.children} 
                    onChange={(val) => setTripForm({...tripForm, children: Math.max(0, val)})} 
                  />
                </div>
                <div className="trip-form-row two-col">
                  <input type="text" placeholder="Your Name" required value={tripForm.name} onChange={e => setTripForm({...tripForm, name: e.target.value})} />
                  <input type="email" placeholder="Your Email" required value={tripForm.email} onChange={e => setTripForm({...tripForm, email: e.target.value})} />
                </div>
                <div className="trip-form-row two-col">
                  <select value={tripForm.country} onChange={e => setTripForm({...tripForm, country: e.target.value})}>
                    <option value="">Select Your Country</option>
                    <option value="IN">India</option>
                    <option value="US">United States</option>
                    <option value="GB">United Kingdom</option>
                    <option value="AU">Australia</option>
                    <option value="CA">Canada</option>
                    <option value="DE">Germany</option>
                    <option value="FR">France</option>
                    <option value="SG">Singapore</option>
                    <option value="AE">UAE</option>
                    <option value="other">Other</option>
                  </select>
                  <input type="tel" placeholder="WhatsApp / Phone" value={tripForm.phone} onChange={e => setTripForm({...tripForm, phone: e.target.value})} />
                </div>
                <div className="trip-form-row single">
                  <textarea placeholder="Tell us your interests or preferences" rows="4" value={tripForm.preferences} onChange={e => setTripForm({...tripForm, preferences: e.target.value})}></textarea>
                </div>
                <div className="trip-form-row single">
                  <button type="submit" className="send-enquiry-btn">
                    Send Enquiry
                    <span className="enquiry-arrow">&#9658;</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-col about-col">
              <div className="footer-brand">
                <span className="brand-fox">Fox</span>
                <span className="brand-plore">plore</span>
                <span className="brand-travels">Travels</span>
              </div>
              <p className="footer-desc">
                Specializing in bespoke private journeys across India and Asia. Our mission is to create meaningful, high-end travel experiences tailored to your personal style.
              </p>
              <div className="footer-socials">
                <a href="#"><InstagramIcon /></a>
                <a href="#"><FacebookIcon /></a>
                <a href="#"><TwitterIcon /></a>
                <a href="#"><LinkedInIcon /></a>
              </div>
            </div>

            <div className="footer-col">
              <h4>Experiences</h4>
              <ul>
                <li><a href="#">Wildlife Safaris</a></li>
                <li><a href="#">Luxury escapes</a></li>
                <li><a href="#">Cultural Tours</a></li>
                <li><a href="#">Spiritual Journeys</a></li>
                <li><a href="#">Honeymoon Specials</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#">Explore India</a></li>
                <li><a href="#">Explore Asia</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><button className="footer-link-btn" onClick={() => setIsTripModalOpen(true)}>Plan Your Trip</button></li>
              </ul>
            </div>

            <div className="footer-col contact-col">
              <h4>Get in Touch</h4>
              <div className="contact-item">
                <LocationPinIcon className="icon-contact" />
                <span>13-A, Pocket 5, Pratap Nagar, Mayur Vihar, New Delhi, India</span>
              </div>
              <div className="contact-item">
                <WhatsAppIcon className="icon-contact" />
                <span>+91 98765 43210</span>
              </div>
              <div className="contact-item">
                <PaperPlaneIcon className="icon-contact" />
                <span>hello@foxploretravels.com</span>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Foxplore Travels. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Actions */}
      {/* ... (rest of the code) */}
    </main>
  );
}

const initialReviews = [
  {
    rating: 5,
    name: "Eleanor Pemberton",
    location: "London, UK",
    text: "The itinerary for Rajasthan was perfectly balanced. Every heritage stay felt like stepping into history. Foxplore Travels truly understands luxury and culture.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop"
  },
  {
    rating: 5,
    name: "Marcus Schmidt",
    location: "Berlin, Germany",
    text: "Bhutan was a spiritual journey unlike any other. The guide's knowledge was exceptional, and the logistics were handled flawlessly. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-150700321116ac-5188c582175c?q=80&w=150&h=150&auto=format&fit=crop"
  },
  {
    rating: 5,
    name: "Sarah Jenkins",
    location: "Sydney, Australia",
    text: "From the busy streets of Delhi to the serene backwaters of Kerala, everything was seamless. The personalized attention made all the difference.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop"
  }
];

function StarIcon({ color = "#fbbf24" }) {
  return (
    <svg viewBox="0 0 24 24" className="icon-star">
      <path fill={color} d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

const experiences = [
  { name: 'Wildlife Safaris', image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=800' },
  { name: 'Luxury Experiences', image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?q=80&w=800' },
  { name: 'Spiritual Journeys', image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800' },
  { name: 'Adventure Tours', image: 'https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?q=80&w=800' },
  { name: 'Family Holidays', image: 'https://images.unsplash.com/photo-1532186651327-6ac23687d189?q=80&w=800' },
  { name: 'Honeymoon Tours', image: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=800' },
  { name: 'Culinary Tours', image: 'https://images.unsplash.com/photo-1589187151032-573a91317445?q=80&w=800' },
  { name: 'Festival Experiences', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800' }
];

function LocationPinIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className || "icon-svg-small"}>
      <path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className || "icon-svg"}>
      <path fill="currentColor" d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42 1.56 1.56 2.41 3.63 2.41 5.83 0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.32a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24m-3.53 3.03c-.15 0-.35.05-.54.26-.19.21-.73.71-.73 1.74s.75 2.02.85 2.16c.11.14 1.48 2.26 3.58 3.17.5.21.89.34 1.2.44.5.16.96.14 1.32.08.4-.06 1.22-.5 1.39-.98.17-.48.17-.9 1.13-1.07.13-.03.26-.13.33-.26z" />
    </svg>
  );
}

function ChevronUpIcon() {
  return (
    <svg viewBox="0 0 24 24" className="icon-svg">
      <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="m18 15-6-6-6 6" />
    </svg>
  );
}

function PaperPlaneIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className || "icon-svg"}>
      <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="m22 2-7 20-4-9-9-4Z" />
      <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M22 2 11 13" />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" className="icon-svg">
      <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="m15 18-6-6 6-6" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="icon-footer">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="none" stroke="currentColor" strokeWidth="2" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="icon-footer">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" className="icon-footer">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="icon-footer">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg viewBox="0 0 24 24" className="icon-svg">
      <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
    </svg>
  );
}
function NumberCounter({ label, value, onChange }) {
  return (
    <div className="number-counter">
      <span className="counter-label">{label}</span>
      <div className="counter-controls">
        <button type="button" onClick={() => onChange(value - 1)} aria-label="Decrease">&minus;</button>
        <span className="counter-value">{value}</span>
        <button type="button" onClick={() => onChange(value + 1)} aria-label="Increase">+</button>
      </div>
    </div>
  );
}
