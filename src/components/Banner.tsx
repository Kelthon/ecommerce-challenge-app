import React from 'react';
import './Banner.css';
import placeholder from './placeholder.jpg';
import ImageWithFallback from './ImageWithFallback';

export default function Banner(): JSX.Element {
  return (
    <div className="banner">
      <ImageWithFallback
        src="https://s3-alpha-sig.figma.com/img/98fb/219f/a11f805aade2224f1d6658764a2395df?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fzEZkcNnASyRmBq59KJKVJDxq3U8qpDJCi9IAeWTPUbZ42gVs11rxAfi10KLhxPG681XT05hy2gMY~MGZ6~jj4YqFJ9v33zH8Poxb8KtsoDpHAZAWqvV2-Td3IriKaUAnyy83JWVRao1WqYaz0fuyI0e5BDhwXA9qlzHsP7zi-qZnNs0TKrOhDjiRmjDQxOIWZLXIfFRwAKH2OVh0quI05MQa8s1I3t~eB6~m~QqkLPHrN9UZsPb1hXiABWt8kgzVNS9Jn74mQFa5f9H5x0uXCxstPCKu87TJwUol7Gh316VgQ-eMfMdQZxPRLn7lCUKa1vA4lsUsYO4Wcq9naDbaA__"
        fallback={placeholder}
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
