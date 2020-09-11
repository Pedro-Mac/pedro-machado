import React from "react";

function TabText(props) {
  return (
    <>
      {(props.tab === "about" && (
        <>
          <p>
            I am a fullstack developer, with a big passion for innovation,
            adventure and nature.
          </p>
          <p>
            My goal is to add value to creative projects with meaningful
            missions.
          </p>
        </>
      )) ||
        (props.tab === "skills" && (
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
        (props.tab === "contact" && (
          <>
            <p>lorem@ipsum.com</p>
            <p>+48 514 279 063</p>
            <p>LinkedIn</p>
            <p>Github</p>
          </>
        ))}
    </>
  );
}

export default TabText;
