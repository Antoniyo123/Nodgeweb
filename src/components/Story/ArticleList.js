import React from 'react';
import ArticleCard from './ArticleCard';

const ArticleList = ({ articles, activeCategory }) => {
  const filteredArticles = activeCategory === 'ALL' 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  return (
    <div className='story__container'>
      <header className="page-header">
        <h1 className="page-title">Our Stories</h1>
        <p className="page-subtitle">Discover the latest stories, interviews, and insights</p>
      </header>

      <div className="articles-container">
        <div className="articles-grid">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleList;