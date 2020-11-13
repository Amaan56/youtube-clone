import React, { useState, useEffect } from 'react';
import './ScrollingMenu.css';

function ScrollingMenu() {
  const [tags, setTags] = useState([
    'All',
    'Stocks',
    'Preofessional Wrestling',
    'React',
    'Jimmy Kimmel',
    'Tax',
    'Rufus',
    'Bear',
    'Dakota',
    'Fido',
    'Vanya',
    'Samuel',
    'Koani',
    'Volodya',
    'Prince',
    'Yiska',
    'Star Wars',
    'This is us',
    'How I met your mother',
  ]);

  const [counter, setCounter] = useState(0);
  const [leftNavigationShow, setLeftNavigationShow] = useState(false);
  const [rightNavigationShow, setRightNavigationShow] = useState(true);
  const [firstElementStartLeft, setfirstElementStartLeft] = useState(0);

  const scrollContainer = React.createRef();

  let scrollElements = [];

  useEffect(() => {
    //console.log(scrollElements[0].getBoundingClientRect().left);
    setfirstElementStartLeft(scrollElements[0].getBoundingClientRect().left);
  }, []);

  useEffect(() => {
    console.log('Counter changed');

    const scrollContainerLeft = scrollContainer.current.getBoundingClientRect()
      .left;
    const scrollContainerRight = scrollContainer.current.getBoundingClientRect()
      .right;
    const scrollFirstElementLeft = scrollElements[0].getBoundingClientRect()
      .left;
    const scrollLastElementRight = scrollElements[
      scrollElements.length - 1
    ].getBoundingClientRect().right;

    if (scrollLastElementRight < scrollContainerRight) {
      setRightNavigationShow(false);
    }

    if (scrollFirstElementLeft > firstElementStartLeft) {
      setLeftNavigationShow(false);
    }
  }, [counter]);

  const scrollLeft = () => {
    const scrollContainerLeft = scrollContainer.current.getBoundingClientRect()
      .left;
    const scrollContainerRight = scrollContainer.current.getBoundingClientRect()
      .right;
    const scrollFirstElementLeft = scrollElements[0].getBoundingClientRect()
      .left;
    const scrollLastElementRight = scrollElements[
      scrollElements.length - 1
    ].getBoundingClientRect().right;

    if (scrollFirstElementLeft > firstElementStartLeft) {
      setLeftNavigationShow(false);
    } else {
      setCounter((prevState, props) => prevState + 100);
      setRightNavigationShow(true);
    }
    console.log('Left');
  };

  const scrollRight = () => {
    const scrollContainerLeft = scrollContainer.current.getBoundingClientRect()
      .left;
    const scrollContainerRight = scrollContainer.current.getBoundingClientRect()
      .right;
    const scrollFirstElementLeft = scrollElements[0].getBoundingClientRect()
      .left;
    const scrollLastElementRight = scrollElements[
      scrollElements.length - 1
    ].getBoundingClientRect().right;

    setLeftNavigationShow(true);

    if (scrollLastElementRight > scrollContainerRight) {
      setCounter((prevState, props) => prevState - 100);
    } else {
      setRightNavigationShow(false);
    }

    console.log('Right');
  };

  return (
    <div className="scrollingmenu">
      {leftNavigationShow && (
        <div className="scrollingmenu__left" onClick={scrollLeft}>
          &lt;
        </div>
      )}
      <div ref={scrollContainer} className="scrollingmenu__container">
        {tags.map((tag, i) => {
          return (
            <div
              ref={(ref) => {
                scrollElements[i] = ref;
              }}
              className="scrollingmenu__tag"
              key={i}
              style={{ transform: `translate(${counter}px)` }}
            >
              <p>{tag}</p>
            </div>
          );
        })}
      </div>
      {rightNavigationShow && (
        <div className="scrollingmenu__right" onClick={scrollRight}>
          &gt;
        </div>
      )}
    </div>
  );
}

export default ScrollingMenu;
