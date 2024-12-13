import React, { useEffect, useState } from 'react';
import Clip from '../components/Clip';
import data from '../data/MyClip.json';

const MyClipPage = () => {
  const [clips, setClips] = useState([]);

  useEffect(() => {
    setClips(data);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>My Clips</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {clips.map((clip, index) => (
          <Clip
            key={index}
            title={clip.title}
            description={clip.description}
            start={clip.start}
            sourceClip={clip.source_clip}
          />
        ))}
      </div>
    </div>
  );
};

export default MyClipPage;
