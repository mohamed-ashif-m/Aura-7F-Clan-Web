import React from 'react';
import { Users, Code2, ShieldCheck} from "lucide-react";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">  
        <h1 className="hero-title">
          Together We Build Tomorrow's Solutions
        </h1>
        
        <p className="hero-subtitle">
          We(Aura-7F),the Clan of Byte Bash Blitz, United by passion, driven by purpose. We're a team of developers
          committed to crafting exceptional software through collaboration and
          innovation.
        </p>
      </section>

      {/* Core Principles Section */}
      <section className="section">
  <div className="container">
    <h2 className="section-title">Our Core Principles</h2>

    <div className="principles-grid">
      <div className="principle-card">
        <div className="principle-header">
          <div className="principle-icon">
            <Users size={32} />
          </div>
          <div>
            <h3 className="principle-title">Unity Builders</h3>
            <p className="principle-subtitle">Collaboration</p>
          </div>
        </div>
        <p className="principle-description">
          Fostering seamless teamwork and cross-functional collaboration across projects
        </p>
      </div>

      <div className="principle-card">
        <div className="principle-header">
          <div className="principle-icon">
            <Code2 size={32} />
          </div>
          <div>
            <h3 className="principle-title">Knowledge Sharers</h3>
            <p className="principle-subtitle">Learning</p>
          </div>
        </div>
        <p className="principle-description">
          Promoting continuous learning and open knowledge sharing within the team
        </p>
      </div>

      <div className="principle-card">
        <div className="principle-header">
          <div className="principle-icon">
            <ShieldCheck size={32} />
          </div>
          <div>
            <h3 className="principle-title">Quality Champions</h3>
            <p className="principle-subtitle">Excellence</p>
          </div>
        </div>
        <p className="principle-description">
          Committed to delivering high-quality solutions that exceed expectations
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Team Dynamics Section */}
      <section className="section dynamics-section">
        <div className="container">
          <h2 className="section-title">Team Aura</h2>
          
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Collaboration</div>
            </div>

            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support</div>
            </div>

            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>

            <div className="stat-card">
              <div className="stat-number">∞</div>
              <div className="stat-label">Learning & Growth</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;