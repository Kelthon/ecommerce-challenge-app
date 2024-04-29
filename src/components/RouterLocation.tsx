import './RouterLocation.css';
import React, { useState } from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
// import placeholder from './placeholder.jpg';

interface RouterLocationProps {
  hasEndPoint?: boolean;
  className?: string;
}

function toCapitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRoutePath(): string[] {
  const root: string = 'home';
  const path: string = root.concat(window.location.pathname);

  return path.split('/').map((route) => toCapitalize(route));
}

export default function RouterLocation({
  hasEndPoint,
  className,
}: RouterLocationProps): JSX.Element {
  const [location, setLocation] = useState(getRoutePath());
  const [items, setItems] = useState(
    location.map((item, index) => (
      <>
        {hasEndPoint && index === location.length - 1 ? (
          <li key={`${hasEndPoint? 'rle': 're'}-${index}`} className="router-endpoint">
            {item}
          </li>
        ) : (
          <li
            key={`${hasEndPoint? 'rle': 're'}${index}`}
            className={
              !hasEndPoint && index === 0
                ? 'router-focus'
                : hasEndPoint
                  ? 'router-blur'
                  : 'route-item'
            }
          >
            <Link to={window.location.pathname}>{item}</Link>
            {(index !== location.length - 1 || hasEndPoint) && (
              <RiArrowRightSLine className="icon" />
            )}
          </li>
        )}
      </>
    )),
  );

  return (
    <ul id="router-location" className={className}>
      {items}
    </ul>
  );
}
