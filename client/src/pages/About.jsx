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
  font-size: 30px;
  line-height: 1.5;
  @media (max-width: 700px) {
    font-size: 16px;
    line-height: 1;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      {/* <AboutHeading style={{color:'white'}}>About Us</AboutHeading> */}
      <AboutParagraph style={{color:'white'}}>
      Welcome to PostPro, the ultimate AI-driven solution designed to revolutionize the way you create and manage social media content. Whether you're a solo creator, a growing brand, or a thriving business, PostPro empowers you to craft impactful, engaging posts effortlessly.

<h2>Our Mission</h2>
At PostPro, we aim to simplify content creation for everyone. We believe creativity shouldn't be hindered by time constraints or writer's block. Our AI technology is designed to support your vision, helping you express your ideas seamlessly while maximizing their impact.

<h2>What Makes Us Different?</h2>
AI-Powered Post Writing: With PostPro's AI post writer feature, you can generate high-quality, tailored content that resonates with your audience.
Seamless Workflow: Save time with tools that streamline your social media strategy—from post creation to scheduling and analytics.
Creativity Meets Efficiency: PostPro lets you focus on your brand's voice while our AI handles the heavy lifting of content generation.
<h2>How It Works</h2>
Input Your Ideas: Share your thoughts or prompts with our AI.
Watch the Magic: PostPro crafts compelling, ready-to-use posts tailored to your style and goals.
Refine & Publish: Tweak the content if needed, then post directly to your favorite platforms or schedule for later.
<h2>Why Choose PostPro?</h2>
Time-Saving: Automate the writing process and focus on what truly matters—engaging with your audience.
Tailored Results: Our AI adapts to your unique tone, ensuring every post feels authentically yours.
Enhanced Engagement: Create posts that captivate and convert, driving meaningful interactions with your audience.
<h2>Join the Future of Social Media</h2>
At PostPro, we’re committed to empowering creators and businesses alike. Our platform isn’t just about writing—it’s about making your voice heard. Discover the ease of AI-driven content creation and unlock your full potential today!

Ready to get started? Let PostPro handle the posts while you focus on growing your brand.
      </AboutParagraph>
    </AboutContainer>
  );
};

export default About;