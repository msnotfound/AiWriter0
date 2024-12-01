import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HeroBg from "/utils/images/white-vintage-brick-wall.jpg";
import { motion } from "framer-motion";
import {Link as linkr} from "react-router-dom";
const Container = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  margin-top: 30px;
  padding: 12px;
  flex-direction: column;
  gap: 22px;
  align-items: center;
  justify-content: center;
  background-image: url(${HeroBg});
  overflow
  background-size: cover;
  background-position: center;
  @media (max-width: 600px) {
    padding: 8px;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  margin-top: 22px;
  max-width: 1100px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 700px) {
    font-size: 30px;
    line-height: 40px;
  }
`;

const Desc = styled.div`
  font-size: 40px;
  text-align: center;
  max-width: 900px;
  line-height: 40px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 700px) {
    line-height: 20px;
    font-size: 14px;
  }
`;

const Buttonlink = styled(linkr)`
text-decoration: none;
`;

const Button = styled.div`
  border-radius: 20px;
  color: white;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: min-content;
  padding: 10px 24px;
  @media (max-width: 600px) {
    padding: 8px 12px;
  }
  &:hover {
    transform: scale(1.05);
  }
  background: ${({ theme }) => theme.primary};
`;
const Span=styled.span`
font-size:45px;
@media (max-width: 700px) {
    font-size: 30px;
    line-height: 40px;
  }`;
const Hero = () => {
  const staticPhrase = "Unleash Your Creativity with AI-Powered ";
  const phrases = ["Assistance","Creativity" ,"PostPro."];
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = phrases[phraseIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing Effect
        if (typingIndex < currentText.length) {
          setCurrentPhrase((prev) => prev + currentText[typingIndex]);
          setTypingIndex((prev) => prev + 1);
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        // Deleting Effect
        if (typingIndex > 0) {
          setCurrentPhrase((prev) => prev.slice(0, -1));
          setTypingIndex((prev) => prev - 1);
        } else {
          // Move to the next phrase
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [typingIndex, isDeleting, phrases, phraseIndex]);

  return (
    <Container
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Title>
        {staticPhrase} <Span style={{ color: "#076ef5", textDecoration: "underline", // Add underline
            textDecorationColor: "#FF5733", // Underline color
            textDecorationThickness: "2px",}}>{currentPhrase}</Span>
      </Title>
      <Desc>
        Meet PostPro, your ultimate AI-powered post writin companion. Craft
        captivating posts effortlessly while ensuring they’re impactful,
        engaging, and tailored to your audience. Say goodbye to writer’s
        block—PostPro’s AI post writer feature transforms ideas into polished,
        ready-to-publish content. Create smarter, faster, and better!
      </Desc>
      <Buttonlink to='/signup'>
        <Button>Get Started Here!</Button>
      </Buttonlink>
    </Container>
  );
};

export default Hero;
