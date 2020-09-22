import React from 'react';

import './TabText.scss';

function TabText(props) {
  return (
    <>
      {(props.tab === 'about' && (
        <>
          <p>
            I am a fullstack developer, with a big passion for innovation,
            adventure and nature.
          </p>
          <p>
            My mission is to add value to creative projects with meaningful
            missions.
          </p>
        </>
      )) ||
        (props.tab === 'skills' && (
          <>
            <p>
              I have a strong knowledge of Javascript, React, NodeJS with
              Express and MongoDB.
            </p>
            <p>
              My current goal is to learn Redux and to become more proficient in
              Frontend Development.
            </p>
          </>
        )) ||
        (props.tab === 'contact' && (
          <>
            <p>contact@pedromachado.eu</p>
            <p>+48 514 279 063</p>

            <a
              href="https://www.linkedin.com/in/pedrotmachado/"
              target="blank"
              className="Anchor"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/Pedro-Mac"
              target="blank"
              className="Anchor"
            >
              Github
            </a>
          </>
        ))}
    </>
  );
}

export default TabText;
