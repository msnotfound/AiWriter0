import React from 'react';
import styled from 'styled-components';
import Hero from './Hero';
import FeaturesCard from './Features';
const HomeContainer = styled.div`
  // Your custom styles here
  padding: 20px;
  text-align: center;
`;

const HomeHeading = styled.h1`
  // Your custom styles here
  font-size: 36px;
  margin-bottom: 20px;
`;

const HomeParagraph = styled.p`
  // Your custom styles here
  font-size: 18px;
  line-height: 1.5;
  color: ${({theme})=>theme.text_primary}
`;

const HomeButton = styled.button`
  // Your custom styles here
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Hero />
      
      {/* <HomeHeading>Welcome to Our Website</HomeHeading>
      <HomeParagraph>
        This is the home page of our website. Here, you can find information about our products, services, and team.
      </HomeParagraph>
      <HomeButton>Learn More</HomeButton> */}
    </HomeContainer>
  );
};

export default Home;