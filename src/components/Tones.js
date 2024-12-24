// DocumentaryChannel.jsx
import React, { useState } from 'react';
import '../css/FootageComponent.css';
const DocumentaryChannel = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const documentaries = [
    {
      id: 1,
      title: "Tones Live ➕ Dongker’s Book Release Supported by Veev",
      subtitle: "Celebrating 100 Years of Turkish-Japanese Friendship",
      thumbnail: require('../img/Tones/+ones  Dongker.webp'),
      category: "Culture, History",
      youtubeId: "zHwPg6RG_Mw"
    },
    {
      id: 2,
      title: "A deeper understanding of ‘Si Paling Mahir’ by Raisa (Talkshow by Rapot)",
      subtitle: "Balletcore and Modern Manga",
      thumbnail: require('../img/Tones/+ones  Raisa.webp'),
      category: "Culture, Art",
      youtubeId: "joD7GzhG-p4"
    },
  ];

  // Extract unique categories
  const allCategories = ['All', ...new Set(
    documentaries.flatMap(doc => doc.category.split(', '))
  )];

  const handleVideoClick = (youtubeId) => {
    setSelectedVideo(youtubeId);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'auto';
  };

  const filteredDocumentaries = activeCategory === 'All'
    ? documentaries
    : documentaries.filter(doc => doc.category.includes(activeCategory));

  return (
    <div className="documentary-container">
      <h1 className="channel-title">Featured TONES</h1>
      
      {/* <div className="category-tabs">
        {allCategories.map((category) => (
          <button
            key={category}
            className={`category-tab ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div> */}

      <div className="documentary-grid">
        {filteredDocumentaries.map((doc) => (
          <div
            key={doc.id}
            className="documentary-card"
            onClick={() => handleVideoClick(doc.youtubeId)}
          >
            <div className="thumbnail-container">
              <img
                src={doc.thumbnail}
                alt={doc.title}
                className="thumbnail"
              />
              <div className="overlay">
                <div className="play-button">▶</div>
              </div>
            </div>
            <div className="content">
              {/* <div className="category">{doc.category}</div> */}
              <h2 className="title">{doc.title}</h2>
              {/* <p className="subtitle">{doc.subtitle}</p> */}
            </div>
          </div>
        ))}
      </div>

      {selectedVideo && (
        <div className="modal-overlay active" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseModal}>×</button>
            <iframe
              className="youtube-embed"
              src={`https://www.youtube.com/embed/${selectedVideo}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentaryChannel;