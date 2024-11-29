import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  // Your custom styles here
  padding: 20px;
  text-align: center;
`;

const AboutHeading = styled.h2`
  // Your custom styles here
  font-size: 24px;
  margin-bottom: 10px;
`;

const AboutParagraph = styled.p`
  // Your custom styles here
  font-size: 16px;
  line-height: 1.5;
`;

const About = () => {
  return (
    <AboutContainer>
      <AboutHeading>About Us</AboutHeading>
      <AboutParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </AboutParagraph>
    </AboutContainer>
  );
};

export default About;