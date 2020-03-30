import React from 'react';
import ButtonPrimary from '../Buttons/ButtonPrimary';
import FindOutMoreData from "../../Data/FindOutMoreData.json";
import { ReactComponent as CodeIcon } from "../../Assets/images/coding.svg";
import { ReactComponent as HashIcon } from "../../Assets/images/hashtag.svg";
import { ReactComponent as HeartIcon } from "../../Assets/images/heart.svg";

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
      <CodeIcon className="icon icon--code" />
      <HashIcon className="icon icon--hash" />
      <HeartIcon className="icon icon--heart" />
    </section>
  )
}

export default FindOutMore;
