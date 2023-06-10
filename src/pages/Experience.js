import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@material-ui/icons/School';
import "../styles/Experience.css";

function Experience() {
  return (
    <div className='experience'>
        <VerticalTimeline lineColor='#3e497a'>
            <VerticalTimelineElement 
                className='vertical-timeline-element--education'
                date='2019 - 2023'
                iconStyle={{background: "#3e497a", color: "#fff" }}
                icon={<SchoolIcon/>}
            >
                <h3 className='vertical-timeline-element-title'>The University of Texas at Austin</h3>
                <h4 className='vertical-timeline-element-subtitle'>Austin, TX</h4>
                <p>BS in Computer Science</p>
            </VerticalTimelineElement> 

            <VerticalTimelineElement 
                className='vertical-timeline-element--education'
                date='2019 - 2023'
                iconStyle={{background: "#3e497a", color: "#fff" }}
                icon={<SchoolIcon/>}
            >
                <h3 className='vertical-timeline-element-title'>The University of Texas at Austin</h3>
                <p>BS in Computer Science</p>
            </VerticalTimelineElement> 

            <VerticalTimelineElement 
                className='vertical-timeline-element--education'
                date='2019 - 2023'
                iconStyle={{background: "#3e497a", color: "#fff" }}
                icon={<SchoolIcon/>}
            >
                <h3 className='vertical-timeline-element-title'>The University of Texas at Austin</h3>
                <p>BS in Computer Science</p>
            </VerticalTimelineElement> 

            <VerticalTimelineElement 
                className='vertical-timeline-element--education'
                date='2019 - 2023'
                iconStyle={{background: "#3e497a", color: "#fff" }}
                icon={<SchoolIcon/>}
            >
                <h3 className='vertical-timeline-element-title'>The University of Texas at Austin</h3>
                <p>BS in Computer Science</p>
            </VerticalTimelineElement> 
           
           
        </VerticalTimeline>
    </div>
  )
}

export default Experience