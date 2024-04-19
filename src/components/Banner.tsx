import React from 'react';
import './Banner.css';

function Banner(): JSX.Element {
  return (
    <div className="banner">
      <img
        src="./pexels-fotoaibe-1643383.jpg"
        alt="A room filled with a new collection of furniture: chairs, tables, sofas, kitchen cabinets, bookshelves, etc."
      />
      <div className="container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
      </div>
    </div>
  );
}

export default Banner;
