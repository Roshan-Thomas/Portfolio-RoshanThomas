import React from 'react';
import Scroll from './Scroll';
import config from '../../config';


export default function Header() {
  return (
    <header>
      <h1>{config.heading}</h1>
      <p>{config.subHeading}</p>
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} className={`icon ${icon}`} target="_blank">
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      

      <ul className="actions">
        <li>
          <Scroll type="id" element="first">
            <a href="#first" className="arrow">
              <span className="label">Next</span>
            </a>
          </Scroll>
        </li>
      </ul>
    </header>
  )
}
