import React from 'react';

const Members = () => {
  const cb = [
    {
      id: 1,
      name: "Shaniya",
      role: "Cyber Security Specialist",
      specialization: "Cyber Security",
      bio: "Passionate about creating scalable web applications and mentoring junior developers.",
      skills: ["React", "Node.js", "Python", "AWS"],
      avatar: "S",
      portfolioUrl: "#"
    },
    {
      id: 2,
      name: "Mohamed Ashif M",
      role: "Frontend Developer",
      specialization: "User Experience Design",
      bio: "Dedicated to crafting intuitive and beautiful user interfaces that enhance user experience.",
      skills: ["Python","React","MySQL","Postgresql"],
      avatar: "MA",
      portfolioUrl: "#"
    },
  ];

  const members = [
    {
      id: 1,
      name: "Lethin",
      role: "Data Analyst",
      specialization: "Data Analysis",
      bio: "Passionate about creating scalable web applications and mentoring junior developers.",
      skills: ["React", "Node.js", "Python", "AWS"],
      avatar: "L",
      portfolioUrl: "#"
    },
    {
      id: 2,
      name: "Jijo Rogerz",
      role: "Full-Stack Developer",
      specialization: "Web Development",
      bio: "Dedicated to crafting intuitive and beautiful user interfaces that enhance user experience.",
      skills: ["Figma", "Adobe XD", "CSS", "Design Systems"],
      avatar: "JR",
      portfolioUrl: "#"
    },
    {
      id: 3,
      name: "Bennyhinn Sam",
      role: "Software Engineer",
      specialization: "Software Engineering",
      bio: "Expert in building robust backend systems and optimizing database performance.",
      skills: ["Java", "Spring", "PostgreSQL", "Docker"],
      avatar: "BS",
      portfolioUrl: "#"
    },
    {
      id: 4,
      name: "Anitus",
      role: "Java Developer",
      specialization: "Modern Web Technologies",
      bio: "Enthusiastic about creating responsive and interactive web experiences using cutting-edge technologies.",
      skills: ["Vue.js", "TypeScript", "CSS3", "WebGL"],
      avatar: "A",
      portfolioUrl: "#"
    },
    {
      id: 5,
      name: "Lifnan Shijo",
      role: "DevOps Engineer",
      specialization: "Cloud Infrastructure",
      bio: "Focused on automating deployment processes and maintaining scalable cloud infrastructure.",
      skills: ["Kubernetes", "Terraform", "Jenkins", "Azure"],
      avatar: "LS",
      portfolioUrl: "#"
    },
    {
      id: 6,
      name: "Archana",
      role: "QA Engineer",
      specialization: "Test Automation",
      bio: "Committed to ensuring software quality through comprehensive testing strategies and automation.",
      skills: ["Selenium", "Jest", "Cypress", "API Testing"],
      avatar: "A",
      portfolioUrl: "#"
    },
    {
      id: 7,
      name: "Alisha",
      role: "QA Engineer",
      specialization: "Test Automation",
      bio: "Committed to ensuring software quality through comprehensive testing strategies and automation.",
      skills: ["Selenium", "Jest", "Cypress", "API Testing"],
      avatar: "A",
      portfolioUrl: "#"
    },
    {
      id: 8,
      name: "Shailu Mirsha",
      role: "QA Engineer",
      specialization: "Test Automation",
      bio: "Committed to ensuring software quality through comprehensive testing strategies and automation.",
      skills: ["Selenium", "Jest", "Cypress", "API Testing"],
      avatar: "SM",
      portfolioUrl: "#"
    },
    {
      id: 9,
      name: "Arthi",
      role: "QA Engineer",
      specialization: "Test Automation",
      bio: "Committed to ensuring software quality through comprehensive testing strategies and automation.",
      skills: ["Selenium", "Jest", "Cypress", "API Testing"],
      avatar: "A",
      portfolioUrl: "#"
    },
    {
      id: 10,
      name: "Beule Sujarsa",
      role: "QA Engineer",
      specialization: "Test Automation",
      bio: "Committed to ensuring software quality through comprehensive testing strategies and automation.",
      skills: ["Selenium", "Jest", "Cypress", "API Testing"],
      avatar: "BS",
      portfolioUrl: "#"
    },
  ];

  return (
    <>
      {/* Members Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <h1 className="page-title">Meet Our Team</h1>
            <p className="page-subtitle">
              The brilliant minds behind Aura-7F's innovative solutions and collaborative success
            </p>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="section">
        <div className="container">
          <div className="team-stats">
            <div className="stat-item">
              <div className="stat-number">2</div>
              <div className="stat-label">Captain Bash</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">12</div>
              <div className="stat-label">Team Members</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99.99%</div>
              <div className="stat-label">Collaboration Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Members Grid */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Captain Bash</h2>
          <div className="members-grid">
            {cb.map(cb => (
              <div key={cb.id} className="member-card">
                <div className="member-avatar">
                  <span className="avatar-emoji">{cb.avatar}</span>
                </div>
                <div className="member-info">
                  <h3 className="member-name">{cb.name}</h3>
                  <p className="member-role">{cb.role}</p>
                  <p className="member-specialization">{cb.specialization}</p>
                  <p className="member-bio">{cb.bio}</p>
                  <div className="member-skills">
                    {cb.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                  <a href={cb.portfolioUrl} className="portfolio-button" target="_blank" rel="noopener noreferrer">View Portfolio</a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container">
          <h2 className="section-title">Our Amazing Team</h2>
          <div className="members-grid">
            {members.map(member => (
              <div key={member.id} className="member-card">
                <div className="member-avatar">
                  <span className="avatar-emoji">{member.avatar}</span>
                </div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-specialization">{member.specialization}</p>
                  <p className="member-experience">{member.experience}</p>
                  <p className="member-bio">{member.bio}</p>
                  <div className="member-skills">
                    {member.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                  <a href={member.portfolioUrl} className="portfolio-button" target="_blank" rel="noopener noreferrer">View Portfolio</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Members;