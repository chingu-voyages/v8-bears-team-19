import React from 'react';

const dummyFeed = [
  {title: "Hot CheeseStake", likes: 5, author: 'Mr.SharpKnife'},
  {title: "FruitShake", likes: 15, author: 'Mr.Shaky'},
];

const Feed = props => {
  return (
    <div className="feed">
      <div className="feed__container">
        <ul className="feed__list">
          {dummyFeed.map((x,i) => {
            return (
              <li 
                className="feed__itemContainer" 
                key={i}>
                <div className="feed__item">
                  <span className="feedItem__title">{x.title}</span>
                  <span className="feedItem__author">{x.author}</span>
                  <span className="feedItem__likes">{x.likes}</span>
                </div> 
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
};

export default Feed;