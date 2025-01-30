import React from 'react';
import ReadMoreButton from './ReadMoreButton';

const FeaturedArticleCard = ({ article }) => (
  <div className="featured-article">
    <div className="featured-image-wrapper">
      <img src={article.image} alt={article.title} className="featured-image" />
    </div>
    <div className="featured-content">
      <h2 className="featured-title">{article.title}</h2>
      <ReadMoreButton />
    </div>
  </div>
);

export default FeaturedArticleCard;