import React from 'react';
import ReadMoreButton from './ReadMoreButton';

const ArticleCard = ({ article }) => (
  <div className="article-card">
    <div className="article-image-wrapper">
      <img src={article.image} alt={article.title} className="article-image" />
    </div>
    <div className="article-content">
      <h3 className="article-title">{article.title}</h3>
      <p className="article-excerpt">{article.excerpt}</p>
      <ReadMoreButton />
    </div>
  </div>
);
export default ArticleCard;