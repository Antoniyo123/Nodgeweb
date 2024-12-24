import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ArticleList from './ArticleList';
import ArticleDetail from './ArticelDetail';
import { articles } from './Articles';
import '../../css/Story/StoryPage.css';

const StoryPage = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');

  return (
    <Routes>
      <Route path="/" element={<ArticleList articles={articles} activeCategory={activeCategory} />} />
      <Route path="/article/:id" element={<ArticleDetail articles={articles} />} />
    </Routes>
  );
};
export default StoryPage;
