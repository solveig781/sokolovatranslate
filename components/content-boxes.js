import React from 'react';

import ContentBox from 'components/content-box';

function ContentBoxes({ children }) {
  if (!children) return null;
  if (children instanceof Array === false) {
    // eslint-disable-next-line no-console
    console.error('Children to ContentBoxes must be an array');
    return null;
  }
  if (!children.length) return null;

  const [firstChild, ...restChildren] = [].concat(children);
  const [lastChild] = children.slice(-1);

  const getBackgroundAtIndex = index =>
    children.length > index && children[index].background;

  return (
    []
      // We'll render the first child
      // and on the way out, we'll render the next childs
      // diagonal color if we have at least 2 children
      .concat(
        <ContentBox
          key="first-content-box"
          colorOut={getBackgroundAtIndex(1)}
          background={firstChild.background}
        >
          {firstChild.content}
        </ContentBox>,
      )
      // Now simply render each of the rest of the children save the last
      // each time skipping the first diagonal render and choosing the next
      // diagonal background color based on the next item in the children
      .concat(
        restChildren.slice(0, -1).map(({ key, background, content }, idx) => (
          <ContentBox
            showIn={false}
            key={key || idx}
            background={background}
            colorOut={getBackgroundAtIndex(idx + 2)}
          >
            {content}
          </ContentBox>
        )),
      )
      // Render the bottom cap
      // Here we should finally render the out diagonal
      .concat(
        lastChild !== firstChild && (
          <ContentBox
            showIn={false}
            key="last-content-box"
            background={lastChild.background}
          >
            {lastChild.content}
          </ContentBox>
        ),
      )
  );
}

ContentBoxes.defaultProps = {};

export default ContentBoxes;
