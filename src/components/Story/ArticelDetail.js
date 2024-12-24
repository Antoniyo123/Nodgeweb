import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../../css/Story/ArticleDetail.css'

const ArticleDetail = ({ articles }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const article = articles.find(article => article.id === parseInt(id));
  
  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="article-detail-container">
      {/* <button onClick={() => navigate(-1)} className="back-button">
        ← Back
      </button> */}
      <div className="article-detail-content">
        <h1 className="article-title">{article.headline}</h1>
        <div className="article-metadata">
          {/* <span className="article-category">{article.category}</span> */}
          <span className="article-date">{article.date}</span>
        </div>
        
        <img 
          src={article.image} 
          alt={article.headline}
          className="article-detail-image"
        />
        
        <div className="article-text">
          {/* <p className="article-excerpt">{article.excerpt}</p> */}
          <div className="article-full-content">
            {article.fullContent ? (
              article.fullContent.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
            ) : (
              <p>No content available.</p>
            )}
          </div>
          
          <div className="additional-images">
            {article.additionalImages?.map((img, index) => (
              <img 
                key={index}
                src={img} 
                alt={`Additional image ${index + 1}`}
                className="additional-image"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
