import React, { useState, useEffect } from 'react';

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <button
      className="back-to-top"
      onClick={scrollToTop}
      style={{ display: visible ? 'inline' : 'none' }}
    >
      ↑ Topo
    </button>
  );
};

export default BackToTopButton;
