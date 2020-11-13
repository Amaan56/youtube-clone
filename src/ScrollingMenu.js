import React, { useState } from 'react';
import './ScrollingMenu.css';

function ScrollingMenu() {
  const [tags, setTags] = useState([
    'All',
    'Stocks',
    'Preofessional Wrestling',
    'React',
    'Jimmy Kimmel',
    'Tax',
    'React',
    'Stocks',
    'Tax',
    'Preofessional Wrestling',
    'React',
    'Jimmy Kimmel',
    'Preofessional Wrestling',
    'React',
    'Jimmy Kimmel',
    'Preofessional Wrestling',
    'React',
    'Jimmy Kimmel',
    'Preofessional Wrestling',
    'React',
    'Jimmy Kimmel',
    'Preofessional Wrestling',
    'React',
    'Jimmy Kimmel',
    'Preofessional Wrestling',
    'React',
  ]);
  return (
    <div className="scrollingmenu">
      <div className="scrollingmenu__container">
        {tags.map((tag) => {
          return (
            <div className="scrollingmenu__tag">
              <p>{tag}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ScrollingMenu;
