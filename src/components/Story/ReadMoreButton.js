import React from 'react';
import { Plus } from 'lucide-react';

const ReadMoreButton = () => (
  <button className="read-more">
    <Plus size={16} className="plus-icon" />
    <span className="button-text">READ MORE</span>
  </button>
);

export default ReadMoreButton;