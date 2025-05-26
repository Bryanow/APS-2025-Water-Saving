import React from 'react';

const Section = ({ id, title, children }) => {
 return (
    <section id={id} className="section">
      <div className="section-content">
        <h2 className="section-title">{title}</h2>
        <div className="section-text">{children}</div>
      </div>
    </section>
  );
};

export default Section;
