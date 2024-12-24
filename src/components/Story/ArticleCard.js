import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({ article }) => (
  <div className="article-card">
    <div className="article-image-wrapper">
      <img 
        src={article.image}
        alt={article.headline}
        className="article-image"
      />
      <div className="article-overlay" />
      
      <div className="article-content">
        <div className="article-meta">
          {/* <span>{article.category}</span> */}
          <span>{article.date}</span>
        </div>
        <h2 className="article-headline">{article.headline}</h2>
      </div>
    </div>
    <p className="article-excerpt">{article.excerpt}</p>
    <Link to={`/stories/article/${article.id}`} className="read-more">Read More</Link>

  </div>
);

export default ArticleCard;