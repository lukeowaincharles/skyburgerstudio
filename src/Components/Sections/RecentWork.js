import React from "react";
import RecentWorkData from "../../Data/RecentWorkData.json";

function RecentWork() {
  const CONTENT = RecentWorkData.content,
    PROJECTCONTENT = RecentWorkData.projects;

  const projects = PROJECTCONTENT.map((item, index) => {
    return (
      <div className="col-md-4" key={index}>
        <a href={item.link}>
          <div className={`${"project"} ${"project--" + index}`}>
            <div className="project__image-wrapper">
              <span>{item.linkText}</span>
              <img src={item.image} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </a>
      </div>
    );
  });

  return (
    <section className="recentwork background--black text-center" id="recentWork" name="#recentWork">
      <div className="container">
        <h2>{CONTENT[0].title}</h2>
        <div className="row">{projects}</div>
      </div>
    </section>
  );
}

export default RecentWork;
