import React from 'react';

const dummyFeed = [
  {title: "Hot CheeseStake", likes: 5, author: 'Mr.SharpKnife'},
  {title: "FruitShake", likes: 15, author: 'Mr.Shaky'},
  {title: "Shakshuka", likes: 15, author: 'Mr.Shaky'},
  {title: "Fruit Salad", likes: 5, author: 'Mr.SharpKnife'},

];

const Feed = props => {
  const title = "Hot Recipes!";

  return (
    <div className="feed">
      <div className="feed__container">
        <h1 className="feed__heading">{props.title || title}</h1>
        <ul className="feed__list">
          {dummyFeed.map((x,i) => {
            return (
              <li 
                className="feed__itemContainer" 
                key={i}>
                <div className="feed__item">
                  <span className="feedItem__title">{x.title}</span>
                  <span className="feedItem__author">By: {x.author}</span>
                  <span className="feedItem__likes">forks: {x.likes}</span>
                </div> 
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Feed;