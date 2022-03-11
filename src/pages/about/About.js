import React from 'react'
import { AboutContainer, HeaderContainer, InfoContainer, StyledImage } from './AboutStyle'
import codingSvg from "../../assets/aboutme.jpg"

const About = () => {
    return (
      <AboutContainer>
          <StyledImage src={codingSvg} style={{width: "1000px"}}/>
          <HeaderContainer>
          <h1>About Software Developer <span>Gul Sahin</span> </h1>
          </HeaderContainer>
          <InfoContainer>
          <h2>Hi, I'am Gul</h2>
                <h3>I’m currently learning Full-Stack Development Languages.</h3>
                <h4> I've already known JS, ReactJS, NodeJS, SQL,
          Python, Django</h4>
          <h2>
          <a href="mailto:gulburaksahin@gmail.com">Send email</a> :
          gulburaksahin@gmail.com
        </h2>
          </InfoContainer>
      </AboutContainer>
    )
}

export default About
