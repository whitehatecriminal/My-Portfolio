import React, { useEffect } from 'react';
import { 
  GitBranch, 
  Link, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Brain,
  Zap,
  Briefcase,
  Code2,
  GraduationCap,
  Award
} from 'lucide-react';
import './index.css';
import CertificateCard from './Certicate';

function App() {
  return (
    <>
      <div className="bg-glow"></div>
      <div className="bg-glow-2"></div>
      
      <main className="container">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-greeting">Hello, I'm</div>
              <h1 className="hero-title">Shubham Agarwal</h1>
              <h2 className="hero-subtitle">Full Stack Web Developer</h2>
              <p className="hero-desc">
                Motivated and detail-oriented Full Stack Web Developer currently pursuing B.Tech in Computer Science. Strong foundation in frontend and backend technologies with hands-on experience through internships and real-world projects. Looking for an opportunity to contribute and grow in a dynamic tech environment.
              </p>
              
              <div className="hero-contact">
                <a href="mailto:shubhamagarwal18349@gmail.com" className="contact-link">
                  <Mail size={18} />
                  shubhamagarwal18349@gmail.com
                </a>
                <a href="tel:8239690566" className="contact-link">
                  <Phone size={18} />
                  +91 8239690566
                </a>
                <span className="contact-link" style={{ pointerEvents: 'none' }}>
                  <MapPin size={18} />
                  Jaipur, Rajasthan, India
                </span>
                <a href="https://linkedin.com/in/shubham-agarwal-0653b9292" target="_blank" rel="noreferrer" className="contact-link">
                  <Link size={18} />
                  LinkedIn
                </a>
                <a href="https://github.com/whitehatecriminal" target="_blank" rel="noreferrer" className="contact-link">
                  <GitBranch size={18} />
                  GitHub
                </a>
              </div>
            </div>
            
            <div className="hero-image-container">
              <img src="/profile.png" alt="Shubham Agarwal" className="hero-image" />
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="section">
          <h2 className="section-title">Education</h2>
          <div className="card">
            <div className="card-meta">
              <span><GraduationCap size={16} style={{display: 'inline', marginRight: '5px'}}/> Vivekananda Global University, Jaipur</span>
              <span>3rd Year – Pursuing</span>
            </div>
            <h3 className="card-title">B.Tech in Computer Science & Engineering</h3>
          </div>
        </section>

        {/* Experience Section */}
        <section className="section">
          <h2 className="section-title">Internship Experience</h2>
          <div className="grid">
            
            <div className="card">
              <div className="card-meta">
                <span>Bluestock Fintech</span>
                <span>2 Months</span>
              </div>
              <h3 className="card-title">Full Stack Developer Intern</h3>
              <ul className="card-list">
                <li>Developed REST APIs for financial data processing.</li>
                <li>Built a user dashboard to display IPO-related data such as profit/loss and weekly insights.</li>
                <li>Integrated frontend and backend systems for seamless data flow.</li>
                <li>Implemented real-time data visualization using APIs.</li>
              </ul>
            </div>

            <div className="card">
              <div className="card-meta">
                <span>Salesforce Buddy</span>
                <span>2 Months</span>
              </div>
              <h3 className="card-title">Full Stack Developer Intern</h3>
              <ul className="card-list">
                <li>Developed both frontend and backend components of the platform.</li>
                <li>Implemented authentication using Firebase.</li>
                <li>Built a blog writing feature for content publishing.</li>
                <li>Implemented RBAC (Role-Based Access Control) for user permissions.</li>
                <li>Integrated Google Classroom API for managing study resources.</li>
                <li>Used Cloudinary for file and image storage.</li>
                <li>Worked on exporting and managing data (Excel integration).</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Projects Section */}
        <section className="section">
          <h2 className="section-title">Projects</h2>
          <div className="grid">
            
            <div className="card">
              <h3 className="card-title">Debate Platform <Code2 size={20} style={{float: 'right', color: 'var(--accent-primary)'}}/></h3>
              <p className="card-subtitle">Web Platform</p>
              <ul className="card-list">
                <li>Developed a web platform where users can engage in debates and share their thoughts on various topics.</li>
                <li>Encourages users to share thoughts and engage in discussions.</li>
              </ul>
              <div style={{ marginTop: '1.5rem' }}>
                <a href="https://github.com/whitehatecriminal/DebateSphare" target="_blank" rel="noreferrer" className="contact-link" style={{ display: 'inline-flex' }}>
                  <GitBranch size={16} />
                  View Repository
                </a>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">Stock Analysis Platform <Briefcase size={20} style={{float: 'right', color: 'var(--accent-primary)'}}/></h3>
              <p className="card-subtitle">Data Analysis & Web App</p>
              <ul className="card-list">
                <li>Developed a system to analyze stock data and provide insights.</li>
                <li>Helps users understand stock performance using data-driven analysis.</li>
                <li>Backend processes stock data and provides fundamental analysis.</li>
                <li>Project currently under development.</li>
              </ul>
              <div style={{ marginTop: '1.5rem' }}>
                <a href="https://github.com/whitehatecriminal/StockValuation" target="_blank" rel="noreferrer" className="contact-link" style={{ display: 'inline-flex' }}>
                  <GitBranch size={16} />
                  View Repository
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* Certificates */}
        <section className="section">
          <h2 className="section-title">Certificates & Achievements</h2>
          <div className="grid">
            <CertificateCard 
              title="System Design - Stock Market Trading Platform"
              image="/certificate.png"
              
            />
            <CertificateCard 
              title="Cisco Networking Academy - JavaScript Essentials 1"
              image="/image.png"
            />
            <CertificateCard 
              title="InternShip in BluestockFintech"
              image="/bluestock.jpg"
              verification="https://bluestock.in/hr/emp/"
            />
          </div>
        </section>  

        {/* Technical Skills Section */}
        <section className="section">
          <h2 className="section-title">Technical Skills</h2>
          <div className="card" style={{ marginBottom: '2rem' }}>
            
            <div className="skills-category">
              <h3>Frontend</h3>
              <div className="skills-container">
                <span className="skill-tag">HTML</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">React.js</span>
              </div>
            </div>

            <div className="skills-category">
              <h3>Backend & Database</h3>
              <div className="skills-container">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express.js</span>
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">MySQL</span>
              </div>
            </div>

            <div className="skills-category">
              <h3>Tools & Concepts</h3>
              <div className="skills-container">
                <span className="skill-tag">Firebase</span>
                <span className="skill-tag">Cloudinary</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">REST APIs</span>
                <span className="skill-tag">Prisma</span>
                <span className="skill-tag">RBAC</span>
                <span className="skill-tag">Authentication</span>
              </div>
            </div>

          </div>
        </section>

        {/* Strengths Section */}
        <section className="section">
          <h2 className="section-title">Strengths</h2>
          <div className="strengths-grid">
            
            <div className="strength-card">
              <Brain className="strength-icon" size={24} />
              <span>Strong problem-solving mindset</span>
            </div>
            
            <div className="strength-card">
              <Zap className="strength-icon" size={24} />
              <span>Quick learner and adaptable</span>
            </div>
            
            <div className="strength-card">
              <Briefcase className="strength-icon" size={24} />
              <span>Hands-on experience with real-world apps</span>
            </div>
            
            <div className="strength-card">
              <Code2 className="strength-icon" size={24} />
              <span>Good understanding of full-stack workflow</span>
            </div>

          </div>
        </section>

      </main>

      <footer>
        <p>© {new Date().getFullYear()} Shubham Agarwal. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
