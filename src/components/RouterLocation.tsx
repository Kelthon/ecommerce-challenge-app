import './RouterLocation.css';
import React, { useState } from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
// import placeholder from './placeholder.jpg';

interface RouterLocationProps {
  hasEndPoint?: boolean;
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
}: RouterLocationProps): JSX.Element {
  const [location, setLocation] = useState(getRoutePath());

  return (
    <ul id="router-location">
      {location.map((item, index) => (
        <>
          <li
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
              <RiArrowRightSLine className='icon' />
            )}
          </li>
          {hasEndPoint && index === location.length - 1 && (
            <li className="router-endpoint">{item}</li>
          )}
        </>
      ))}
    </ul>
  );
}
