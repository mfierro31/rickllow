import React, { useState } from 'react';
import './SaveHeart.css';

const SaveHeart = ({ saveText, color }) => {
  const [isEmptyHeartClicked, setIsEmptyHeartClicked] = useState(false);
  const [isFullHeartClicked, setIsFullHeartClicked] = useState(true);

  const heartClick = () => {
    setIsEmptyHeartClicked(!isEmptyHeartClicked);
    setIsFullHeartClicked(!isFullHeartClicked);
  }

  return (
    <>
      <button className="SaveHeart" onClick={heartClick}>
        <i 
          className={`far fa-heart ${isEmptyHeartClicked ? 'd-none' : ''} text-${color}`} 
        ></i>
      </button>
      <button className="SaveHeart" onClick={heartClick}>
        <i 
          className={`fas fa-heart ${isFullHeartClicked ? 'd-none' : ''} text-${color}`}
        ></i>
      </button>
      <span className={saveText ? `SaveHeart-text text-${color}` : 'd-none'}>{`Save${isEmptyHeartClicked ? 'd' : ''}`}</span>
    </>
  );
}

export default SaveHeart;