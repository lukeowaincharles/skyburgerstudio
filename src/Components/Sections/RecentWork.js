import React from "react";
import RecentWorkData from "../../Data/RecentWorkData.json";
import { Event } from "../Tracking/index";

function RecentWork() {
  const CONTENT = RecentWorkData.content,
    PROJECTCONTENT = RecentWorkData.projects;

  const projects = PROJECTCONTENT.map((item, index) => {
    function handleEvent(item) {
      Event("Recent Projects", item.title, item.link);
    }

    function hasLink() {
      if (item.link) {
        return (
          <a
            className="project__link"
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              handleEvent(item);
            }}
          >
            <div className={`${"project"} ${"project--" + index}`}>
              <div className="project__image-wrapper">
                <span className="btn btn-primary">{item.linkText}</span>
                <img src={item.image} alt={item.title} />
              </div>
              <h3 className="mt-3 mb-1">{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </a>
        );
      } else {
        return (
          <div className={`${"project"} ${"project--" + index}`}>
            <div className="project__image-wrapper">
              <span className="btn btn-primary">{item.linkText}</span>
              <img src={item.image} alt={item.title} />
            </div>
            <h3 className="mt-3 mb-1">{item.title}</h3>
            <p>{item.text}</p>
          </div>
        );
      }
    }
    return (
      <div className="col-md-4" key={index}>
        {hasLink()}
      </div>
    );
  });

  return (
    <section
      className="recentwork background--black text-center"
      id="recentWork"
      name="#recentWork"
    >
      <div className="container">
        <h2>{CONTENT[0].title}</h2>
        <div className="row">{projects}</div>
      </div>
    </section>
  );
}

export default RecentWork;
