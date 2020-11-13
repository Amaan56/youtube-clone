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

  const [style, setStyle] = useState({});
  const [counter, setCounter] = useState(0);

  const scrollLeft = () => {
    setCounter((prevState, props) => prevState + 150);
    console.log(counter);
    console.log('Left');
    setStyle({
      transform: `translate(${counter}px)`,
    });
  };

  const scrollRight = () => {
    setCounter((prevState, props) => prevState - 150);
    console.log(counter);
    console.log('Right');
    setStyle({
      transform: `translate(${counter}px)`,
    });
  };

  return (
    <div className="scrollingmenu">
      <div className="scrollingmenu__left" onClick={scrollLeft}>
        &lt;
      </div>
      <div className="scrollingmenu__container">
        {tags.map((tag, i) => {
          return (
            <div className="scrollingmenu__tag" key={i} style={style}>
              <p>{tag}</p>
            </div>
          );
        })}
      </div>
      <div className="scrollingmenu__right" onClick={scrollRight}>
        &gt;
      </div>
    </div>
  );
}

export default ScrollingMenu;
