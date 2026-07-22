import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PlanTripButton from "./components/PlanTripButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Foxplore Travels",
  description: "Curated travel experiences by Foxplore Travels",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-950">
        <header className="site-header">
          <div className="top-strip">
            <div className="header-shell top-strip-inner">
              <div className="contact-row">
                <a href="tel:+919205002884" className="contact-link">
                  <PhoneIcon />
                  <span>+91 920 500 2884</span>
                </a>
                <a href="mailto:contact@foxploretravels.com" className="contact-link">
                  <MailIcon />
                  <span>contact@foxploretravels.com</span>
                </a>
              </div>

              <button className="language-button" type="button" aria-label="Change language">
                <span className="flag" aria-hidden="true">
                  <span className="flag-stripes" />
                  <span className="flag-canton" />
                </span>
                <span>English</span>
                <ChevronDownIcon />
              </button>
            </div>
          </div>

          <div className="main-nav">
            <div className="header-shell nav-inner">
              <a href="/" className="brand" aria-label="Foxplore Travels home">
                <span className="brand-name">foxplore travels</span>
                {/* <span className="brand-subtitle">Travels</span>  */}
              </a>

              <nav className="nav-links" aria-label="Main navigation">
                <div className="nav-item">
                  <a href="/">Home</a>
                </div>
                
                <div className="nav-item has-dropdown">
                  <a href="/india-tours">
                    India Tours
                    <ChevronDownIcon />
                  </a>
                  <div className="dropdown mega-menu">
                    <div className="dropdown-grid">
                      <div className="dropdown-column">
                        <h3 className="column-title">North India</h3>
                        <a href="/india-tours/rajasthan">Rajasthan</a>
                        <a href="/india-tours/golden-triangle">Golden Triangle</a>
                        <a href="/india-tours/delhi">Delhi</a>
                        <a href="/india-tours/himachal-pradesh">Himachal Pradesh</a>
                        <a href="/india-tours/kashmir">Kashmir</a>
                        <a href="/india-tours/leh-ladakh">Leh Ladakh</a>
                        <a href="/india-tours/uttarakhand">Uttarakhand</a>
                        <a href="/india-tours/uttar-pradesh">Uttar Pradesh</a>
                        <a href="/india-tours/north-india" className="explore-link">Explore North India &rarr;</a>
                      </div>
                      <div className="dropdown-column">
                        <h3 className="column-title">South India</h3>
                        <a href="/india-tours/kerala">Kerala</a>
                        <a href="/india-tours/tamil-nadu">Tamil Nadu</a>
                        <a href="/india-tours/karnataka">Karnataka</a>
                        <a href="/india-tours/andhra-pradesh">Andhra Pradesh</a>
                        <a href="/india-tours/lakshadweep">Lakshadweep</a>
                        <a href="/india-tours/pondicherry">Pondicherry</a>
                        <a href="/india-tours/andaman-nicobar">Andaman & Nicobar</a>
                        <a href="/india-tours/south-india" className="explore-link">Explore South India &rarr;</a>
                      </div>
                      <div className="dropdown-column">
                        <h3 className="column-title">East India</h3>
                        <a href="/india-tours/sikkim">Sikkim</a>
                        <a href="/india-tours/assam">Assam</a>
                        <a href="/india-tours/arunachal-pradesh">Arunachal Pradesh</a>
                        <a href="/india-tours/meghalaya">Meghalaya</a>
                        <a href="/india-tours/mizoram">Mizoram</a>
                        <a href="/india-tours/nagaland">Nagaland</a>
                        <a href="/india-tours/west-bengal">West Bengal</a>
                        <a href="/india-tours/east-india">More...</a>
                      </div>
                      <div className="dropdown-column">
                        <h3 className="column-title">West India</h3>
                        <a href="/india-tours/goa">Goa</a>
                        <a href="/india-tours/gujarat">Gujarat</a>
                        <a href="/india-tours/madhya-pradesh">Madhya Pradesh</a>
                        <a href="/india-tours/maharashtra">Maharashtra</a>
                        <a href="/india-tours/odisha">Odisha</a>
                        <a href="/india-tours/bihar">Bihar</a>
                        <a href="/india-tours/jharkhand">Jharkhand</a>
                        <a href="/india-tours/west-india">More...</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="nav-item has-dropdown">
                  <a href="/destinations">
                    Destinations
                    <ChevronDownIcon />
                  </a>
                  <div className="dropdown standard-dropdown destination-dropdown">
                    <div className="dropdown-grid dual-column">
                      <div className="dropdown-column">
                        <a href="/destinations/india">India</a>
                        <a href="/destinations/nepal">Nepal</a>
                        <a href="/destinations/bhutan">Bhutan</a>
                        <a href="/destinations/sri-lanka">Sri Lanka</a>
                        <a href="/destinations/thailand">Thailand</a>
                        <a href="/destinations/maldives">Maldives</a>
                        <a href="/destinations/vietnam">Vietnam</a>
                        <a href="/destinations/indonesia">Indonesia</a>
                      </div>
                      <div className="dropdown-column">
                        <a href="/destinations/singapore">Singapore</a>
                        <a href="/destinations/malaysia">Malaysia</a>
                        <a href="/destinations/dubai">Dubai</a>
                        <a href="/destinations/myanmar">Myanmar</a>
                        <a href="/destinations/tibet">Tibet</a>
                        <a href="/destinations/cambodia">Cambodia</a>
                        <a href="/destinations/laos">Laos</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="nav-item has-dropdown">
                  <a href="/travel-style">
                    Travel Style
                    <ChevronDownIcon />
                  </a>
                  <div className="dropdown standard-dropdown style-dropdown">
                    <div className="dropdown-grid dual-column">
                      <div className="dropdown-column">
                        <a href="/travel-style/taj-mahal">Taj Mahal</a>
                        <a href="/travel-style/first-timers">First Timers</a>
                        <a href="/travel-style/honeymoon">Honeymoon</a>
                        <a href="/travel-style/wildlife">Wildlife</a>
                        <a href="/travel-style/family">Family</a>
                        <a href="/travel-style/hill-station">Hill Station</a>
                        <a href="/travel-style/adventure">Adventure</a>
                        <a href="/travel-style/yoga-meditation">Yoga & Meditation</a>
                        <a href="/travel-style/beach-holiday">Beach Holiday</a>
                      </div>
                      <div className="dropdown-column">
                        <a href="/travel-style/spiritual">Spiritual</a>
                        <a href="/travel-style/chardham">Chardham</a>
                        <a href="/travel-style/ayurveda">Ayurveda</a>
                        <a href="/travel-style/food">Food</a>
                        <a href="/travel-style/festival">Festival</a>
                        <a href="/travel-style/buddhist">Buddhist</a>
                        <a href="/travel-style/bicycle">Bicycle</a>
                        <a href="/travel-style/luxury-tours">Luxury Tours</a>
                        <a href="/travel-style/photography">Photography</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="nav-item has-dropdown">
                  <a href="/about">
                    About Us
                    <ChevronDownIcon />
                  </a>
                  <div className="dropdown mini-dropdown about-dropdown">
                    <div className="dropdown-column">
                      <a href="/about/who-we-are">Who we are</a>
                      <a href="/about/guest-reviews">Guest Reviews</a>
                      <a href="/about/guest-photos">Guest Photos</a>
                      <a href="/about/guest-videos">Guest Videos</a>
                      <a href="/about/contact-us">Contact Us</a>
                      <a href="/about/terms-conditions">Terms & Condition</a>
                      <a href="/about/faq">FAQ's</a>
                    </div>
                  </div>
                </div>
              </nav>

              <div className="nav-actions">
                <button className="search-button" type="button" aria-label="Search">
                  <SearchIcon />
                </button>
                <PlanTripButton />
              </div>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="icon">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.55 2.81.68A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="icon">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a2 2 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="chevron-icon">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="search-icon">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}


