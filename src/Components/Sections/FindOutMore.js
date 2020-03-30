import React from 'react';
import ButtonPrimary from '../Buttons/ButtonPrimary';
import FindOutMoreData from "../../Data/FindOutMoreData.json"

function FindOutMore() {
  const CONTENT = FindOutMoreData.content;

  return (
    <section className="find-out background--black">
      <div className="container">
        <h1>{CONTENT[0].title}</h1>
        <ButtonPrimary 
          link={"this"}
          title={"Find out more"}
        />
      </div>
    </section>
  )
}

export default FindOutMore;
