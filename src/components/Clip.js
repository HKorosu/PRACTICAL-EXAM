import React from 'react';

const Clip = ({ title, description, start, sourceClip }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', borderRadius: '5px' }}>
      <img src={start} alt={title} style={{ width: '100%' }} />
      <h3>{title}</h3>
      <p>{description}</p>
      <video width="100%" controls>
        <source src={sourceClip} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Clip;
