import React from 'react';

interface Props {
  heading: string;
  description: string;
  tech: string[];
  img : string;
  github : string;
  link : string;
}

const Card: React.FC<Props> = (props) => {
  return (
    <>
      <div className="card">
        <div className="left-part">
          <div className="project-heading">
            <h2>{props.heading}</h2>
          </div>
          <div className="project-description">
            <h4>{props.description}</h4>
          </div>
          <div className="tech-stack">
            {props.tech.map((tech: string) => (
              <div key={tech}>{tech}</div>
            ))}
          </div>
        </div>
        <div className="right-part">
          <img src={props.img} alt="tt" />
          <div className="links">
            <a href={props.github} target='_blank'>
            <i className='lab la-github'></i>
            </a>
            <a href={props.link} target='_blank'>
            <i className='las la-link'></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
