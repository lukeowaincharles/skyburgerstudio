import React from 'react';
import ButtonPrimary from '../Buttons/ButtonPrimary';
import FindOutMoreData from "../../Data/FindOutMoreData.json";
import * as Icons from "../Icons";

function FindOutMore() {
  const CONTENT = FindOutMoreData.content;

  return (
    <section className="find-out background--black">
      <div className="container">
        <h1>{CONTENT[0].title}</h1>
        <ButtonPrimary 
          link={"#whoWeAre"}
          title={"Find out more"}
        />
      </div>
      {Icons.Code}
      {Icons.Hash}
      {Icons.Heart}
    </section>
  )
}

export default FindOutMore;
