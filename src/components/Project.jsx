import React from "react";

function Project(props) {
  const projects = props.projectArray;

  if (projects.length === 0) {
    return (
      <section id="projects">
        <h3>My Projects</h3>
        <div className="no-project-cards">
          <div className="project-card no-project-card">
            <div className="project-img-container no-project-img">
              <div>
                <h4>No recent projects</h4>
                <p>
                  As I am just starting out so I have no previous work
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section id="projects">
        <h3>My Projects</h3>

        <div className="project-cards">
          {projects.map((item, index) => (
            <div className="project-card">
              <div className="project-img-container">
                <div key={index}>
                  <h4>{item.projectName}</h4>
                  <p>{item.projectDes}</p>
                </div>
              </div>
               <button className="visit-btn" href={item.link}>Visit</button>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Project;
