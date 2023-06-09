import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import '../styles/Home.css';
function Home() {
  return (
    <div className='home'>
        <div className='about'>
            <h2>Hi, My Name is Minh</h2>
            <div className='prompt'>
                <p>A software developer with a passion for learning and creating.</p>
                <LinkedInIcon />
                <EmailIcon />
                <GitHubIcon />
            </div>
        </div>
        <div className='skills'>
            <h1>Skills</h1>
            <ol className='list'>
                <li className='item'>
                    <h2>Front-End</h2>
                    <span>
                        ReactJS, Redux, HTML, CSS, React Native, NPM, Bootstrap
                    </span>
                </li>
                <li className='item'>
                    <h2>Back-End</h2>
                    <span>
                        NodeJS, MySQL, MongoDB, AWS S3, DynamoDB
                    </span>
                </li>
                <li className='item'>
                    <h2>Languages</h2>
                    <span>
                        JavaScript, Java, Python, C, C++
                    </span>
                </li>
            </ol>
        </div>

    </div>
  )
}

export default Home