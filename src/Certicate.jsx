import React, { useState } from 'react';
import { createPortal } from 'react-dom';

//making certificate card

function CertificateCard({title, image, verification}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
          <div className="card" onClick={() => setIsOpen(true)} style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}>
            <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)' }}>
              <h3 className="card-title">{title}</h3>
              {verification ? (
                <a 
                  href={verification} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="card-subtitle"
                  onClick={(e) => e.stopPropagation()}
                  style={{ display: 'inline-block', position: 'relative', zIndex: 10 }}
                >
                  Verification
                </a>
              ) : (
                <p className="card-subtitle">Certificate</p>
              )}
            </div>
            <div style={{ padding: '1rem', display: 'flex', justifyContent: 'center' }}>
              <img 
                src={image} 
                alt={title} 
                style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', display: 'block', transition: 'transform 0.3s ease' }} 
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
          </div>

          {isOpen && createPortal(
            <div 
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                zIndex: 10000,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2rem',
                backdropFilter: 'blur(5px)'
              }}
              onClick={() => setIsOpen(false)}
            >
              <div style={{ position: 'relative', maxWidth: '90%', maxHeight: '90%' }}>
                <button 
                  onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                  style={{
                    position: 'absolute',
                    top: '-40px',
                    right: '0',
                    background: 'none',
                    border: 'none',
                    color: 'white',
                    fontSize: '2.5rem',
                    cursor: 'pointer',
                    lineHeight: '1'
                  }}
                >
                  &times;
                </button>
                <img 
                  src={image} 
                  alt={title} 
                  style={{ maxWidth: '100%', maxHeight: '90vh', borderRadius: '8px', objectFit: 'contain', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }} 
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>,
            document.body
          )}
        </>
    )
}

export default CertificateCard;