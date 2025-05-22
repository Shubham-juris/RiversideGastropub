import React from 'react';

const MapSection = () => {
  const mapStyle = {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    height: '400px', 
    borderRadius: '0.5rem', 
    boxShadow: '0 0.5rem 1rem rgba(0,0,0,0.15)', 
  };

  const iframeStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 0,
  };

  return (
    <div className="container my-5">
      <div style={mapStyle}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2644.3528673977043!2d-110.69174752405372!3d50.03904317153074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x530aafe4d487b6d1%3A0xc2a737cd49632567!2s1177%201%20St%20SW%20%233%2C%20Medicine%20Hat%2C%20AB%20T1A%208G1%2C%20Canada!5e0!3m2!1sen!2sca!4v1715881742345!5m2!1sen!2sca"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
          style={iframeStyle}
        ></iframe>
      </div>
    </div>
  );
};

export default MapSection;
