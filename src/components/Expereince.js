import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../constants';


export const Expereince = () => {
    return (
        <div className="experience" id="experience">
          <div className="experience-header">
            <p>MY JOURNEY SO FAR.</p>
            <h2>Work Experience.</h2>
          </div>
          <VerticalTimeline className="vertical-timeline">
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.role}
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#1d1836", color: "#fff" }}
                contentArrowStyle={{ borderRight: "7px solid  #232631" }}
                date={experience.duration}
                iconStyle={{ background: '#fff' }}
                icon={
                  <a className='icon-wrapper' href={experience.url} target='_blank' rel='noopener noreferrer'>
                    <img
                      src={experience.logo}
                      alt={experience.company}
                      className='icon-image'
                    />
                  </a>
                }
              >
                <div>
                  <h3 className='experience-role'>{experience.role}</h3>
                  <p className='experience-company'>
                    {experience.company}
                  </p>
                </div>
    
                <ul className='experience-points'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='experience-point'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      );
    }
    

