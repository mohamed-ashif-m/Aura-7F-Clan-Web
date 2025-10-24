import React from 'react';
import {Sparkles, Star, Sun , Lightbulb, Target, Handshake, Rocket, Gem, BadgeCheck, Zap } from "lucide-react";
const About = () => {
  return (
    <>
      {/* Hero Section with Name Meaning */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content-about">
            <h1 className="about-main-title">Aura-7F</h1>
            <div className="name-meaning">
              <div className="meaning-card">
                <h3>Aura</h3>
                <p>Resembles a <strong>Star</strong><br/>A radiant energy that illuminates</p>
              </div>
              <div className="meaning-connector">+</div>
              <div className="meaning-card">
                <h3>7F</h3>
                <p><strong>Hexadecimal's highest positive number</strong><br/>Maximum positive energy</p>
              </div>
          <div className="meaning-connector">=</div>
          <div className="meaning-connector">∞</div>
            </div>
            <div className="meaning-result">
              <h2>"A Star Shines in a High Place with Full of Positive Energy"</h2>
              <p>This is the essence of our clan - reaching the highest potential while spreading positivity and illumination to all we touch.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy-section">
        <div className="container">
              <h2 className="section-title-alt">Our Philosophy</h2>
          <div className="philosophy-content">
            <div className="philosophy-left">
              <div className="philosophy-text">
                <p>
                  Like a star that burns brightest in the vast cosmos, Aura-7F represents the pinnacle of 
                  positive energy in the digital universe. We believe that true innovation happens when 
                  brilliant minds unite under a shared constellation of values.
                </p>
                <p>
                  Our name embodies our commitment to reaching the highest levels of excellence (7F in hexadecimal) 
                  while maintaining the radiant, inspiring presence of a guiding star (Aura) for others in 
                  the tech community.
                </p>
              </div>
            </div>
            <div className="philosophy-right">
              <div className="energy-visualization">
                <div className="energy-core"></div>
                <div className="energy-wave wave-1"></div>
                <div className="energy-wave wave-2"></div>
                <div className="energy-wave wave-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values in Hexagonal Design */}
      <section className="values-section">
  <div className="container">
    <h2 className="section-title-alt">Seven Fundamental Values</h2>
    <p className="values-subtitle">The 7F that defines our highest positive energy</p>
    <div className="hexagonal-grid">
      <div className="hex-value" data-value="1">
        <div className="hex-content" data-number="1">
          <div className="hex-icon"><Lightbulb size={60} /></div>
          <h3>Innovation</h3>
          <p>Pioneering tomorrow's solutions</p>
        </div>
      </div>

      <div className="hex-value" data-value="2">
        <div className="hex-content" data-number="2">
          <div className="hex-icon"><Target size={60} /></div>
          <h3>Excellence</h3>
          <p>Pursuing perfection in every detail</p>
        </div>
      </div>

      <div className="hex-value" data-value="3">
        <div className="hex-content" data-number="3">
          <div className="hex-icon"><Handshake size={60} /></div>
          <h3>Collaboration</h3>
          <p>United we achieve the impossible</p>
        </div>
      </div>

      <div className="hex-value" data-value="4">
        <div className="hex-content" data-number="4">
          <div className="hex-icon"><Rocket size={60} /></div>
          <h3>Growth</h3>
          <p>Continuously evolving and learning</p>
        </div>
      </div>

      <div className="hex-value" data-value="5">
        <div className="hex-content" data-number="5">
          <div className="hex-icon"><Gem size={60} /></div>
          <h3>Integrity</h3>
          <p>Transparent and honest in all we do</p>
        </div>
      </div>

      <div className="hex-value" data-value="6">
        <div className="hex-content" data-number="6">
          <div className="hex-icon"><BadgeCheck size={60} /></div>
          <h3>Quality</h3>
          <p>Delivering beyond expectations</p>
        </div>
      </div>

      <div className="hex-value" data-value="7">
        <div className="hex-content" data-number="7">
          <div className="hex-icon"><Zap size={60} /></div>
          <h3>Energy</h3>
          <p>Passionate drive in everything</p>
        </div>
      </div>
    </div>
  </div>
      </section>

      {/* Journey Timeline */}
      <section className="journey-section">
  <div className="container">
    <h2 className="section-title-alt">Our Stellar Journey</h2>
    <div className="timeline">
      
      <div className="timeline-item">
        <div className="timeline-marker">
          <Sparkles size={28} />
        </div>
        <div className="timeline-content">
          <h3>Genesis - 2024</h3>
          <p>
            We are one of the clan of Byte Bash Blitz Community of passionate developers united by a shared vision of reaching the highest potential in software development.
          </p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-marker">
          <Star size={28} />
        </div>
        <div className="timeline-content">
          <h3>The Aura-7F Name</h3>
          <p>
            Our Clan CB Shaniya discovered our identity — a star shining in high places with maximum positive energy, representing our commitment to excellence.
          </p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-marker">
          <Rocket size={28} />
        </div>
        <div className="timeline-content">
          <h3>Expanding Horizons</h3>
          <p>
            Growing our constellation of talented individuals of second year bashers, each bringing their unique light to illuminate new possibilities.
          </p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-marker">
          <Sun size={28} />
        </div>
        <div className="timeline-content">
          <h3>Shining Bright - Present</h3>
          <p>
            Today, we continue to be a guiding star for innovation, spreading positive energy through every project we touch.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
    </>
  );
};

export default About;